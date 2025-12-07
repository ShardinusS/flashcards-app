// Service Worker dédié à Firebase Cloud Messaging
// Ce fichier doit être à la racine (même dossier que index.html)

importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js");

// ⚠️ La configuration est chargée depuis config-sw.js (exclu du repo)
// Vérifiez que config-sw.js existe et contient les bonnes valeurs
// Si config-sw.js n'existe pas, copiez config-sw.example.js en config-sw.js et remplissez les valeurs

// Configuration Firebase (chargée depuis config-sw.js)
// Utiliser try-catch pour gérer le cas où config-sw.js n'existe pas
try {
  importScripts("./config-sw.js");
} catch (error) {
  console.error('⚠️ ERREUR: Impossible de charger config-sw.js');
  console.error('📝 Solution: Copiez config-sw.example.js en config-sw.js et remplissez avec vos valeurs Firebase');
  console.error('Erreur:', error);
  // Ne pas initialiser Firebase si la config n'est pas disponible
  throw new Error('Firebase configuration is missing. Please create config-sw.js from config-sw.example.js');
}

// Vérifier que la config est bien chargée
if (typeof firebaseConfig === 'undefined') {
  console.error('⚠️ ERREUR: config-sw.js est chargé mais firebaseConfig n\'est pas défini');
  console.error('📝 Solution: Vérifiez que config-sw.js contient bien la variable firebaseConfig');
  // Ne pas initialiser Firebase si la config n'est pas disponible
  throw new Error('Firebase configuration is missing. Please check config-sw.js contains firebaseConfig');
}

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Initialiser Firebase Messaging
const messaging = firebase.messaging();

// Gérer les notifications en arrière-plan (quand l'app est fermée)
messaging.onBackgroundMessage((payload) => {
  console.log('Notification FCM reçue en arrière-plan:', payload);
  
  const notificationTitle = payload.notification?.title || payload.data?.title || 'Rappel de révision';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || 'Il est temps de réviser vos flashcards',
    icon: payload.notification?.icon || payload.data?.icon || './icon-1024.png',
    badge: './icon-1024.png',
    tag: payload.data?.tag || `fcm-notification-${Date.now()}`,
    data: {
      url: payload.data?.url || './index.html',
      deckId: payload.data?.deckId || null,
      reminderId: payload.data?.reminderId || null,
      timestamp: Date.now()
    },
    vibrate: [200, 100, 200],
    requireInteraction: false
  };
  
  // Afficher la notification
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Gérer les clics sur les notifications FCM
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const deckId = event.notification.data?.deckId;
  const url = event.notification.data?.url || './index.html';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        // Si une fenêtre est déjà ouverte, la mettre au premier plan
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];
          if (client.url.includes(self.registration.scope) && 'focus' in client) {
            // Envoyer un message pour ouvrir le deck si nécessaire
            if (deckId) {
              client.postMessage({
                type: 'OPEN_DECK',
                deckId: deckId
              });
            }
            return client.focus();
          }
        }
        // Sinon, ouvrir une nouvelle fenêtre
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
  );
});
