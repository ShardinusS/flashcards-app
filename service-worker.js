// Service Worker pour cache offline et notifications
const CACHE_NAME = 'flashcards-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installation du Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .catch((err) => {
        console.log('Erreur lors du cache:', err);
      })
  );
  self.skipWaiting();
});

// Activation du Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  
  // Ignorer les requêtes non-GET et les requêtes vers d'autres origines
  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }
  
  // Pour les routes SPA (navigation), toujours retourner index.html
  if (request.mode === 'navigate' || (request.method === 'GET' && request.headers.get('accept') && request.headers.get('accept').includes('text/html'))) {
    event.respondWith(
      caches.match(new Request('./index.html'))
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(new Request('./index.html'))
            .then((response) => {
              // Vérifier que la réponse est valide
              if (!response || response.status !== 200) {
                throw new Error('Invalid response');
              }
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(new Request('./index.html'), responseToCache);
              });
              return response;
            })
            .catch(() => {
              // Fallback si même index.html n'est pas disponible
              return new Response('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Offline</title></head><body><h1>Application hors ligne</h1></body></html>', {
                status: 200,
                headers: { 'Content-Type': 'text/html; charset=utf-8' }
              });
            });
        })
    );
    return;
  }
  
  // Pour les autres ressources (JS, CSS, images, etc.)
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Retourner la réponse du cache si disponible
        if (response) {
          return response;
        }
        
        // Sinon, faire une requête réseau
        return fetch(request).then((response) => {
          // Vérifier si la réponse est valide
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Cloner la réponse pour le cache
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(() => {
        // En cas d'erreur, retourner index.html pour les navigations
        if (request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        // Pour les autres ressources, retourner une réponse vide
        return new Response('Resource not available offline', {
          status: 404,
          statusText: 'Not Found'
        });
      })
  );
});

// ============================================
// GESTION DES NOTIFICATIONS PUSH
// ============================================

let reminderTimeout = null;
let reminderInterval = null;
let reminderConfig = null;

// Écouter les messages du client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SCHEDULE_REVIEW_REMINDER') {
    const { time, frequency } = event.data;
    reminderConfig = { time, frequency };
    scheduleReviewReminder(time, frequency);
  } else if (event.data && event.data.type === 'CANCEL_REMINDERS') {
    cancelAllReminders();
    reminderConfig = null;
  } else if (event.data && event.data.type === 'GET_REMINDER_CONFIG') {
    // Envoyer la configuration actuelle au client
    event.ports[0].postMessage({ config: reminderConfig });
  }
});

// Planifier un rappel de révision
function scheduleReviewReminder(time, frequency) {
  // Annuler les rappels existants
  cancelAllReminders();
  
  if (!time) return;
  
  const now = Date.now();
  let nextNotificationTime;
  
  if (frequency === 'daily') {
    // Notification quotidienne à l'heure choisie
    const [hours, minutes] = time.split(':').map(Number);
    nextNotificationTime = new Date();
    nextNotificationTime.setHours(hours, minutes, 0, 0);
    
    // Si l'heure est déjà passée aujourd'hui, programmer pour demain
    if (nextNotificationTime.getTime() <= now) {
      nextNotificationTime.setDate(nextNotificationTime.getDate() + 1);
    }
    
    const delay = nextNotificationTime.getTime() - now;
    
    reminderTimeout = setTimeout(() => {
      showReviewNotification();
      // Programmer la prochaine notification quotidienne
      scheduleReviewReminder(time, frequency);
    }, delay);
    
  } else if (frequency === 'hourly') {
    // Notification toutes les heures
    nextNotificationTime = new Date(now + 60 * 60 * 1000);
    nextNotificationTime.setMinutes(0, 0, 0);
    
    const delay = nextNotificationTime.getTime() - now;
    
    reminderTimeout = setTimeout(() => {
      showReviewNotification();
      // Programmer la prochaine notification horaire
      scheduleReviewReminder(time, frequency);
    }, delay);
    
  } else {
    // Notification unique à l'heure choisie
    const [hours, minutes] = time.split(':').map(Number);
    nextNotificationTime = new Date();
    nextNotificationTime.setHours(hours, minutes, 0, 0);
    
    if (nextNotificationTime.getTime() <= now) {
      return; // L'heure est déjà passée
    }
    
    const delay = nextNotificationTime.getTime() - now;
    
    reminderTimeout = setTimeout(() => {
      showReviewNotification();
      reminderConfig = null; // Notification unique, ne plus programmer
    }, delay);
  }
}

// Annuler tous les rappels
function cancelAllReminders() {
  if (reminderTimeout) {
    clearTimeout(reminderTimeout);
    reminderTimeout = null;
  }
  if (reminderInterval) {
    clearInterval(reminderInterval);
    reminderInterval = null;
  }
}

// Afficher une notification de rappel
function showReviewNotification() {
  const title = 'Rappel de révision';
  const options = {
    body: 'Il est temps de réviser vos flashcards !',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: 'review-reminder',
    requireInteraction: false,
    vibrate: [200, 100, 200],
    actions: [
      {
        action: 'open',
        title: 'Ouvrir l\'application'
      },
      {
        action: 'dismiss',
        title: 'Plus tard'
      }
    ]
  };
  
  self.registration.showNotification(title, options);
}

// Gérer les clics sur les notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open' || !event.action) {
    // Ouvrir l'application
    event.waitUntil(
      clients.matchAll({ type: 'window', includeUncontrolled: true })
        .then((clientList) => {
          // Si une fenêtre est déjà ouverte, la mettre au premier plan
          for (let i = 0; i < clientList.length; i++) {
            const client = clientList[i];
            if (client.url === self.registration.scope && 'focus' in client) {
              return client.focus();
            }
          }
          // Sinon, ouvrir une nouvelle fenêtre
          if (clients.openWindow) {
            return clients.openWindow('./index.html');
          }
        })
    );
  }
});

