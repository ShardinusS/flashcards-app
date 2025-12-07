// ============================================
// SYSTÈME D'ICÔNES SVG
// ============================================

const Icons = {
    // Générer une icône SVG avec les paramètres donnés
    getIcon(name, size = 20, color = 'currentColor') {
        const icons = {
            menu: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
            delete: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`,
            refresh: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>`,
            download: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
            upload: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
            edit: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>`,
            chart: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
            settings: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
            books: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
            card: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
            success: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
            help: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
            plus: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
            arrowLeft: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
            arrowRight: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
            close: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
            list: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
            grid: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
            clock: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
            bell: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
            arrowDown: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
            smartphone: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`
        };
        return icons[name] || '';
    }
};

// ============================================
// FIREBASE CLOUD MESSAGING (FCM)
// ============================================

// Configuration Firebase
// ⚠️ La configuration est chargée depuis config.js (exclu du repo)
// Vérifiez que config.js existe et contient les bonnes valeurs
// Si config.js n'existe pas, copiez config.example.js en config.js et remplissez les valeurs

// Les variables firebaseConfig et FCM_VAPID_KEY sont définies dans config.js
// Vérification que la config est bien chargée
if (typeof firebaseConfig === 'undefined') {
  console.error('⚠️ ERREUR: config.js n\'est pas chargé ou firebaseConfig n\'est pas défini');
  console.error('📝 Solution: Copiez config.example.js en config.js et remplissez avec vos valeurs Firebase');
}
if (typeof FCM_VAPID_KEY === 'undefined') {
  console.error('⚠️ ERREUR: config.js n\'est pas chargé ou FCM_VAPID_KEY n\'est pas défini');
  console.error('📝 Solution: Copiez config.example.js en config.js et remplissez avec votre clé VAPID');
}

// Initialiser Firebase si disponible
let messaging = null;
if (typeof firebase !== 'undefined' && typeof firebaseConfig !== 'undefined') {
  try {
    firebase.initializeApp(firebaseConfig);
    messaging = firebase.messaging();
    console.log('Firebase initialisé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de Firebase:', error);
  }
} else if (typeof firebase !== 'undefined' && typeof firebaseConfig === 'undefined') {
  console.warn('⚠️ Firebase SDK est disponible mais firebaseConfig n\'est pas défini. Vérifiez que config.js est chargé.');
}

// ============================================
// GESTION DES DONNÉES
// ============================================

const Storage = {
    getDecks() {
        try {
            const data = localStorage.getItem('flashcards_decks');
            if (!data) return [];
            return JSON.parse(data);
        } catch (error) {
            console.error('Erreur lors de la lecture des decks:', error);
            return [];
        }
    },
    
    saveDecks(decks) {
        try {
            localStorage.setItem('flashcards_decks', JSON.stringify(decks));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des decks:', error);
            if (error.name === 'QuotaExceededError') {
                alert('L\'espace de stockage est plein. Veuillez supprimer certains decks.');
            } else {
                alert('Erreur lors de la sauvegarde. Veuillez réessayer.');
            }
        }
    },
    
    getDeck(id) {
        const decks = this.getDecks();
        return decks.find(d => d.id === id);
    },
    
    saveDeck(deck) {
        const decks = this.getDecks();
        const index = decks.findIndex(d => d.id === deck.id);
        if (index >= 0) {
            decks[index] = deck;
        } else {
            decks.push(deck);
        }
        this.saveDecks(decks);
    },
    
    deleteDeck(id) {
        const decks = this.getDecks();
        const filtered = decks.filter(d => d.id !== id);
        this.saveDecks(filtered);
    }
};

// ============================================
// ALGORITHME SM-2 SIMPLIFIÉ
// ============================================

const SM2 = {
    calculateNextReview(card, quality) {
        const now = Date.now();
        
        if (!card.easeFactor) {
            card.easeFactor = 2.5;
        }
        if (!card.interval) {
            card.interval = 1;
        }
        if (!card.repetitions) {
            card.repetitions = 0;
        }
        if (!card.againCount) {
            card.againCount = 0;
        }
        if (!card.cardScore) {
            card.cardScore = 0; // Score de la carte (plus bas = plus difficile = prioritaire)
        }
        
        if (quality === 0) {
            // Encore - diminuer le score (carte plus difficile)
            card.againCount = (card.againCount || 0) + 1;
            card.cardScore = Math.max(0, (card.cardScore || 0) - 10); // Diminuer le score
            card.interval = 1;
            card.repetitions = 0;
        } else {
            // Bien ou Facile - augmenter le score selon la qualité
            if (quality === 1) {
                // Bien - ajouter +5
                card.cardScore = (card.cardScore || 0) + 5;
                card.easeFactor = Math.max(1.3, card.easeFactor - 0.15);
            } else {
                // Facile - ajouter +20
                card.cardScore = (card.cardScore || 0) + 20;
                card.easeFactor = Math.max(1.3, card.easeFactor + 0.15);
            }
            
            card.repetitions += 1;
            
            if (card.repetitions === 1) {
                card.interval = 1;
            } else if (card.repetitions === 2) {
                card.interval = 6;
            } else {
                card.interval = Math.round(card.interval * card.easeFactor);
            }
        }
        
        const daysToAdd = card.interval;
        card.nextReview = now + (daysToAdd * 24 * 60 * 60 * 1000);
        card.lastReview = now;
        
        return card;
    },
    
    getCardsToReview(deck, limit = null) {
        // Retourner les cartes triées par priorité, limitées au nombre demandé
        // Priorité : cartes avec le score le plus bas en premier (plus difficiles)
        const now = Date.now();
        
        // Filtrer et trier les cartes par score (croissant = les plus difficiles en premier)
        const cardsWithScore = deck.cards
            .filter(card => {
                return true;
            })
            .map(card => {
                const cardScore = card.cardScore || 0;
                const againCount = card.againCount || 0;
                const isDue = !card.nextReview || card.nextReview <= now;
                const daysSinceLastReview = card.lastReview 
                    ? Math.floor((now - card.lastReview) / (24 * 60 * 60 * 1000))
                    : 999;
                
                // Score final pour le tri : le score de la carte (plus bas = plus prioritaire)
                // Ajuster légèrement selon si la carte est due
                const finalScore = cardScore - (isDue ? 5 : 0) + Math.min(daysSinceLastReview, 30);
                
                return {
                    card: card,
                    score: finalScore,
                    cardScore: cardScore,
                    isDue: isDue,
                    againCount: againCount
                };
            });
        
        // Trier par score croissant (les cartes avec le score le plus bas sont les plus difficiles)
        cardsWithScore.sort((a, b) => {
            if (a.score !== b.score) {
                return a.score - b.score; // Tri croissant
            }
            // En cas d'égalité, privilégier les cartes à réviser
            if (a.isDue !== b.isDue) {
                return a.isDue ? -1 : 1;
            }
            // Puis par nombre de clics "Encore" (décroissant)
            if (b.againCount !== a.againCount) {
                return b.againCount - a.againCount;
            }
            // Enfin, par date de prochaine révision (croissante)
            const aDate = a.card.nextReview || 0;
            const bDate = b.card.nextReview || 0;
            return aDate - bDate;
        });
        
        // Limiter le nombre de cartes si demandé
        const result = cardsWithScore.map(item => item.card);
        return limit ? result.slice(0, limit) : result;
    }
};

// ============================================
// SYSTÈME DE ZONES DE COULEURS
// ============================================

const ColorZones = {
    // Détermine la couleur d'une carte en fonction de son score
    getCardColor(cardScore) {
        // Zones basées sur le score :
        // Rouge (0-9) : Très difficile
        // Orange (10-19) : Difficile
        // Jaune (20-29) : Moyen
        // Vert (30+) : Facile
        
        if (cardScore < 10) {
            return '#F44336'; // Rouge
        } else if (cardScore < 20) {
            return '#FF9800'; // Orange
        } else if (cardScore < 30) {
            return '#FFC107'; // Jaune
        } else {
            return '#4CAF50'; // Vert
        }
    },
    
    // Retourne le nom de la zone
    getZoneName(cardScore) {
        if (cardScore < 10) {
            return 'Très difficile';
        } else if (cardScore < 20) {
            return 'Difficile';
        } else if (cardScore < 30) {
            return 'Moyen';
        } else {
            return 'Facile';
        }
    }
};

// ============================================
// GESTION DE L'INTERFACE
// ============================================

const App = {
    currentDeckId: null,
    currentIsBaseDeck: false, // Indique si le deck actuel est un deck de base
    baseDecks: [], // Stockage des decks de base
    currentView: 'decks',
    isGridView: true,
    reviewCards: [],
    currentReviewIndex: 0,
    isRevealed: false,
    cardsPerSession: 10, // Nombre de cartes par session de révision
    
    init() {
        // Charger la configuration du nombre de cartes par session
        const savedCardsPerSession = localStorage.getItem('flashcards_cardsPerSession');
        if (savedCardsPerSession) {
            this.cardsPerSession = parseInt(savedCardsPerSession) || 10;
        }
        
        // Initialiser les icônes SVG dans le HTML
        this.initIcons();
        
        this.setupEventListeners();
        
        // S'assurer que la vue initiale est visible
        const initialView = document.querySelector('.view.active');
        if (initialView) {
            initialView.style.opacity = '1';
            initialView.style.display = 'flex';
        }
        
        this.renderDecks();
        // S'assurer que le bouton d'ajout est visible au démarrage (section "Mes Decks" par défaut)
        const addDeckBtn = document.getElementById('add-deck-btn');
        if (addDeckBtn) {
            addDeckBtn.style.display = 'flex';
        }
        this.registerServiceWorker();
        
        // Restaurer les rappels de révision si configurés (uniquement sur mobile)
        if (this.isMobile()) {
            this.restoreReviewReminders();
        }
        
        // Vérifier et tester les notifications au démarrage
        this.testNotificationsOnStart();
        
        // S'abonner à FCM si les permissions sont accordées (NIVEAU 3)
        if (Notification.permission === 'granted') {
            this.subscribeToFCM().catch(err => {
                console.log('Abonnement FCM non disponible:', err);
            });
        }
        
        // Afficher le popup d'aide lors de la première visite
        this.checkFirstVisit();
        
        // Écouter les messages du service worker pour les notifications
        this.setupServiceWorkerMessageListener();
    },
    
    // Restaurer les rappels de révision au chargement
    restoreReviewReminders() {
        // Les rappels sont maintenant stockés dans IndexedDB du service worker
        // Ils seront automatiquement restaurés par le service worker
        // On synchronise les rappels depuis localStorage vers le service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(registration => {
                const savedReminders = JSON.parse(localStorage.getItem('flashcards_reminders') || '[]');
                const decks = Storage.getDecks();
                
                savedReminders.forEach(reminder => {
                    const deck = decks.find(d => d.id === reminder.deckId);
                    if (deck && registration.active) {
                        registration.active.postMessage({
                            type: 'ADD_REMINDER',
                            deckId: reminder.deckId,
                            deckName: deck.name,
                            intervalMinutes: reminder.intervalMinutes
                        });
                    }
                });
            });
        }
    },
    
    initIcons() {
        // Remplacer les placeholders d'icônes par les SVG réels
        document.querySelectorAll('.icon-menu').forEach(el => {
            el.innerHTML = Icons.getIcon('menu', 20, 'white');
        });
        document.querySelectorAll('.icon-arrow-left').forEach(el => {
            el.innerHTML = Icons.getIcon('arrowLeft', 20, 'white');
        });
        document.querySelectorAll('.icon-bell').forEach(el => {
            el.innerHTML = Icons.getIcon('bell', 24, 'white');
        });
        document.querySelectorAll('.icon-close').forEach(el => {
            const isWhite = el.closest('.icon-btn') || el.closest('.hamburger-menu-header');
            el.innerHTML = Icons.getIcon('close', 24, isWhite ? 'white' : 'currentColor');
        });
        document.querySelectorAll('.icon-help').forEach(el => {
            el.innerHTML = Icons.getIcon('help', 24, 'white');
        });
        document.querySelectorAll('.icon-plus').forEach(el => {
            el.innerHTML = Icons.getIcon('plus', 24, 'white');
        });
    },
    
    setupEventListeners() {
        // Gestion des sections (Mes Decks / Decks de Base)
        const sectionButtons = document.querySelectorAll('.deck-section-btn');
        sectionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const section = e.currentTarget.dataset.section;
                if (section) {
                    this.switchDeckSection(section);
                }
            });
        });
        
        // Navigation
        const addDeckBtn = document.getElementById('add-deck-btn');
        const helpBtn = document.getElementById('help-btn');
        const backBtn = document.getElementById('back-btn');
        const reviewBackBtn = document.getElementById('review-back-btn');
        
        if (addDeckBtn) {
            addDeckBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showAddDeckModal();
            });
        }
        
        if (helpBtn) {
            helpBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showHelpModal();
            });
        }
        
        if (backBtn) {
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showDecksView();
            });
        }
        
        if (reviewBackBtn) {
            reviewBackBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Retourner au détail du deck si on a un deckId, sinon aux decks
                if (this.currentDeckId) {
                    this.showDeckDetailView();
                } else {
                    this.showDecksView();
                }
            });
        }
        
        // Menu hamburger
        document.getElementById('hamburger-menu-btn').addEventListener('click', () => this.showHamburgerMenu('decks'));
        document.getElementById('hamburger-menu-btn-detail').addEventListener('click', () => this.showHamburgerMenu('deck-detail'));
        document.getElementById('hamburger-close-btn').addEventListener('click', () => this.hideHamburgerMenu());
        document.getElementById('hamburger-menu').addEventListener('click', (e) => {
            if (e.target.id === 'hamburger-menu' || e.target.classList.contains('hamburger-menu-overlay')) {
                this.hideHamburgerMenu();
            }
        });
        
        // Import
        document.getElementById('import-file-input').addEventListener('change', (e) => this.importDeck(e));
        
        // Card actions
        document.getElementById('add-card-btn').addEventListener('click', () => this.showAddCardModal());
        
        // Review - Attacher les event listeners une seule fois car les boutons sont statiques
        const reviewCard = document.getElementById('review-card');
        if (reviewCard) {
            reviewCard.addEventListener('click', () => this.revealAnswer());
        }
        
        const againBtn = document.getElementById('again-btn');
        const goodBtn = document.getElementById('good-btn');
        const easyBtn = document.getElementById('easy-btn');
        
        if (againBtn) {
            againBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.isRevealed) {
                    this.rateCard(0);
                }
            });
        }
        
        if (goodBtn) {
            goodBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.isRevealed) {
                    this.rateCard(1);
                }
            });
        }
        
        if (easyBtn) {
            easyBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.isRevealed) {
                    this.rateCard(2);
                }
            });
        }
        
        // Modal
        document.querySelector('.modal-close').addEventListener('click', () => this.hideModal());
        document.getElementById('modal-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'modal-overlay') {
                this.hideModal();
            }
        });
    },
    
    // ============================================
    // NAVIGATION
    // ============================================
    
    showView(viewName) {
        const currentActiveView = document.querySelector('.view.active');
        const newView = document.getElementById(`${viewName}-view`);
        
        if (!newView) {
            console.error('Vue non trouvée:', viewName);
            return;
        }
        
        // Si c'est la même vue, ne rien faire
        if (currentActiveView === newView) {
            return;
        }
        
        // Annuler toute animation en cours
        if (currentActiveView) {
            currentActiveView.classList.remove('active', 'fade-out', 'fade-in');
            currentActiveView.style.display = 'none';
        }
        
        // Afficher la nouvelle vue immédiatement, animation en arrière-plan
        newView.classList.remove('fade-out', 'fade-in');
        newView.style.display = 'flex';
        newView.style.opacity = '1';
        newView.classList.add('active');
        this.currentView = viewName;
        
        // Animation en arrière-plan, mais la vue est déjà active
        requestAnimationFrame(() => {
            newView.style.opacity = '0';
            newView.style.transform = 'translateY(10px)';
            setTimeout(() => {
                newView.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                newView.style.opacity = '1';
                newView.style.transform = 'translateY(0)';
            }, 10);
        });
    },
    
    showDecksView() {
        this.showView('decks');
        this.currentDeckId = null;
        this.currentIsBaseDeck = false; // Réinitialiser le flag
        this.renderDecks();
    },
    
    showDeckDetailView(deckId = null) {
        // Si un deckId est fourni, l'utiliser, sinon utiliser le currentDeckId
        if (deckId) {
            this.currentDeckId = deckId;
            // Vérifier si c'est un deck de base
            if (this.baseDecks && this.baseDecks.find(d => d.id === deckId)) {
                this.currentIsBaseDeck = true;
            } else {
                this.currentIsBaseDeck = false;
            }
        } else {
            // Si pas de deckId fourni, vérifier le currentDeckId
            if (this.currentDeckId) {
                if (this.baseDecks && this.baseDecks.find(d => d.id === this.currentDeckId)) {
                    this.currentIsBaseDeck = true;
                } else {
                    this.currentIsBaseDeck = false;
                }
            } else {
                // Si pas de currentDeckId, retourner à la vue des decks
                this.showDecksView();
                return;
            }
        }
        
        if (!this.currentDeckId) {
            this.showDecksView();
            return;
        }
        
        // S'assurer que les boutons sont correctement affichés
        const addCardBtn = document.getElementById('add-card-btn');
        if (addCardBtn) {
            if (this.currentIsBaseDeck) {
                addCardBtn.style.display = 'none';
            } else {
                addCardBtn.style.display = 'flex';
            }
        }
        
        this.showView('deck-detail');
        this.renderCards();
    },
    
    
    toggleView() {
        this.isGridView = !this.isGridView;
        const container = document.getElementById('decks-container');
        
        if (this.isGridView) {
            container.classList.remove('list-view');
        } else {
            container.classList.add('list-view');
        }
        this.hideHamburgerMenu();
    },
    
    showHamburgerMenu(viewType) {
        const menu = document.getElementById('hamburger-menu');
        const menuItems = document.getElementById('hamburger-menu-items');
        
        if (!menu || !menuItems) return;
        
        let items = [];
        
        if (viewType === 'decks') {
            items = [
                { icon: 'download', text: 'Importer un deck', action: () => {
                    document.getElementById('import-file-input').click();
                    this.hideHamburgerMenu();
                }},
                { icon: this.isGridView ? 'list' : 'grid', text: this.isGridView ? 'Vue liste' : 'Vue grille', action: () => {
                    this.toggleView();
                }},
                { icon: 'settings', text: 'Rappels de révision', action: () => {
                    this.configureReviewReminders();
                    this.hideHamburgerMenu();
                }},
            ];
        } else if (viewType === 'deck-detail') {
            items = [
                { icon: 'refresh', text: 'Réviser', action: () => {
                    this.startReview(this.currentDeckId);
                    this.hideHamburgerMenu();
                }},
                { icon: 'settings', text: 'Paramètres de révision', action: () => {
                    this.showReviewSettingsModal();
                    this.hideHamburgerMenu();
                }},
                { icon: 'chart', text: 'Statistiques', action: () => {
                    this.showStatsModal();
                    this.hideHamburgerMenu();
                }},
            ];
            
            // Ne pas afficher les options d'édition/export pour les decks de base
            if (!this.currentIsBaseDeck) {
                items.push(
                { icon: 'upload', text: 'Exporter', action: () => {
                    this.exportDeck();
                    this.hideHamburgerMenu();
                }},
                { icon: 'edit', text: 'Modifier le deck', action: () => {
                    this.showEditDeckModal();
                    this.hideHamburgerMenu();
                    }}
                );
            }
        }
        
        menuItems.innerHTML = items.map((item, index) => `
            <button class="hamburger-menu-item" data-menu-index="${index}">
                <span class="hamburger-menu-item-icon">${Icons.getIcon(item.icon, 20, 'currentColor')}</span>
                <span>${item.text}</span>
            </button>
        `).join('');
        
        // Stocker les actions pour pouvoir les appeler
        this.currentMenuActions = items.map(item => item.action);
        
        // Ajouter les event listeners pour les boutons du menu
        const menuButtons = menuItems.querySelectorAll('.hamburger-menu-item');
        menuButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.hamburgerMenuAction(index);
            });
        });
        
        menu.classList.remove('hidden');
    },
    
    hideHamburgerMenu() {
        const menu = document.getElementById('hamburger-menu');
        if (menu) {
            menu.classList.add('hidden');
        }
    },
    
    hamburgerMenuAction(index) {
        if (this.currentMenuActions && this.currentMenuActions[index]) {
            this.currentMenuActions[index]();
        }
    },
    
    // ============================================
    // HELPERS
    // ============================================
    
    // Récupérer un deck (base ou normal) par son ID
    getDeck(deckId, isBaseDeck = false) {
        if (isBaseDeck) {
            // S'assurer que baseDecks est initialisé
            if (!this.baseDecks || this.baseDecks.length === 0) {
                // Initialiser les decks de base directement sans appeler renderBaseDecks
                this.baseDecks = this.getBaseDecksData();
            }
            return this.baseDecks.find(d => d.id === deckId);
        } else {
            return Storage.getDeck(deckId);
        }
    },
    
    // Retourner les données des decks de base (sans modifier le DOM)
    getBaseDecksData() {
        return [
            {
                id: 'base-chapitre-1',
                name: 'Chapitre 1 - Suites Numériques',
                cards: [
                    { front: "Qu'est-ce qu'une suite numérique ?", back: "Une application définie de IN (ou une partie de IN) dans IR, notée (Un)." },
                    { front: "Comment note-t-on le terme général d'une suite ?", back: "Un, où n est l'indice du terme." },
                    { front: "Quelle est la différence entre une suite définie par une formule explicite et une suite définie par récurrence ?", back: "Explicite : Un = f(n). Récurrence : Un+1 = f(Un), avec premier terme donné." },
                    { front: "Comment définit-on la croissance d'une suite (Un) ?", back: "Pour tout n, Un+1 ≥ Un." },
                    { front: "Quelles sont les trois méthodes pour étudier le sens de variation d'une suite ?", back: "1) Signe de Un+1 - Un. 2) Si Un = f(n), étudier f. 3) Si Un > 0, comparer Un+1/Un à 1." },
                    { front: "Qu'est-ce qu'une suite convergente ?", back: "Une suite qui tend vers une limite finie L quand n → +∞." },
                    { front: "Définir une suite arithmétique.", back: "Suite où Un+1 = Un + r, r étant la raison." },
                    { front: "Donner la formule explicite d'une suite arithmétique de premier terme U0 et de raison r.", back: "Un = U0 + n × r." },
                    { front: "Comment varie une suite arithmétique selon le signe de sa raison r ?", back: "Si r > 0 : croissante. Si r < 0 : décroissante. Si r = 0 : constante." },
                    { front: "Formule de la somme S = U0 + U1 + ... + Un pour une suite arithmétique.", back: "S = (nombre de termes) × (premier terme + dernier terme) / 2 = (n+1) × (U0 + Un) / 2." },
                    { front: "Qu'est-ce qu'une suite géométrique ?", back: "Suite où Vn+1 = q × Vn, q étant la raison." },
                    { front: "Donner la formule explicite d'une suite géométrique de premier terme V0 et de raison q.", back: "Vn = V0 × qⁿ" },
                    { front: "Comment varie une suite géométrique (à termes positifs) selon la raison q ?", back: "Si q > 1 : croissante. Si 0 < q < 1 : décroissante. Si q = 1 : constante." },
                    { front: "Formule de la somme S = V0 + V1 + ... + Vn pour une suite géométrique (q ≠ 1).", back: "S = V0 × (1 - qⁿ⁺¹) / (1 - q)" },
                    { front: "Quelle est la formule de la somme 1 + q + q² + ... + qⁿ (q ≠ 1) ?", back: "(1 - qⁿ⁺¹) / (1 - q)" },
                    { front: "Que représente la moyenne arithmétique de deux termes consécutifs d'une suite arithmétique ?", back: "Le terme situé exactement entre eux (c'est le terme du milieu si on a trois termes consécutifs)." },
                    { front: "À quoi sert principalement la moyenne géométrique ?", back: "À calculer des taux moyens (multiplicatifs), par exemple des taux d'évolution annuels moyens." },
                    { front: "Donner la formule de la moyenne géométrique de n valeurs positives x1, x2, ..., xn.", back: "G = ⁿ√(x1 × x2 × ... × xn) = (x1 × x2 × ... × xn)^{1/n}" },
                    { front: "Si une suite est définie par Un = 2n - 10, que vaut U10 ?", back: "U10 = 2×10 - 10 = 10." },
                    { front: "Une suite arithmétique a pour premier terme U0 = 7 et raison r = -2. Que vaut U3 ?", back: "U3 = 7 + 3×(-2) = 1." },
                    { front: "Une suite géométrique a pour premier terme V0 = 12 et raison q = 1/2. Que vaut V3 ?", back: "V3 = 12 × (1/2)³ = 12 × 1/8 = 1.5" }
                ]
            },
            {
                id: 'base-chapitre-2',
                name: 'Chapitre 2 - Limites de fonctions',
                cards: [
                    { front: "Limite de f en +∞ égale à +∞", back: "f(x) aussi grand que voulu quand x assez grand" },
                    { front: "Limite de f en +∞ égale à -∞", back: "f(x) aussi petit que voulu quand x assez grand" },
                    { front: "Limite finie en +∞", back: "f(x) se rapproche de ℓ quand x assez grand" },
                    { front: "Asymptote horizontale", back: "Droite y = k si lim f(x) = k en ±∞" },
                    { front: "Asymptote verticale", back: "Droite x = a si lim f(x) = ±∞ en a" },
                    { front: "Limite en un point pour fonctions usuelles", back: "Si a dans le domaine, lim f(x) = f(a)" },
                    { front: "Limite de x^n en +∞", back: "+∞" },
                    { front: "Limite de x^n en -∞ si n pair", back: "+∞" },
                    { front: "Limite de x^n en -∞ si n impair", back: "-∞" },
                    { front: "Limite de √x en +∞", back: "+∞" },
                    { front: "Limite de 1/x en ±∞", back: "0" },
                    { front: "Limite de 1/x en 0⁺", back: "+∞" },
                    { front: "Limite de 1/x en 0⁻", back: "-∞" },
                    { front: "Limite somme : f→a et g→b", back: "f+g → a+b" },
                    { front: "Limite somme : f→+∞ et g→+∞", back: "f+g → +∞" },
                    { front: "Forme indéterminée somme", back: "f→-∞ et g→+∞" },
                    { front: "Limite produit : f→a et g→b", back: "f×g → a×b" },
                    { front: "Limite produit : f→+∞ et g→+∞", back: "f×g → +∞" },
                    { front: "Forme indéterminée produit", back: "f→0 et g→±∞" },
                    { front: "Produit par constante k", back: "Si f→+∞, kf→+∞ si k>0, -∞ si k<0" },
                    { front: "Limite de u^n", back: "Si u→a, u^n→a^n. Si u→+∞, u^n→+∞" },
                    { front: "Limite de 1/u si u→±∞", back: "1/u → 0" },
                    { front: "Limite de 1/u si u→0⁺", back: "+∞" },
                    { front: "Limite de 1/u si u→0⁻", back: "-∞" },
                    { front: "Limite quotient : f→a et g→b≠0", back: "f/g → a/b" },
                    { front: "Limite quotient : f→a et g→±∞", back: "f/g → 0" },
                    { front: "Exemple (x+1)/(x-3) en 3", back: "4/0⁻ = -∞, asymptote x=3" },
                    { front: "Continuité en a", back: "lim f(x) = f(a)" },
                    { front: "Exemple asymptote horizontale", back: "1/x : y=0 asymptote en ±∞" },
                    { front: "Exemple asymptote verticale", back: "1/x : x=0 asymptote" }
                ]
            },
            {
                id: 'base-chapitre-3',
                name: 'Chapitre 3 - Dérivation et Variations',
                cards: [
                    { front: "Taux de variation entre a et b", back: "f(b) - f(a) / (b - a)" },
                    { front: "Signification géométrique du taux de variation", back: "Coefficient directeur de la sécante (AB)" },
                    { front: "Définition du nombre dérivé f'(x₀)", back: "lim (h→0) [f(x₀+h) - f(x₀)]/h" },
                    { front: "Equation de la tangente en x₀", back: "y = f'(x₀)(x - x₀) + f(x₀)" },
                    { front: "Dérivée de f(x) = a (constante)", back: "f'(x) = 0" },
                    { front: "Dérivée de f(x) = ax + b", back: "f'(x) = a" },
                    { front: "Dérivée de f(x) = ax² + bx + c", back: "f'(x) = 2ax + b" },
                    { front: "Dérivée de f(x) = xⁿ (n entier > 0)", back: "f'(x) = nxⁿ⁻¹" },
                    { front: "Dérivée de f(x) = 1/x", back: "f'(x) = -1/x²" },
                    { front: "Dérivée de f(x) = 1/xⁿ", back: "f'(x) = -n/xⁿ⁺¹" },
                    { front: "Dérivée de f(x) = √x", back: "f'(x) = 1/(2√x)" },
                    { front: "Dérivée de f(x) = √(ax+b)", back: "f'(x) = a/(2√(ax+b))" },
                    { front: "Relation entre dérivée et sens de variation", back: "f' ≥ 0 ⇒ f croissante, f' ≤ 0 ⇒ f décroissante, f' = 0 ⇒ f constante" },
                    { front: "Dérivée d'une somme (u+v)'", back: "u' + v'" },
                    { front: "Dérivée d'un produit (uv)'", back: "u'v + uv'" },
                    { front: "Dérivée d'un quotient (u/v)'", back: "(u'v - uv')/v²" },
                    { front: "Dérivée de ku (k constante)", back: "ku'" },
                    { front: "Dérivée de 1/v", back: "-v'/v²" },
                    { front: "Propriété fonction paire/dérivée", back: "f paire ⇒ f' impaire, f impaire ⇒ f' paire" },
                    { front: "Extremum en x₀", back: "f'(x₀) = 0 et f' change de signe en x₀" },
                    { front: "Fonction inverse f(x) = 1/x", back: "Définie sur ℝ*, décroissante sur ℝ⁻* et ℝ⁺*" },
                    { front: "Symétrie de la fonction inverse", back: "f(x) = -f(-x) ⇒ symétrie par rapport à l'origine" },
                    { front: "Equation 1/x = k (k réel)", back: "Une solution si k ≠ 0 : x = 1/k, aucune solution si k = 0" },
                    { front: "Inéquation 1/x > 3", back: "Solution : x ∈ ]0, 1/3[" },
                    { front: "Inéquation 1/x < 2", back: "Solution : x ∈ ]-∞, 0[ ∪ ]1/2, +∞[" },
                    { front: "Dérivée de P(x) + 1/x (P polynôme)", back: "P'(x) - 1/x²" },
                    { front: "Exemple f(x) = x², f'(2) = ?", back: "f'(2) = 4" },
                    { front: "Tangente à f(x)=x² en x=2", back: "y = 4(x-2) + 4 = 4x - 4" },
                    { front: "f(x) = |x| dérivable en 0 ?", back: "Non, car taux de variation = ±1 selon côté" },
                    { front: "Attention théorème variation/dérivée", back: "Valable seulement sur un intervalle, pas sur ℝ* pour 1/x" }
                ]
            },
            {
                id: 'base-chapitre-4',
                name: 'Chapitre 4 - Loi binomiale',
                cards: [
                    { front: "Épreuve de Bernoulli", back: "Expérience aléatoire à 2 issues : succès ou échec" },
                    { front: "Loi de Bernoulli paramètres", back: "p = probabilité succès, 1-p = probabilité échec" },
                    { front: "Schéma de Bernoulli", back: "Répétition de n épreuves de Bernoulli identiques et indépendantes" },
                    { front: "Coefficient binomial (k parmi n)", back: "Nombre de chemins avec k succès parmi n épreuves, noté (n k)" },
                    { front: "(n 0)", back: "1" },
                    { front: "(n 1)", back: "n" },
                    { front: "(n n)", back: "1" },
                    { front: "Relation triangle de Pascal", back: "(n k) + (n k+1) = (n+1 k+1)" },
                    { front: "Loi binomiale notation", back: "B(n, p) où n = nombre d'épreuves, p = probabilité succès" },
                    { front: "Formule P(X=k) pour B(n,p)", back: "P(X=k) = (n k) × pᵏ × (1-p)ⁿ⁻ᵏ" },
                    { front: "Espérance E(X) pour B(n,p)", back: "E(X) = n × p" },
                    { front: "Variance V(X) pour B(n,p)", back: "V(X) = n × p × (1-p)" },
                    { front: "Écart-type σ(X) pour B(n,p)", back: "σ(X) = √[n × p × (1-p)]" },
                    { front: "Exemple marche ivrogne", back: "n=20, p=0.5, B(20, 0.5)" },
                    { front: "Calcul P(X=4) pour l'ivrogne", back: "P(X=4) = (20 4) × 0.5⁴ × 0.5¹⁶ ≈ 0.0046" },
                    { front: "Valeurs espérance/écart-type ivrogne", back: "E(X)=10, σ(X)≈2.236" },
                    { front: "Exemple lancer dé répété", back: "Expériences identiques et indépendantes" },
                    { front: "Exemple tirage avec remise", back: "Urne : 10 tirages avec remise = schéma de Bernoulli" }
                ]
            }
        ];
    },
    
    // Récupérer le deck actuel (base ou normal)
    getCurrentDeck() {
        if (!this.currentDeckId) return null;
        return this.getDeck(this.currentDeckId, this.currentIsBaseDeck);
    },
    
    // ============================================
    // RENDU DES DECKS
    // ============================================
    
    renderDecks() {
        const decks = Storage.getDecks();
        const container = document.getElementById('decks-container');
        
        if (decks.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <div class="empty-state-icon">${Icons.getIcon('books', 64, 'var(--text-secondary)')}</div>
                    <div class="empty-state-text">Aucun deck. Créez-en un pour commencer !</div>
                </div>
            `;
            return;
        }
        
        container.innerHTML = decks.map(deck => {
            const now = Date.now();
            // Vérifier que deck.cards existe et est un tableau
            if (!deck.cards || !Array.isArray(deck.cards)) {
                deck.cards = [];
            }
            const cardsDue = deck.cards.filter(card => !card.nextReview || card.nextReview <= now).length;
            const totalCards = deck.cards.length;
            
            return `
                <div class="deck-card" data-deck-id="${deck.id}">
                    <div class="deck-actions">
                        <button class="deck-action-btn" data-deck-id="${deck.id}" data-action="delete" title="Supprimer">${Icons.getIcon('delete', 16, 'currentColor')}</button>
                        <button class="deck-action-btn" data-deck-id="${deck.id}" data-action="review" title="Réviser">${Icons.getIcon('refresh', 16, 'currentColor')}</button>
                    </div>
                    <h3>${this.escapeHtml(deck.name)}</h3>
                    <div class="deck-info">
                        <span>${totalCards} carte${totalCards > 1 ? 's' : ''}</span>
                        ${cardsDue > 0 ? `<span class="cards-due-badge">${cardsDue} à réviser</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        // Ajouter les event listeners pour les decks avec détection d'appui long
        container.querySelectorAll('.deck-card').forEach(card => {
            const deckId = card.dataset.deckId;
            if (!deckId) return;
            
            // Détection d'appui long (long press)
            let longPressTimer = null;
            let hasLongPress = false;
            let touchStartTime = 0;
            
            const handleLongPressStart = (e) => {
                hasLongPress = false;
                touchStartTime = Date.now();
                longPressTimer = setTimeout(() => {
                    hasLongPress = true;
                    // Empêcher le clic normal
                    e.preventDefault();
                    e.stopPropagation();
                    // Ouvrir le modal d'actions
                    this.showDeckActionsModal(deckId, false);
                }, 500); // 500ms pour déclencher l'appui long
            };
            
            const handleLongPressEnd = (e) => {
                const touchDuration = Date.now() - touchStartTime;
                
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                
                // Si ce n'était pas un appui long (moins de 500ms), ouvrir le deck normalement
                if (!hasLongPress && touchDuration < 500) {
                    // Petit délai pour éviter les conflits
                    setTimeout(() => {
                        if (!hasLongPress) {
                            this.openDeck(deckId);
                        }
                    }, 100);
                }
                
                hasLongPress = false;
                touchStartTime = 0;
            };
            
            // Pour les événements tactiles (mobile)
            card.addEventListener('touchstart', handleLongPressStart, { passive: false });
            card.addEventListener('touchend', handleLongPressEnd);
            card.addEventListener('touchcancel', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                hasLongPress = false;
                touchStartTime = 0;
            });
            
            // Pour les événements de souris (PC)
            card.addEventListener('mousedown', handleLongPressStart);
            card.addEventListener('mouseup', handleLongPressEnd);
            card.addEventListener('mouseleave', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                hasLongPress = false;
                touchStartTime = 0;
            });
            
            // Empêcher le menu contextuel sur appui long
            card.addEventListener('contextmenu', (e) => {
                e.preventDefault();
            });
        });
    },
    
    switchDeckSection(section) {
        if (!section) {
            return;
        }
        
        // Mettre à jour les boutons actifs
        document.querySelectorAll('.deck-section-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        const activeBtn = document.querySelector(`[data-section="${section}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        } else {
            return;
        }
        
        // Afficher/masquer les conteneurs
        document.querySelectorAll('.decks-section-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Gérer l'affichage des FAB selon la section
        const addDeckBtn = document.getElementById('add-deck-btn');
        
        if (section === 'my-decks') {
            const myDecksContainer = document.getElementById('my-decks-container');
            if (myDecksContainer) {
                myDecksContainer.classList.add('active');
                this.renderDecks();
            }
            // Afficher le bouton d'ajout de deck dans "Mes Decks"
            if (addDeckBtn) {
                addDeckBtn.style.display = 'flex';
            }
        } else if (section === 'base-decks') {
            const baseDecksContainer = document.getElementById('base-decks-container');
            if (baseDecksContainer) {
                baseDecksContainer.classList.add('active');
                this.renderBaseDecks();
            }
            // Cacher le bouton d'ajout de deck dans "Decks de Base" (lecture seule)
            if (addDeckBtn) {
                addDeckBtn.style.display = 'none';
            }
        }
    },
    
    renderBaseDecks() {
        const container = document.getElementById('base-decks-grid');
        
        // Récupérer les decks de base (toujours disponibles)
        const baseDecks = this.getBaseDecksData();
        
        // Stocker les decks de base dans une variable accessible
        this.baseDecks = baseDecks;
        
        if (baseDecks.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <div class="empty-state-icon">${Icons.getIcon('books', 64, 'var(--text-secondary)')}</div>
                    <div class="empty-state-text">Aucun deck de base disponible pour le moment.</div>
                </div>
            `;
            return;
        }
        
        // Afficher les decks de base AVEC boutons d'action (review uniquement, pas de suppression)
        container.innerHTML = baseDecks.map(deck => {
            const totalCards = deck.cards.length;
            const now = Date.now();
            // Calculer les cartes à réviser pour les decks de base
            const baseDeckScoresKey = `baseDeckScores_${deck.id}`;
            const saved = localStorage.getItem(baseDeckScoresKey);
            let cardsDue = 0;
            if (saved) {
                try {
                    const scores = JSON.parse(saved);
                    cardsDue = Object.values(scores).filter(score => {
                        return !score.nextReview || score.nextReview <= now;
                    }).length;
                } catch (e) {
                    console.error('Erreur lors du chargement des scores:', e);
                }
            } else {
                // Si pas de scores sauvegardés, toutes les cartes sont à réviser
                cardsDue = totalCards;
            }
            
            return `
                <div class="deck-card" data-deck-id="${deck.id}" data-is-base="true">
                    <div class="deck-actions">
                        <button class="deck-action-btn" data-deck-id="${deck.id}" data-action="review" title="Réviser">${Icons.getIcon('refresh', 16, 'currentColor')}</button>
                    </div>
                    <h3>${this.escapeHtml(deck.name)}</h3>
                    <div class="deck-info">
                        <span>${totalCards} carte${totalCards > 1 ? 's' : ''}</span>
                        ${cardsDue > 0 ? `<span class="cards-due-badge">${cardsDue} à réviser</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        // Ajouter les event listeners pour les decks de base avec détection d'appui long
        container.querySelectorAll('.deck-card').forEach(card => {
            const deckId = card.dataset.deckId;
            if (!deckId) {
                return;
            }
            
            // Détection d'appui long (long press)
            let longPressTimer = null;
            let hasLongPress = false;
            let touchStartTime = 0;
            
            const handleLongPressStart = (e) => {
                hasLongPress = false;
                touchStartTime = Date.now();
                longPressTimer = setTimeout(() => {
                    hasLongPress = true;
                    // Empêcher le clic normal
                    e.preventDefault();
                    e.stopPropagation();
                    // Ouvrir le modal d'actions (decks de base = pas de suppression)
                    this.showDeckActionsModal(deckId, true);
                }, 500); // 500ms pour déclencher l'appui long
            };
            
            const handleLongPressEnd = (e) => {
                const touchDuration = Date.now() - touchStartTime;
                
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                
                // Si ce n'était pas un appui long (moins de 500ms), ouvrir le deck normalement
                if (!hasLongPress && touchDuration < 500) {
                    // Petit délai pour éviter les conflits
                    setTimeout(() => {
                        if (!hasLongPress) {
                            this.openDeck(deckId, true); // true = isBaseDeck
                        }
                    }, 100);
                }
                
                hasLongPress = false;
                touchStartTime = 0;
            };
            
            // Pour les événements tactiles (mobile)
            card.addEventListener('touchstart', handleLongPressStart, { passive: false });
            card.addEventListener('touchend', handleLongPressEnd);
            card.addEventListener('touchcancel', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                hasLongPress = false;
                touchStartTime = 0;
            });
            
            // Pour les événements de souris (PC)
            card.addEventListener('mousedown', handleLongPressStart);
            card.addEventListener('mouseup', handleLongPressEnd);
            card.addEventListener('mouseleave', (e) => {
                if (longPressTimer) {
                    clearTimeout(longPressTimer);
                    longPressTimer = null;
                }
                hasLongPress = false;
                touchStartTime = 0;
            });
            
            // Empêcher le menu contextuel sur appui long
            card.addEventListener('contextmenu', (e) => {
                e.preventDefault();
            });
        });
    },
    
    openDeck(deckId, isBaseDeck = false) {
        if (!deckId) {
            console.error('openDeck appelé sans deckId');
            return;
        }
        
        this.currentDeckId = deckId;
        
        // Déterminer si c'est un deck de base
        if (isBaseDeck === false) {
            // Vérifier si c'est un deck de base
            if (this.baseDecks && this.baseDecks.length > 0 && this.baseDecks.find(d => d.id === deckId)) {
                this.currentIsBaseDeck = true;
                isBaseDeck = true;
            } else {
                this.currentIsBaseDeck = false;
                isBaseDeck = false;
            }
        } else {
            this.currentIsBaseDeck = isBaseDeck;
        }
        
        // Récupérer le deck (soit depuis Storage, soit depuis les decks de base)
        const deck = this.getDeck(deckId, isBaseDeck);
        
        if (!deck) {
            alert('Deck non trouvé.');
            this.showDecksView();
            return;
        }
        
        const deckTitleEl = document.getElementById('deck-title');
        if (deckTitleEl) {
            deckTitleEl.textContent = deck.name;
        }
        
        // Cacher les boutons d'édition/ajout pour les decks de base
        const addCardBtn = document.getElementById('add-card-btn');
        if (addCardBtn) {
            if (this.currentIsBaseDeck) {
                addCardBtn.style.display = 'none';
            } else {
                addCardBtn.style.display = 'flex';
            }
        }
        
        this.showDeckDetailView(deckId);
    },
    
    startReview(deckId) {
        if (!deckId) {
            deckId = this.currentDeckId;
        }
        
        if (!deckId) {
            alert('Aucun deck sélectionné.');
            return;
        }
        
        this.currentDeckId = deckId;
        // Déterminer si c'est un deck de base
        if (this.baseDecks && this.baseDecks.find(d => d.id === deckId)) {
            this.currentIsBaseDeck = true;
        } else {
            this.currentIsBaseDeck = false;
        }
        this.showReviewView();
    },
    
    // ============================================
    // RENDU DES CARTES
    // ============================================
    
    renderCards() {
        if (!this.currentDeckId) return;
        
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        const container = document.getElementById('cards-container');
        
        if (deck.cards.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <div class="empty-state-icon">${Icons.getIcon('cards', 64, 'var(--text-secondary)')}</div>
                    <div class="empty-state-text">Aucune carte dans ce deck.</div>
                </div>
            `;
            return;
        }
        
        const now = Date.now();
        
        // Charger les scores sauvegardés pour les decks de base
        let savedScores = null;
        if (this.currentIsBaseDeck) {
            const baseDeckScoresKey = `baseDeckScores_${this.currentDeckId}`;
            const saved = localStorage.getItem(baseDeckScoresKey);
            if (saved) {
                try {
                    savedScores = JSON.parse(saved);
                } catch (e) {
                    console.error('Erreur lors du chargement des scores:', e);
                }
            }
        }
        
        container.innerHTML = deck.cards.map((card, index) => {
            // Charger les scores sauvegardés pour les decks de base, sinon initialiser
            if (this.currentIsBaseDeck && savedScores && savedScores[index]) {
                const saved = savedScores[index];
                card.cardScore = saved.cardScore || 0;
                card.nextReview = saved.nextReview || null;
                card.easeFactor = saved.easeFactor || 2.5;
                card.interval = saved.interval || 0;
                card.repetitions = saved.repetitions || 0;
                card.lastReview = saved.lastReview || null;
            } else {
                // Initialiser les propriétés de la carte si elles n'existent pas
                if (card.cardScore === undefined || card.cardScore === null) card.cardScore = 0;
                if (!card.nextReview) card.nextReview = null;
                if (!card.easeFactor) card.easeFactor = 2.5;
                if (!card.interval) card.interval = 0;
                if (!card.repetitions) card.repetitions = 0;
                if (!card.lastReview) card.lastReview = null;
                if (!card.againCount) card.againCount = 0;
            }
            
            const cardScore = card.cardScore || 0;
            
            // Couleur selon le score (système de zones)
            const cardColor = ColorZones.getCardColor(cardScore);
            const zoneName = ColorZones.getZoneName(cardScore);
            
            // Conditionally render action buttons for cards
            const cardActionButtons = this.currentIsBaseDeck ? '' : `
                <button class="card-action-btn" data-card-index="${index}" data-action="edit">Modifier</button>
                <button class="card-action-btn" data-card-index="${index}" data-action="delete" style="color: var(--error);">Supprimer</button>
            `;

            // Construire le contenu de la question
            let frontHtml = '';
            const hasFrontImage = card.frontImage && (typeof card.frontImage === 'string') && card.frontImage.trim() !== '';
            const hasFrontText = card.front && (typeof card.front === 'string') && card.front.trim() !== '';
            
            if (hasFrontImage) {
                frontHtml += `<div class="card-list-image-container"><img src="${this.escapeHtml(card.frontImage)}" alt="Recto" class="card-list-image"></div>`;
            }
            if (hasFrontText) {
                const textClass = hasFrontImage ? 'card-list-text card-list-text-with-image' : 'card-list-text';
                frontHtml += `<div class="${textClass}">${this.escapeHtml(card.front)}</div>`;
            }
            if (!hasFrontImage && !hasFrontText) {
                frontHtml += `<div class="card-list-text" style="color: var(--text-secondary); font-style: italic;">Aucun contenu</div>`;
            }
            
            // Construire le contenu de la réponse
            let backHtml = '';
            const hasBackImage = card.backImage && (typeof card.backImage === 'string') && card.backImage.trim() !== '';
            const hasBackText = card.back && (typeof card.back === 'string') && card.back.trim() !== '';
            
            if (hasBackImage) {
                backHtml += `<div class="card-list-image-container"><img src="${this.escapeHtml(card.backImage)}" alt="Verso" class="card-list-image"></div>`;
            }
            if (hasBackText) {
                const textClass = hasBackImage ? 'card-list-text card-list-text-with-image' : 'card-list-text';
                backHtml += `<div class="${textClass}">${this.escapeHtml(card.back)}</div>`;
            }
            if (!hasBackImage && !hasBackText) {
                backHtml += `<div class="card-list-text" style="color: var(--text-secondary); font-style: italic;">Aucun contenu</div>`;
            }

            return `
                <div class="card-item">
                    <div class="card-color-band-top" style="background-color: ${cardColor};"></div>
                    <div class="card-item-header">
                        <div class="card-item-info">
                            <span class="card-zone-badge" style="background-color: ${cardColor}; color: white; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;">
                                ${zoneName}
                            </span>
                        </div>
                    </div>
                    <div class="card-item-review-style">
                        <div class="card-item-side">
                            <div class="card-item-side-label">Recto</div>
                            <div class="card-item-side-content">
                                ${frontHtml}
                            </div>
                        </div>
                        <div class="card-item-side">
                            <div class="card-item-side-label">Verso</div>
                            <div class="card-item-side-content">
                                ${backHtml}
                            </div>
                        </div>
                    </div>
                    <div class="card-item-actions">
                        ${cardActionButtons}
                    </div>
                </div>
            `;
        }).join('');

        // Add event listeners for card action buttons only if not a base deck
        if (!this.currentIsBaseDeck) {
            const cardsContainer = document.getElementById('cards-container');
            if (cardsContainer) {
                cardsContainer.querySelectorAll('.card-action-btn').forEach(btn => {
                    const cardIndex = parseInt(btn.getAttribute('data-card-index'));
                    const action = btn.getAttribute('data-action');
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (action === 'edit') {
                            this.editCard(cardIndex);
                        } else if (action === 'delete') {
                            this.deleteCard(cardIndex);
                        }
                    });
                });
            }
        }
    },
    
    showReviewView() {
        if (!this.currentDeckId) return;
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        // Limiter le nombre de cartes selon la configuration
        this.reviewCards = SM2.getCardsToReview(deck, this.cardsPerSession);
        
        if (this.reviewCards.length === 0) {
            alert('Aucune carte à réviser pour le moment !');
            return;
        }
        
        this.currentReviewIndex = 0;
        this.isRevealed = false;
        this.showView('review');
        
        // Afficher immédiatement la carte sans attendre l'animation
        if (this.reviewCards && this.reviewCards.length > 0) {
            this.showReviewCard();
        }
    },
    
    showReviewCard() {
        if (this.currentReviewIndex >= this.reviewCards.length) {
            this.completeReview();
            return;
        }
        
        const card = this.reviewCards[this.currentReviewIndex];
        
        // Construire le HTML pour le recto
        let frontHtml = '';
        const hasFrontImage = card.frontImage && (typeof card.frontImage === 'string') && card.frontImage.trim() !== '';
        const hasFrontText = card.front && (typeof card.front === 'string') && card.front.trim() !== '';
        
        if (hasFrontImage) {
            frontHtml += `<div class="review-image-container"><img src="${this.escapeHtml(card.frontImage)}" alt="Recto" class="review-image"></div>`;
        }
        if (hasFrontText) {
            const textClass = hasFrontImage ? 'review-text review-text-with-image' : 'review-text';
            frontHtml += `<p class="${textClass}">${this.escapeHtml(card.front)}</p>`;
        }
        if (!hasFrontImage && !hasFrontText) {
            frontHtml += `<p class="review-text" style="color: var(--text-secondary); font-style: italic;">Aucun contenu</p>`;
        }
        
        // Construire le HTML pour le verso
        let backHtml = '';
        const hasBackImage = card.backImage && (typeof card.backImage === 'string') && card.backImage.trim() !== '';
        const hasBackText = card.back && (typeof card.back === 'string') && card.back.trim() !== '';
        
        if (hasBackImage) {
            backHtml += `<div class="review-image-container"><img src="${this.escapeHtml(card.backImage)}" alt="Verso" class="review-image"></div>`;
        }
        if (hasBackText) {
            const textClass = hasBackImage ? 'review-text review-text-with-image' : 'review-text';
            backHtml += `<p class="${textClass}">${this.escapeHtml(card.back)}</p>`;
        }
        if (!hasBackImage && !hasBackText) {
            backHtml += `<p class="review-text" style="color: var(--text-secondary); font-style: italic;">Aucun contenu</p>`;
        }
        
        // Ajuster la taille du texte en fonction de la taille des images après le rendu
        requestAnimationFrame(() => {
            this.adjustTextSizeForImages();
        });
        
        // Restaurer la structure HTML si nécessaire
        const reviewCard = document.getElementById('review-card');
        const frontElement = document.getElementById('card-front');
        const backElement = document.getElementById('card-back');
        
        // Si les éléments n'existent pas, les recréer
        if (!frontElement || !backElement) {
            if (reviewCard) {
                reviewCard.innerHTML = `
                    <div id="card-front" class="card-side">
                    </div>
                    <div id="card-back" class="card-side hidden">
                    </div>
                    <div id="reveal-hint" class="reveal-hint">Tapez pour révéler</div>
                `;
                // Réattacher l'event listener après recréation
                reviewCard.addEventListener('click', () => this.revealAnswer());
            }
        }
        
        // Mettre à jour le contenu
        const updatedFrontElement = document.getElementById('card-front');
        const updatedBackElement = document.getElementById('card-back');
        
        if (updatedFrontElement) {
            updatedFrontElement.innerHTML = frontHtml;
            // Afficher le recto et réinitialiser les styles
            updatedFrontElement.classList.remove('hidden');
            updatedFrontElement.style.display = 'flex';
            updatedFrontElement.style.opacity = '';
            updatedFrontElement.style.transform = '';
            updatedFrontElement.style.transition = '';
            // Ajouter la classe has-image si une image est présente
            if (hasFrontImage) {
                updatedFrontElement.classList.add('has-image');
            } else {
                updatedFrontElement.classList.remove('has-image');
            }
        }
        
        if (updatedBackElement) {
            updatedBackElement.innerHTML = backHtml;
            // Cacher le verso
            updatedBackElement.classList.add('hidden');
            updatedBackElement.style.display = 'none';
            // Réinitialiser les styles
            updatedBackElement.style.opacity = '';
            updatedBackElement.style.transform = '';
            updatedBackElement.style.transition = '';
            // Ajouter la classe has-image si une image est présente
            if (hasBackImage) {
                updatedBackElement.classList.add('has-image');
            } else {
                updatedBackElement.classList.remove('has-image');
            }
        }
        
        // Ajuster la taille du texte en fonction de la taille des images après le rendu
        requestAnimationFrame(() => {
            this.adjustTextSizeForImages();
        });
        
        const reviewProgress = document.getElementById('review-progress');
        if (reviewProgress) {
            reviewProgress.textContent = `${this.currentReviewIndex + 1} / ${this.reviewCards.length}`;
        }
        
        // Réinitialiser l'état
        this.isRevealed = false;
        
        // Cacher les boutons de révision
        const reviewButtons = document.getElementById('review-buttons');
        if (reviewButtons) {
            reviewButtons.classList.add('hidden');
            reviewButtons.style.pointerEvents = 'none';
            reviewButtons.style.opacity = '';
            reviewButtons.style.transform = '';
            reviewButtons.style.transition = '';
        }
        
        // Réafficher le hint
        const revealHint = document.getElementById('reveal-hint');
        if (revealHint) {
            revealHint.style.display = '';
            revealHint.style.opacity = '0.7';
            revealHint.style.transition = 'opacity 0.3s ease';
        }
    },
    
    adjustTextSizeForImages() {
        // Ajuster la taille du texte pour les cartes avec images
        const frontElement = document.getElementById('card-front');
        const backElement = document.getElementById('card-back');
        
        [frontElement, backElement].forEach(cardSide => {
            if (!cardSide || cardSide.classList.contains('hidden')) return;
            
            const imageContainer = cardSide.querySelector('.review-image-container');
            const image = imageContainer ? imageContainer.querySelector('.review-image') : null;
            const textElement = cardSide.querySelector('.review-text-with-image');
            
            if (image && textElement) {
                // Attendre que l'image soit chargée
                if (image.complete) {
                    this.adjustTextSizeForImage(image, textElement);
                } else {
                    image.addEventListener('load', () => {
                        this.adjustTextSizeForImage(image, textElement);
                    });
                }
            }
        });
    },
    
    adjustTextSizeForImage(image, textElement) {
        // Obtenir la largeur réelle de l'image affichée
        const imageWidth = image.offsetWidth || image.naturalWidth;
        
        if (!imageWidth || imageWidth === 0) return;
        
        // Calculer la taille de police proportionnelle (environ 6-10% de la largeur de l'image)
        // Avec des limites min/max pour la lisibilité (16px min, 32px max)
        // Pour une image de 300px de large, cela donne environ 18-30px
        const baseSize = Math.max(16, Math.min(32, imageWidth * 0.08));
        
        // Appliquer la taille calculée
        textElement.style.fontSize = `${baseSize}px`;
        
        // S'assurer que le texte est centré et aligné avec l'image
        textElement.style.textAlign = 'center';
        textElement.style.width = '100%';
        textElement.style.maxWidth = `${Math.min(imageWidth, window.innerWidth - 60)}px`;
        textElement.style.marginLeft = 'auto';
        textElement.style.marginRight = 'auto';
        textElement.style.display = 'block';
    },
    
    revealAnswer() {
        if (!this.isRevealed) {
            this.revealCard();
        }
    },
    
    revealCard() {
        if (this.isRevealed) return; // Éviter les doubles révélation
        
        this.isRevealed = true;
        const frontElement = document.getElementById('card-front');
        const backElement = document.getElementById('card-back');
        const revealHint = document.getElementById('reveal-hint');
        
        // Cacher le recto et afficher le verso
        if (frontElement) {
            frontElement.classList.add('hidden');
            frontElement.style.display = 'none';
        }
        
        if (backElement) {
            backElement.style.display = 'flex';
            backElement.classList.remove('hidden');
            // Animation en arrière-plan, mais l'action est déjà faite
            requestAnimationFrame(() => {
                backElement.style.opacity = '0';
                backElement.style.transform = 'scale(0.9)';
                setTimeout(() => {
                    backElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    backElement.style.opacity = '1';
                    backElement.style.transform = 'scale(1)';
                    // Ajuster la taille du texte après l'affichage du verso
                    this.adjustTextSizeForImages();
                }, 10);
            });
        }
        
        // Cacher le hint avec animation en arrière-plan
        if (revealHint) {
            revealHint.style.transition = 'opacity 0.3s ease';
            revealHint.style.opacity = '0';
            setTimeout(() => {
                revealHint.style.display = 'none';
            }, 300);
        }
        
        const reviewButtons = document.getElementById('review-buttons');
        if (reviewButtons) {
            // Rendre les boutons cliquables immédiatement
            reviewButtons.classList.remove('hidden');
            reviewButtons.style.pointerEvents = 'auto';
            reviewButtons.style.opacity = '1';
            reviewButtons.style.transform = 'translateY(0)';
            
            // Animation visuelle en arrière-plan (ne bloque pas les clics)
            // On garde pointer-events: auto même pendant l'animation
            requestAnimationFrame(() => {
                // Animation d'entrée depuis le bas
                reviewButtons.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                reviewButtons.style.opacity = '1';
                reviewButtons.style.transform = 'translateY(0)';
            });
        }
    },
    
    rateCard(quality) {
        if (!this.isRevealed) {
            // Si la réponse n'est pas révélée, la révéler d'abord immédiatement
            this.revealCard();
            // Ne pas retourner, continuer avec le traitement
        }
        
        // Traitement immédiat, ne pas attendre les animations
        if (this.currentReviewIndex >= this.reviewCards.length) {
            this.completeReview();
            return;
        }
        
        const card = this.reviewCards[this.currentReviewIndex];
        if (!card) {
            this.completeReview();
            return;
        }
        
        // Calculer le nouveau score et les métadonnées
        SM2.calculateNextReview(card, quality);
        
        // Mettre à jour la carte dans le deck original
        const deck = this.getCurrentDeck();
        if (deck) {
            // Trouver la carte correspondante dans le deck original
            const deckCardIndex = deck.cards.findIndex(c => 
                c.front === card.front && 
                c.back === card.back &&
                (c.frontImage === card.frontImage || (!c.frontImage && !card.frontImage)) &&
                (c.backImage === card.backImage || (!c.backImage && !card.backImage))
            );
            
            if (deckCardIndex >= 0) {
                // Mettre à jour toutes les propriétés de la carte dans le deck original
                const deckCard = deck.cards[deckCardIndex];
                deckCard.cardScore = card.cardScore;
                deckCard.nextReview = card.nextReview;
                deckCard.lastReview = card.lastReview;
                deckCard.easeFactor = card.easeFactor;
                deckCard.interval = card.interval;
                deckCard.repetitions = card.repetitions;
                deckCard.againCount = card.againCount;
            }
            
            // Sauvegarder les scores pour les decks de base dans localStorage séparément
            if (this.currentIsBaseDeck) {
                const baseDeckScoresKey = `baseDeckScores_${this.currentDeckId}`;
                const scores = {};
                deck.cards.forEach((c, idx) => {
                    scores[idx] = {
                        cardScore: c.cardScore || 0,
                        nextReview: c.nextReview || null,
                        easeFactor: c.easeFactor || 2.5,
                        interval: c.interval || 0,
                        repetitions: c.repetitions || 0,
                        lastReview: c.lastReview || null,
                        againCount: c.againCount || 0
                    };
                });
                localStorage.setItem(baseDeckScoresKey, JSON.stringify(scores));
            } else {
                // Sauvegarder le deck normal
                Storage.saveDeck(deck);
            }
        }
        
        this.currentReviewIndex++;
        // Afficher la carte suivante immédiatement, les animations se feront en arrière-plan
        this.showReviewCard();
    },
    
    completeReview() {
        // Calculer les statistiques de la session
        const totalCards = this.reviewCards.length;
        
        // Créer un écran de fin de révision similaire à l'affichage des decks de base
        const reviewCard = document.getElementById('review-card');
        const reviewButtons = document.getElementById('review-buttons');
        const reviewProgress = document.getElementById('review-progress');
        
        if (reviewCard) {
            reviewCard.innerHTML = `
                <div class="card-side" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; padding: 40px;">
                    <div style="font-size: 64px; margin-bottom: 20px;">🎉</div>
                    <h2 style="font-size: 28px; color: var(--primary-color); margin-bottom: 15px; text-align: center;">Révision terminée !</h2>
                    <p style="font-size: 18px; color: var(--text-primary); margin-bottom: 30px; text-align: center;">
                        Vous avez révisé <strong>${totalCards}</strong> carte${totalCards > 1 ? 's' : ''}.
                    </p>
                    <div style="display: flex; flex-direction: row; gap: 15px; width: 100%; max-width: 400px; justify-content: center; align-items: center;">
                        <button id="review-complete-back-btn" class="review-btn good" style="flex: 1; min-width: 150px; margin: 0;">
                            Retour au deck
                        </button>
                        <button id="review-complete-again-btn" class="review-btn easy" style="flex: 1; min-width: 150px; margin: 0;">
                            Réviser à nouveau
                        </button>
                    </div>
                </div>
            `;
            
            // Ajouter les event listeners pour les boutons
            const backBtn = document.getElementById('review-complete-back-btn');
            const againBtn = document.getElementById('review-complete-again-btn');
            
            if (backBtn) {
                backBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Retourner au détail du deck si on a un deckId, sinon aux decks
                    if (this.currentDeckId) {
                        this.showDeckDetailView();
                        // Re-rendre les cartes pour afficher les nouvelles couleurs
                        this.renderCards();
                    } else {
                        this.showDecksView();
                    }
                });
            }
            
            if (againBtn) {
                againBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Réinitialiser l'état de révision
                    this.isRevealed = false;
                    this.currentReviewIndex = 0;
                    // Relancer la révision (cela va réinitialiser reviewCards et currentReviewIndex)
                    if (this.currentDeckId) {
                        this.startReview(this.currentDeckId);
                    } else {
                        this.showDecksView();
                    }
                });
            }
        }
        
        if (reviewButtons) {
            reviewButtons.classList.add('hidden');
        }
        
        if (reviewProgress) {
            reviewProgress.textContent = 'Terminé';
        }
    },
    
    // ============================================
    // MODALES
    // ============================================
    
    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
        }
    },
    
    showModalWithContent(title, content) {
        const modalOverlay = document.getElementById('modal-overlay');
        const modal = modalOverlay.querySelector('.modal');
        
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-content').innerHTML = content;
        
        // Afficher immédiatement, animation en arrière-plan
        modalOverlay.classList.remove('hidden');
        modalOverlay.style.opacity = '1';
        if (modal) {
            modal.style.transform = '';
            modal.style.opacity = '1';
        }
        
        // Animation en arrière-plan
        requestAnimationFrame(() => {
            modalOverlay.style.opacity = '0';
            if (modal) {
                modal.style.transform = 'translateY(30px) scale(0.95)';
                modal.style.opacity = '0';
            }
            setTimeout(() => {
                modalOverlay.style.opacity = '1';
                if (modal) {
                    modal.style.transform = 'translateY(0) scale(1)';
                    modal.style.opacity = '1';
                }
            }, 10);
        });
    },
    
    showDeckActionsModal(deckId, isBaseDeck = false) {
        const deck = this.getDeck(deckId, isBaseDeck);
        if (!deck) {
            return;
        }
        
        let content = `
            <div style="text-align: center; padding: 10px 0;">
                <p style="margin-bottom: 20px; font-size: 16px; color: var(--text-primary);">
                    Que souhaitez-vous faire avec <strong>${this.escapeHtml(deck.name)}</strong> ?
                </p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
        `;
        
        // Bouton Réviser (toujours disponible)
        content += `
                    <button id="deck-action-review" class="btn btn-primary btn-with-icon">
                        <span class="icon-svg">${Icons.getIcon('refresh', 20, 'white')}</span>
                        <span>Réviser</span>
                    </button>
        `;
        
        // Bouton Supprimer (seulement pour les decks non-base)
        if (!isBaseDeck) {
            content += `
                    <button id="deck-action-delete" class="btn btn-danger btn-with-icon">
                        <span class="icon-svg">${Icons.getIcon('delete', 20, 'white')}</span>
                        <span>Supprimer</span>
                    </button>
            `;
        }
        
        content += `
                </div>
            </div>
        `;
        
        this.showModalWithContent('Actions du deck', content);
        
        // Event listeners pour les boutons du modal
        const reviewBtn = document.getElementById('deck-action-review');
        const deleteBtn = document.getElementById('deck-action-delete');
        
        if (reviewBtn) {
            reviewBtn.addEventListener('click', () => {
                this.hideModal();
                this.startReview(deckId);
            });
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                this.hideModal();
                this.deleteDeck(deckId);
            });
        }
    },
    
    hideModal() {
        const modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay) {
            // Fermer immédiatement, animation en arrière-plan
            modalOverlay.classList.add('hidden');
            const modal = modalOverlay.querySelector('.modal');
            if (modal) {
                modal.style.transform = '';
                modal.style.opacity = '';
            }
            // Animation de fermeture en arrière-plan (ne bloque pas)
            setTimeout(() => {
                if (modalOverlay.classList.contains('hidden')) {
                    modalOverlay.style.opacity = '0';
                    if (modal) {
                        modal.style.transform = 'translateY(30px) scale(0.95)';
                        modal.style.opacity = '0';
                    }
                }
            }, 0);
        }
    },
    
    showAddDeckModal() {
        const content = `
            <form id="add-deck-form">
                <div class="form-group">
                    <label for="new-deck-name">Nom du deck</label>
                    <input type="text" id="new-deck-name" required placeholder="Ex: Vocabulaire anglais">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Créer</button>
                </div>
            </form>
        `;
        
        this.showModalWithContent('Nouveau deck', content);
        
        // Attacher les event listeners immédiatement
        requestAnimationFrame(() => {
            const form = document.getElementById('add-deck-form');
            if (form) {
                // Retirer les anciens event listeners en clonant
                const newForm = form.cloneNode(true);
                form.parentNode.replaceChild(newForm, form);
                
                // Réattacher l'event listener
                const freshForm = document.getElementById('add-deck-form');
                if (freshForm) {
                    freshForm.addEventListener('submit', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        this.addDeck();
                        return false;
                    });
                    
                    // Ajouter aussi un event listener sur le bouton
                    const submitBtn = freshForm.querySelector('button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            this.addDeck();
                            return false;
                        });
                    }
                    
                    // Focus sur le champ de nom
                    const nameInput = freshForm.querySelector('#new-deck-name');
                    if (nameInput) {
                        nameInput.focus();
                    }
                }
            }
        }, 50);
    },
    
    addDeck() {
        const nameInput = document.getElementById('new-deck-name');
        if (!nameInput) {
            return;
        }
        
        const name = nameInput.value.trim();
        if (!name) {
            alert('Veuillez entrer un nom pour le deck.');
            return;
        }
        
        const deck = {
            id: Date.now().toString(),
            name: name,
            cards: []
        };
        
        try {
            Storage.saveDeck(deck);
            // Fermer la modale immédiatement sans délai
            this.hideModal();
            // Rendre les decks après un court délai pour la fluidité
            requestAnimationFrame(() => {
                this.renderDecks();
            });
        } catch (error) {
            console.error('Erreur lors de la création du deck:', error);
            alert('Erreur lors de la création du deck. Veuillez réessayer.');
        }
    },
    
    showEditDeckModal() {
        if (!this.currentDeckId) return;
        
        // Empêcher l'édition des decks de base
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        const content = `
            <form id="edit-deck-form">
                <div class="form-group">
                    <label for="edit-deck-name">Nom du deck</label>
                    <input type="text" id="edit-deck-name" required placeholder="Nom du deck" value="${this.escapeHtml(deck.name || '')}">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        `;
        
        this.showModalWithContent('Modifier le deck', content);
        
        requestAnimationFrame(() => {
            const form = document.getElementById('edit-deck-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.editDeck();
                });
            }
        }, 10);
    },
    
    editDeck() {
        if (!this.currentDeckId) return;
        
        // Empêcher l'édition des decks de base
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        const name = document.getElementById('edit-deck-name').value.trim();
        if (!name) {
            alert('Veuillez entrer un nom pour le deck.');
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        deck.name = name;
        Storage.saveDeck(deck);
        document.getElementById('deck-title').textContent = name;
        this.renderDecks();
        this.hideModal();
    },
    
    deleteDeck(id) {
        if (!id) {
            id = this.currentDeckId;
        }
        
        // Empêcher la suppression des decks de base
        if (this.currentIsBaseDeck || (this.baseDecks && this.baseDecks.find(d => d.id === id))) {
            alert('Les decks de base ne peuvent pas être supprimés.');
            return;
        }
        
        if (!confirm('Êtes-vous sûr de vouloir supprimer ce deck ?')) {
            return;
        }
        
        Storage.deleteDeck(id);
        this.showView('decks');
        this.renderDecks();
    },
    
    showAddCardModal() {
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        const content = `
            <form id="add-card-form">
                <div class="form-group">
                    <label for="new-card-front">Recto</label>
                    <textarea id="new-card-front" placeholder="Question ou texte du recto"></textarea>
                </div>
                <div class="form-group">
                    <label for="new-card-front-image">Image du recto (optionnel)</label>
                    <label for="new-card-front-image" class="btn-import-image" style="cursor: pointer; display: inline-block; color: white;">
                        Choisir un fichier
                    </label>
                    <input type="file" id="new-card-front-image" accept="image/*" style="display: none;">
                    <div id="preview-front-image" class="image-preview" style="display: none;">
                        <img id="preview-front-img" class="preview-image" alt="Aperçu recto">
                        <button type="button" class="btn-remove-preview" onclick="App.removeImagePreview('front')">×</button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="new-card-back">Verso</label>
                    <textarea id="new-card-back" placeholder="Réponse ou texte du verso"></textarea>
                </div>
                <div class="form-group">
                    <label for="new-card-back-image">Image du verso (optionnel)</label>
                    <label for="new-card-back-image" class="btn-import-image" style="cursor: pointer; display: inline-block; color: white;">
                        Choisir un fichier
                    </label>
                    <input type="file" id="new-card-back-image" accept="image/*" style="display: none;">
                    <div id="preview-back-image" class="image-preview" style="display: none;">
                        <img id="preview-back-img" class="preview-image" alt="Aperçu verso">
                        <button type="button" class="btn-remove-preview" onclick="App.removeImagePreview('back')">×</button>
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Créer</button>
                </div>
            </form>
        `;
        
        const modalOverlay = document.getElementById('modal-overlay');
        const modal = modalOverlay.querySelector('.modal');
        
        document.getElementById('modal-title').textContent = 'Nouvelle carte';
        document.getElementById('modal-content').innerHTML = content;
        
        // Afficher immédiatement, animation en arrière-plan
        modalOverlay.classList.remove('hidden');
        modalOverlay.style.opacity = '1';
        if (modal) {
            modal.style.transform = '';
            modal.style.opacity = '1';
        }
        
        // Animation en arrière-plan
        requestAnimationFrame(() => {
            modalOverlay.style.opacity = '0';
            if (modal) {
                modal.style.transform = 'translateY(30px) scale(0.95)';
                modal.style.opacity = '0';
            }
            setTimeout(() => {
                modalOverlay.style.opacity = '1';
                if (modal) {
                    modal.style.transform = 'translateY(0) scale(1)';
                    modal.style.opacity = '1';
                }
            }, 10);
        });
        
        // Attacher l'event listener immédiatement (ne pas attendre l'animation)
        requestAnimationFrame(() => {
            const form = document.getElementById('add-card-form');
            if (!form) {
                console.error('Formulaire add-card-form non trouvé');
                return;
            }
            
            // Gérer les uploads d'images
            const frontImageInput = form.querySelector('#new-card-front-image');
            const backImageInput = form.querySelector('#new-card-back-image');
            
            if (frontImageInput) {
                frontImageInput.addEventListener('change', (e) => {
                    this.handleImageUpload(e.target.files[0], 'front');
                });
            }
            
            if (backImageInput) {
                backImageInput.addEventListener('change', (e) => {
                    this.handleImageUpload(e.target.files[0], 'back');
                });
            }
            
            // Fonction de gestion de la soumission
            const handleSubmit = (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                // Récupérer les valeurs depuis le formulaire (pas depuis le document entier)
                const frontEl = form.querySelector('#new-card-front');
                const backEl = form.querySelector('#new-card-back');
                const frontImageBase64 = form.dataset.frontImageBase64 || '';
                const backImageBase64 = form.dataset.backImageBase64 || '';
                
                if (!frontEl || !backEl) {
                    alert('Erreur: les champs du formulaire n\'ont pas été trouvés.');
                    return false;
                }
                
                // Récupérer les valeurs depuis les textarea
                const front = (frontEl.value || '').trim();
                const back = (backEl.value || '').trim();
                
                // Vérifier qu'il y a au moins du texte ou une image de chaque côté
                const hasFrontContent = front.length > 0 || frontImageBase64.length > 0;
                const hasBackContent = back.length > 0 || backImageBase64.length > 0;
                
                if (!hasFrontContent || !hasBackContent) {
                    alert('Veuillez remplir au moins un champ (texte ou image) pour chaque côté de la carte.');
                    return false;
                }
                
                // Appeler addCard avec les valeurs
                this.addCardWithValues(front, back, frontImageBase64, backImageBase64);
                return false;
            };
            
            // Utiliser une variable pour éviter les doublons d'event listeners
            // Si le formulaire a déjà un event listener, on le supprime d'abord
            const existingHandler = form._submitHandler;
            if (existingHandler) {
                form.removeEventListener('submit', existingHandler);
            }
            
            // Stocker la référence du handler pour pouvoir le supprimer plus tard
            form._submitHandler = handleSubmit;
            form.addEventListener('submit', handleSubmit);
            
            // Ajouter aussi un event listener sur le bouton submit
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const existingClickHandler = submitBtn._clickHandler;
                if (existingClickHandler) {
                    submitBtn.removeEventListener('click', existingClickHandler);
                }
                submitBtn._clickHandler = handleSubmit;
                submitBtn.addEventListener('click', handleSubmit);
            }
        }, 50);
    },
    
    addCard() {
        // Cette fonction est conservée pour compatibilité, mais utilise maintenant addCardWithValues
        const form = document.getElementById('add-card-form');
        if (!form) {
            alert('Erreur: formulaire non trouvé.');
            return;
        }
        
        const frontElement = form.querySelector('#new-card-front');
        const backElement = form.querySelector('#new-card-back');
        
        if (!frontElement || !backElement) {
            alert('Erreur: les champs du formulaire n\'ont pas été trouvés.');
            return;
        }
        
        const front = (frontElement.value || '').trim();
        const back = (backElement.value || '').trim();
        
        this.addCardWithValues(front, back);
    },
    
    addCardWithValues(front, back, frontImage = '', backImage = '') {
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        // Vérifier que les valeurs sont valides
        const frontTrimmed = (front || '').trim();
        const backTrimmed = (back || '').trim();
        const frontImageTrimmed = (frontImage || '').trim();
        const backImageTrimmed = (backImage || '').trim();
        
        // Vérifier qu'il y a au moins du contenu (texte ou image) de chaque côté
        const hasFrontContent = frontTrimmed.length > 0 || frontImageTrimmed.length > 0;
        const hasBackContent = backTrimmed.length > 0 || backImageTrimmed.length > 0;
        
        if (!hasFrontContent || !hasBackContent) {
            alert('Veuillez remplir au moins un champ (texte ou image) pour chaque côté de la carte.');
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck) {
            alert('Erreur: deck non trouvé.');
            return;
        }
        
        const card = {
            front: frontTrimmed,
            back: backTrimmed,
            frontImage: frontImageTrimmed,
            backImage: backImageTrimmed,
            cardScore: 0,
            againCount: 0,
            nextReview: null,
            easeFactor: 2.5,
            interval: 0,
            repetitions: 0
        };
        
        deck.cards.push(card);
        Storage.saveDeck(deck);
        this.renderCards();
        this.hideModal();
    },
    
    handleImageUpload(file, side) {
        if (!file) return;
        
        // Vérifier le type de fichier
        if (!file.type.startsWith('image/')) {
            alert('Veuillez sélectionner un fichier image valide.');
            return;
        }
        
        // Vérifier la taille (max 5MB)
        const maxSize = 5 * 1024 * 1024; // 5MB
        if (file.size > maxSize) {
            alert('L\'image est trop grande. Veuillez sélectionner une image de moins de 5MB.');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = (e) => {
            const base64 = e.target.result;
            const previewId = side === 'front' ? 'preview-front-img' : 'preview-back-img';
            const previewContainerId = side === 'front' ? 'preview-front-image' : 'preview-back-image';
            const inputId = side === 'front' ? 'new-card-front-image' : 'new-card-back-image';
            const form = document.getElementById('add-card-form') || document.getElementById('edit-card-form');
            
            // Afficher la prévisualisation
            const previewImg = document.getElementById(previewId);
            const previewContainer = document.getElementById(previewContainerId);
            
            if (previewImg && previewContainer) {
                previewImg.src = base64;
                previewContainer.style.display = 'block';
            }
            
            // Stocker la base64 dans le formulaire
            if (form) {
                if (side === 'front') {
                    form.dataset.frontImageBase64 = base64;
                } else {
                    form.dataset.backImageBase64 = base64;
                }
            }
        };
        
        reader.onerror = () => {
            alert('Erreur lors de la lecture de l\'image.');
        };
        
        reader.readAsDataURL(file);
    },
    
    removeImagePreview(side) {
        const previewContainerId = side === 'front' ? 'preview-front-image' : 'preview-back-image';
        const inputId = side === 'front' ? 'new-card-front-image' : 'new-card-back-image';
        const editInputId = side === 'front' ? 'edit-card-front-image' : 'edit-card-back-image';
        const form = document.getElementById('add-card-form') || document.getElementById('edit-card-form');
        
        // Masquer la prévisualisation
        const previewContainer = document.getElementById(previewContainerId);
        if (previewContainer) {
            previewContainer.style.display = 'none';
        }
        
        // Réinitialiser l'input
        const input = document.getElementById(inputId) || document.getElementById(editInputId);
        if (input) {
            input.value = '';
        }
        
        // Supprimer la base64 du formulaire
        if (form) {
            if (side === 'front') {
                form.dataset.frontImageBase64 = '';
            } else {
                form.dataset.backImageBase64 = '';
            }
        }
    },
    
    showEditCardModal(cardIndex) {
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck || !deck.cards[cardIndex]) return;
        
        const card = deck.cards[cardIndex];
        const hasFrontImage = card.frontImage && card.frontImage.trim() !== '';
        const hasBackImage = card.backImage && card.backImage.trim() !== '';
        
        const content = `
            <form id="edit-card-form">
                <input type="hidden" id="edit-card-index" value="${cardIndex}">
                <div class="form-group">
                    <label for="edit-card-front">Recto</label>
                    <textarea id="edit-card-front" placeholder="Question ou texte du recto">${this.escapeHtml(card.front || '')}</textarea>
                </div>
                <div class="form-group">
                    <label for="edit-card-front-image">Image du recto (optionnel)</label>
                    <label for="edit-card-front-image" class="btn-import-image" style="cursor: pointer; display: inline-block; color: white;">
                        Choisir un fichier
                    </label>
                    <input type="file" id="edit-card-front-image" accept="image/*" style="display: none;">
                    <div id="preview-front-image" class="image-preview" style="display: ${hasFrontImage ? 'block' : 'none'};">
                        <img id="preview-front-img" class="preview-image" src="${hasFrontImage ? this.escapeHtml(card.frontImage) : ''}" alt="Aperçu recto">
                        <button type="button" class="btn-remove-preview" onclick="App.removeImagePreview('front')">×</button>
                    </div>
                </div>
                <div class="form-group">
                    <label for="edit-card-back">Verso</label>
                    <textarea id="edit-card-back" placeholder="Réponse ou texte du verso">${this.escapeHtml(card.back || '')}</textarea>
                </div>
                <div class="form-group">
                    <label for="edit-card-back-image">Image du verso (optionnel)</label>
                    <label for="edit-card-back-image" class="btn-import-image" style="cursor: pointer; display: inline-block; color: white;">
                        Choisir un fichier
                    </label>
                    <input type="file" id="edit-card-back-image" accept="image/*" style="display: none;">
                    <div id="preview-back-image" class="image-preview" style="display: ${hasBackImage ? 'block' : 'none'};">
                        <img id="preview-back-img" class="preview-image" src="${hasBackImage ? this.escapeHtml(card.backImage) : ''}" alt="Aperçu verso">
                        <button type="button" class="btn-remove-preview" onclick="App.removeImagePreview('back')">×</button>
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        `;
        
        this.showModalWithContent('Modifier la carte', content);
        
        requestAnimationFrame(() => {
            const form = document.getElementById('edit-card-form');
            if (form) {
                // Initialiser les images existantes dans le formulaire
                if (hasFrontImage) {
                    form.dataset.frontImageBase64 = card.frontImage;
                }
                if (hasBackImage) {
                    form.dataset.backImageBase64 = card.backImage;
                }
                
                // Gérer les uploads d'images
                const frontImageInput = form.querySelector('#edit-card-front-image');
                const backImageInput = form.querySelector('#edit-card-back-image');
                
                if (frontImageInput) {
                    frontImageInput.addEventListener('change', (e) => {
                        this.handleImageUpload(e.target.files[0], 'front');
                    });
                }
                
                if (backImageInput) {
                    backImageInput.addEventListener('change', (e) => {
                        this.handleImageUpload(e.target.files[0], 'back');
                    });
                }
                
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.editCard(cardIndex);
                });
            }
        }, 10);
    },
    
    editCard(cardIndex) {
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        // Utiliser le paramètre cardIndex ou le récupérer du DOM
        const index = cardIndex !== undefined ? cardIndex : parseInt(document.getElementById('edit-card-index')?.value || '0', 10);
        const form = document.getElementById('edit-card-form');
        const frontEl = document.getElementById('edit-card-front');
        const backEl = document.getElementById('edit-card-back');
        
        if (!frontEl || !backEl) {
            alert('Erreur: les champs du formulaire n\'ont pas été trouvés.');
            return;
        }
        
        const front = (frontEl.value || '').trim();
        const back = (backEl.value || '').trim();
        const frontImageBase64 = form ? (form.dataset.frontImageBase64 || '') : '';
        const backImageBase64 = form ? (form.dataset.backImageBase64 || '') : '';
        
        // Vérifier qu'il y a au moins du contenu (texte ou image) de chaque côté
        const hasFrontContent = front.length > 0 || frontImageBase64.length > 0;
        const hasBackContent = back.length > 0 || backImageBase64.length > 0;
        
        if (!hasFrontContent || !hasBackContent) {
            alert('Veuillez remplir au moins un champ (texte ou image) pour chaque côté de la carte.');
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck || !deck.cards || !deck.cards[index]) {
            alert('Erreur: carte non trouvée.');
            return;
        }
        
        deck.cards[index].front = front;
        deck.cards[index].back = back;
        deck.cards[index].frontImage = frontImageBase64;
        deck.cards[index].backImage = backImageBase64;
        Storage.saveDeck(deck);
        this.renderCards();
        this.hideModal();
    },
    
    deleteCard(index) {
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être modifiés.');
            return;
        }
        
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette carte ?')) {
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        deck.cards.splice(index, 1);
        Storage.saveDeck(deck);
        this.renderCards();
    },
    
    // ============================================
    // NAVIGATION (fonction déjà définie plus haut, supprimée ici pour éviter duplication)
    // ============================================
    
    
    // ============================================
    // MODALES SUPPLÉMENTAIRES
    // ============================================
    
    showReviewSettingsModal() {
        const content = `
            <form id="review-settings-form">
                <div class="form-group">
                    <label for="cards-per-session">Nombre de cartes par session</label>
                    <input type="number" id="cards-per-session" min="1" max="100" value="${this.cardsPerSession}" required>
                    <small style="color: var(--text-secondary); display: block; margin-top: 5px;">
                        Les cartes les plus difficiles seront privilégiées
                    </small>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        `;
        
        this.showModalWithContent('Paramètres de révision', content);
        
        requestAnimationFrame(() => {
            const form = document.getElementById('review-settings-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const cardsPerSession = parseInt(document.getElementById('cards-per-session').value);
                    if (cardsPerSession > 0 && cardsPerSession <= 100) {
                        this.cardsPerSession = cardsPerSession;
                        localStorage.setItem('flashcards_cardsPerSession', cardsPerSession.toString());
                        this.hideModal();
                        alert(`Configuration enregistrée : ${cardsPerSession} cartes par session`);
                    } else {
                        alert('Veuillez entrer un nombre entre 1 et 100');
                    }
                });
            }
        }, 10);
    },
    
    showStatsModal() {
        if (!this.currentDeckId) return;
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        const now = Date.now();
        const totalCards = deck.cards.length;
        let cardsDue = 0;
        let cardsEasy = 0;
        let cardsMedium = 0;
        let cardsHard = 0;
        let cardsVeryHard = 0;
        
        deck.cards.forEach(card => {
            const cardScore = card.cardScore || 0;
            if (!card.nextReview || card.nextReview <= now) {
                cardsDue++;
            }
            
            if (cardScore < 10) {
                cardsVeryHard++;
            } else if (cardScore < 20) {
                cardsHard++;
            } else if (cardScore < 30) {
                cardsMedium++;
            } else {
                cardsEasy++;
            }
        });
        
        const content = `
            <div style="padding: 10px 0;">
                <div style="margin-bottom: 20px;">
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">Statistiques du deck</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="display: flex; justify-content: space-between; padding: 10px; background: var(--surface); border-radius: 8px;">
                            <span><strong>Total de cartes:</strong></span>
                            <span>${totalCards}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 10px; background: var(--surface); border-radius: 8px;">
                            <span><strong>À réviser:</strong></span>
                            <span style="color: var(--primary-color); font-weight: 600;">${cardsDue}</span>
                        </div>
                    </div>
                </div>
                
                <div>
                    <h3 style="color: var(--primary-color); margin-bottom: 15px;">Répartition par difficulté</h3>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #4CAF50;"></div>
                            <span>Facile (30+):</span>
                            <span style="margin-left: auto; font-weight: 600;">${cardsEasy}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #FFC107;"></div>
                            <span>Moyen (20-29):</span>
                            <span style="margin-left: auto; font-weight: 600;">${cardsMedium}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #FF9800;"></div>
                            <span>Difficile (10-19):</span>
                            <span style="margin-left: auto; font-weight: 600;">${cardsHard}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #F44336;"></div>
                            <span>Très difficile (0-9):</span>
                            <span style="margin-left: auto; font-weight: 600;">${cardsVeryHard}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.showModalWithContent('Statistiques', content);
    },
    
    exportDeck() {
        if (!this.currentDeckId) return;
        if (this.currentIsBaseDeck) {
            alert('Les decks de base ne peuvent pas être exportés.');
            return;
        }
        
        const deck = this.getCurrentDeck();
        if (!deck) return;
        
        const dataStr = JSON.stringify(deck, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${deck.name.replace(/[^a-z0-9]/gi, '_')}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },
    
    importDeck(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importData = JSON.parse(e.target.result);
                if (!importData.name || !importData.cards || !Array.isArray(importData.cards)) {
                    alert('Format de fichier invalide.');
                    return;
                }
                
                // Initialiser toutes les propriétés nécessaires pour chaque carte
                const deck = {
                    id: Date.now().toString(),
                    name: importData.name,
                    cards: importData.cards.map(card => ({
                        front: card.front || '',
                        back: card.back || '',
                        frontImage: card.frontImage || '',
                        backImage: card.backImage || '',
                        cardScore: 0,
                        againCount: 0,
                        easeFactor: 2.5,
                        interval: 1,
                        repetitions: 0,
                        nextReview: null,
                        lastReview: null
                    })),
                    createdAt: Date.now()
                };
                
                Storage.saveDeck(deck);
                this.renderDecks();
                alert(`Deck "${deck.name}" importé avec succès !`);
            } catch (error) {
                alert('Erreur lors de l\'importation du deck.');
                console.error(error);
            }
        };
        reader.readAsText(file);
        event.target.value = ''; // Réinitialiser l'input
    },
    
    configureReviewReminders() {
        // Charger les rappels existants depuis localStorage
        const savedReminders = JSON.parse(localStorage.getItem('flashcards_reminders') || '[]');
        const decks = Storage.getDecks();
        
        // Synchroniser les rappels depuis IndexedDB vers localStorage (une seule fois au chargement)
        if ('serviceWorker' in navigator && !this._remindersSynced) {
            this._remindersSynced = true;
            navigator.serviceWorker.ready.then(registration => {
                // Récupérer tous les rappels depuis IndexedDB
                const messageChannel = new MessageChannel();
                messageChannel.port1.onmessage = (event) => {
                    if (event.data.reminders) {
                        // Synchroniser les rappels depuis IndexedDB vers localStorage
                        const indexedDBReminders = event.data.reminders.map(reminder => ({
                            id: reminder.id,
                            deckId: reminder.deckId,
                            intervalMinutes: reminder.intervalMinutes
                        }));
                        
                        // Fusionner avec les rappels existants dans localStorage
                        // Garder uniquement ceux qui existent dans IndexedDB
                        const mergedReminders = indexedDBReminders;
                        localStorage.setItem('flashcards_reminders', JSON.stringify(mergedReminders));
                        
                        // Recharger l'interface seulement si les rappels ont changé
                        const currentReminders = JSON.parse(localStorage.getItem('flashcards_reminders') || '[]');
                        const currentStr = JSON.stringify(currentReminders.sort((a, b) => (a.id || 0) - (b.id || 0)));
                        const mergedStr = JSON.stringify(mergedReminders.sort((a, b) => (a.id || 0) - (b.id || 0)));
                        if (currentStr !== mergedStr) {
                            // Réinitialiser le flag pour permettre le rechargement
                            this._remindersSynced = false;
                            setTimeout(() => this.configureReviewReminders(), 100);
                        }
                    }
                };
                
                if (registration.active) {
                    registration.active.postMessage({
                        type: 'GET_ALL_REMINDERS'
                    }, [messageChannel.port2]);
                }
            });
        }
        
        const content = `
            <div style="padding: 10px 0;">
                <div class="form-group">
                    <label class="form-label-custom">
                        <span class="label-icon">${Icons.getIcon('bell', 18, 'var(--primary-color)')}</span>
                        <span>Configurer un rappel de révision</span>
                    </label>
                    <div class="custom-select-wrapper">
                        <select id="reminder-deck-select" class="custom-select">
                            <option value="">Sélectionner un deck</option>
                            ${decks.map(deck => `<option value="${deck.id}">${this.escapeHtml(deck.name)}</option>`).join('')}
                        </select>
                        <div class="custom-select-arrow">
                            ${Icons.getIcon('arrowDown', 12, 'currentColor')}
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label class="form-label-custom">
                        <span class="label-icon">${Icons.getIcon('clock', 18, 'var(--primary-color)')}</span>
                        <span>Intervalle de rappel</span>
                    </label>
                    <div class="custom-select-wrapper">
                        <select id="reminder-interval-select" class="custom-select">
                            <option value="60">Toutes les heures</option>
                            <option value="120">Toutes les 2 heures</option>
                            <option value="180">Toutes les 3 heures</option>
                            <option value="360">Toutes les 6 heures</option>
                            <option value="720">Toutes les 12 heures</option>
                            <option value="1440" selected>Tous les jours</option>
                            <option value="2880">Tous les 2 jours</option>
                            <option value="10080">Toutes les semaines</option>
                            <option value="custom">Personnalisé</option>
                        </select>
                        <div class="custom-select-arrow">
                            ${Icons.getIcon('arrowDown', 12, 'currentColor')}
                        </div>
                    </div>
                    <div id="custom-interval-container" style="display: none; margin-top: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <input type="number" id="custom-interval-input" placeholder="Ex: 30" min="1" style="flex: 1; padding: 12px; border: 2px solid var(--border); border-radius: 8px; font-size: 16px; font-family: inherit; transition: border-color 0.2s ease;">
                            <span style="color: var(--text-secondary); font-size: 14px; white-space: nowrap;">en minutes</span>
                        </div>
                    </div>
                </div>
                
                <button type="button" id="add-reminder-btn" class="btn btn-primary btn-add-reminder">
                    <span class="btn-icon">+</span>
                    <span>Ajouter le rappel</span>
                </button>
                
                <div class="reminders-section">
                    <div class="reminders-section-header">
                        <h3 class="reminders-title">
                            <span class="title-icon">${Icons.getIcon('bell', 20, 'var(--primary-color)')}</span>
                            Rappels actifs
                        </h3>
                    </div>
                    <div class="reminders-list" id="reminders-list">
                        ${savedReminders.length === 0 ? '<p style="text-align: center; color: var(--text-secondary); padding: 20px;">Aucun rappel configuré</p>' : ''}
                        ${savedReminders.map((reminder, index) => {
                            const deck = decks.find(d => d.id === reminder.deckId);
                            const deckName = deck ? deck.name : 'Deck supprimé';
                            const intervalText = this.getIntervalText(reminder.intervalMinutes);
                            return `
                                <div class="reminder-item" data-reminder-index="${index}" data-reminder-id="${reminder.id || ''}">
                                    <div class="reminder-item-content">
                                        <div class="reminder-item-title">${this.escapeHtml(deckName)}</div>
                                        <div class="reminder-item-details">Rappel : ${intervalText}</div>
                                    </div>
                                    <button class="btn-remove-reminder" data-reminder-index="${index}" data-reminder-id="${reminder.id || ''}">Supprimer</button>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        `;
        
        this.showModalWithContent('Rappels de révision', content);
        
        requestAnimationFrame(() => {
            // Gérer l'affichage du champ personnalisé
            const intervalSelect = document.getElementById('reminder-interval-select');
            const customIntervalContainer = document.getElementById('custom-interval-container');
            const customIntervalInput = document.getElementById('custom-interval-input');
            
            if (intervalSelect && customIntervalContainer && customIntervalInput) {
                // Ajouter le style focus pour le champ personnalisé
                customIntervalInput.addEventListener('focus', () => {
                    customIntervalInput.style.borderColor = 'var(--primary-color)';
                });
                
                customIntervalInput.addEventListener('blur', () => {
                    if (!customIntervalInput.value) {
                        customIntervalInput.style.borderColor = 'var(--border)';
                    }
                });
                
                intervalSelect.addEventListener('change', () => {
                    if (intervalSelect.value === 'custom') {
                        customIntervalContainer.style.display = 'block';
                        customIntervalInput.focus();
                    } else {
                        customIntervalContainer.style.display = 'none';
                        customIntervalInput.value = '';
                    }
                });
            }
            
            // Event listener pour ajouter un rappel
            const addReminderBtn = document.getElementById('add-reminder-btn');
            if (addReminderBtn) {
                addReminderBtn.addEventListener('click', () => {
                    const deckId = document.getElementById('reminder-deck-select').value;
                    let intervalMinutes;
                    
                    if (intervalSelect && intervalSelect.value === 'custom') {
                        const customValue = parseInt(customIntervalInput.value);
                        if (!customValue || customValue < 1) {
                            alert('Veuillez entrer un nombre de minutes valide (minimum 1 minute).');
                            return;
                        }
                        intervalMinutes = customValue;
                    } else {
                        intervalMinutes = parseInt(intervalSelect.value);
                    }
                    
                    if (!deckId) {
                        alert('Veuillez sélectionner un deck.');
                        return;
                    }
                    
                    const deck = decks.find(d => d.id === deckId);
                    const deckName = deck ? deck.name : 'Deck inconnu';
                    
                    // Vérifier si un rappel avec le même intervalle existe déjà pour ce deck
                    const existingReminder = savedReminders.find(r => 
                        r.deckId === deckId && r.intervalMinutes === intervalMinutes
                    );
                    
                    if (existingReminder) {
                        alert('Un rappel avec cet intervalle existe déjà pour ce deck.');
                        return;
                    }
                    
                    // Générer un ID unique pour le rappel
                    const reminderId = Date.now() + Math.random();
                    
                    // Ajouter le rappel à localStorage
                    savedReminders.push({
                        id: reminderId,
                        deckId: deckId,
                        intervalMinutes: intervalMinutes
                    });
                    localStorage.setItem('flashcards_reminders', JSON.stringify(savedReminders));
                    
                    // Demander la permission de notification si nécessaire
                    this.requestNotificationPermission().then(async () => {
                        // Envoyer un message au service worker pour ajouter le rappel
                        if ('serviceWorker' in navigator) {
                            try {
                                const registration = await navigator.serviceWorker.ready;
                                
                                // Utiliser le service worker actif ou en attente
                                const worker = registration.active || registration.waiting || registration.installing;
                                
                                if (worker) {
                                    const messageChannel = new MessageChannel();
                                    messageChannel.port1.onmessage = (event) => {
                                        if (event.data.isDuplicate) {
                                            alert('Un rappel avec cet intervalle existe déjà pour ce deck.');
                                            // Retirer le rappel de localStorage
                                            savedReminders = savedReminders.filter(r => r.id !== reminderId);
                                            localStorage.setItem('flashcards_reminders', JSON.stringify(savedReminders));
                                            this.configureReviewReminders();
                                        } else if (event.data.success) {
                                            // Mettre à jour l'ID si le service worker en a généré un
                                            if (event.data.reminderId && event.data.reminderId !== reminderId) {
                                                const reminder = savedReminders.find(r => r.id === reminderId);
                                                if (reminder) {
                                                    reminder.id = event.data.reminderId;
                                                    localStorage.setItem('flashcards_reminders', JSON.stringify(savedReminders));
                                                }
                                            }
                                            console.log('Rappel ajoute avec succes, ID:', event.data.reminderId || reminderId);
                                            this.configureReviewReminders();
                                        }
                                    };
                                    
                                    worker.postMessage({
                                        type: 'ADD_REMINDER',
                                        deckId: deckId,
                                        deckName: deckName,
                                        intervalMinutes: intervalMinutes,
                                        reminderId: reminderId
                                    }, [messageChannel.port2]);
                                    console.log('Rappel envoye au service worker:', deckName, intervalMinutes, 'minutes');
                                } else {
                                    console.warn('Aucun service worker disponible');
                                }
                            } catch (error) {
                                console.error('Erreur lors de l\'envoi du rappel au service worker:', error);
                            }
                        }
                    }).catch(() => {
                        // Permission refusée, mais on sauvegarde quand même dans localStorage
                        console.log('Permission de notification refusee');
                    });
                    
                    // Recharger la modale pour afficher les changements
                    this.configureReviewReminders();
                });
            }
            
            // Event listeners pour supprimer les rappels (déjà attaché plus haut, mais on le garde pour compatibilité)
            document.querySelectorAll('.btn-remove-reminder').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const index = parseInt(e.target.getAttribute('data-reminder-index'));
                    // Récupérer le rappel AVANT de le supprimer du tableau
                    const removedReminder = savedReminders[index];
                    if (!removedReminder) return;
                    
                    savedReminders.splice(index, 1);
                    localStorage.setItem('flashcards_reminders', JSON.stringify(savedReminders));
                    
                    // Envoyer un message au service worker pour supprimer le rappel spécifique
                    if ('serviceWorker' in navigator && removedReminder.id) {
                        navigator.serviceWorker.ready.then(registration => {
                            if (registration.active) {
                                registration.active.postMessage({
                                    type: 'REMOVE_REMINDER',
                                    reminderId: removedReminder.id,
                                    deckId: removedReminder.deckId // Pour compatibilité
                                });
                            }
                        }).catch(err => {
                            console.error('Erreur lors de la suppression du rappel:', err);
                        });
                    }
                    
                    // Recharger la modale
                    this.configureReviewReminders();
                });
            });
        }, 10);
    },
    
    getIntervalText(intervalMinutes) {
        if (intervalMinutes < 60) {
            return `Toutes les ${intervalMinutes} minutes`;
        } else if (intervalMinutes === 60) {
            return 'Toutes les heures';
        } else if (intervalMinutes < 1440) {
            const hours = intervalMinutes / 60;
            return `Toutes les ${hours} heures`;
        } else if (intervalMinutes === 1440) {
            return 'Tous les jours';
        } else if (intervalMinutes < 10080) {
            const days = intervalMinutes / 1440;
            return `Tous les ${days} jours`;
        } else {
            const weeks = intervalMinutes / 10080;
            return `Toutes les ${weeks} semaines`;
        }
    },
    
    async requestNotificationPermission() {
        if (!('Notification' in window)) {
            console.log('Les notifications ne sont pas supportees par ce navigateur.');
            return Promise.resolve();
        }
        
        if (Notification.permission === 'granted') {
            console.log('Permissions de notifications deja accordees');
            // Vérifier aussi la permission Periodic Background Sync si disponible
            await this.requestPeriodicSyncPermission();
            // S'abonner à FCM si pas déjà fait
            await this.subscribeToFCM();
            return Promise.resolve();
        }
        
        if (Notification.permission === 'denied') {
            alert('Les notifications ont été bloquées. Veuillez les autoriser dans les paramètres de votre navigateur/appareil pour recevoir les rappels de révision.\n\nSur iOS : Réglages > Safari > Notifications\nSur Android : Paramètres > Applications > Chrome > Notifications');
            return Promise.reject();
        }
        
        // Demander la permission
        try {
            console.log('📱 Demande de permission de notifications...');
            const permission = await Notification.requestPermission();
            console.log('📱 Permission de notifications:', permission);
            
            if (permission === 'granted') {
                console.log('Permissions de notifications accordees !');
                // Demander aussi la permission Periodic Background Sync
                await this.requestPeriodicSyncPermission();
                
                // S'abonner à FCM (NIVEAU 3 - Firebase Cloud Messaging)
                await this.subscribeToFCM();
                
                // Tester l'affichage d'une notification
                if ('serviceWorker' in navigator) {
                    try {
                        const registration = await navigator.serviceWorker.ready;
                        await registration.showNotification('Notifications activées !', {
                            body: 'Vous recevrez maintenant des rappels pour vos révisions.',
                            icon: './icon-1024.png',
                            tag: 'test-notification',
                            silent: false
                        });
                    } catch (error) {
                        console.log('Note: Notification de test non affichée (normal si service worker pas encore prêt)');
                    }
                }
                
                return Promise.resolve();
            } else {
                alert('Les notifications sont nécessaires pour recevoir les rappels de révision. Veuillez les autoriser.');
                return Promise.reject();
            }
        } catch (error) {
            console.error('Erreur lors de la demande de permission:', error);
            return Promise.reject();
        }
    },
    
    // ============================================
    // NIVEAU 3: FIREBASE CLOUD MESSAGING (FCM)
    // ============================================
    
    async subscribeToFCM() {
        // Vérifier si Firebase Messaging est disponible
        if (!messaging) {
            console.log('Firebase Messaging non disponible');
            return;
        }
        
        // Vérifier que la permission est déjà accordée (ne pas redemander)
        if (Notification.permission !== 'granted') {
            console.log('Permission de notification non accordée, FCM ne peut pas fonctionner');
            return;
        }
        
        try {
            // Enregistrer le service worker FCM (en plus du service worker principal)
            if ('serviceWorker' in navigator) {
                try {
                    // Utiliser le même chemin relatif que le service worker principal
                    await navigator.serviceWorker.register('./firebase-messaging-sw.js');
                    console.log('Service Worker FCM enregistré');
                } catch (error) {
                    // Si le service worker FCM ne peut pas être enregistré, ce n'est pas bloquant
                    // FCM peut fonctionner avec le service worker principal
                    console.log('Service Worker FCM non enregistré (peut utiliser le service worker principal):', error.message);
                }
            }
            
            // Vérifier que la clé VAPID est disponible
            const vapidKey = FCM_VAPID_KEY || localStorage.getItem('fcm_vapid_key');
            if (!vapidKey) {
                console.error('⚠️ ERREUR: FCM_VAPID_KEY n\'est pas défini dans config.js');
                console.error('📝 Solution: Vérifiez que config.js contient FCM_VAPID_KEY ou copiez config.example.js en config.js');
                return;
            }
            
            try {
                // Obtenir le token FCM (la permission est déjà accordée)
                const token = await messaging.getToken({
                    vapidKey: vapidKey
                });
                
                if (token) {
                    console.log('Token FCM obtenu:', token);
                    
                    // Sauvegarder le token dans localStorage
                    localStorage.setItem('fcm_token', token);
                    
                    // Afficher le token dans la console pour faciliter les tests
                    console.log('📱 TOKEN FCM (copiez-le pour envoyer des notifications depuis Firebase Console):', token);
                    
                    // Écouter les messages FCM quand l'app est ouverte
                    messaging.onMessage((payload) => {
                        console.log('Message FCM reçu (app ouverte):', payload);
                        // La notification sera affichée automatiquement par FCM
                    });
                    
                } else {
                    console.warn('Aucun token FCM obtenu');
                }
            } catch (error) {
                console.error('Erreur lors de l\'obtention du token FCM:', error);
                if (error.code === 'messaging/permission-blocked') {
                    console.log('Permission de notification bloquée');
                } else if (error.code === 'messaging/invalid-vapid-key') {
                    console.error('Clé VAPID invalide. Vérifiez votre configuration Firebase.');
                } else if (error.code === 'messaging/failed-service-worker-registration') {
                    console.log('Service worker non enregistré, FCM utilisera le service worker principal');
                }
            }
        } catch (error) {
            console.error('Erreur lors de l\'abonnement FCM:', error);
        }
    },
    
    // Obtenir le token FCM actuel
    async getFCMToken() {
        if (!messaging) {
            return null;
        }
        
        // Vérifier que la clé VAPID est disponible
        const vapidKey = FCM_VAPID_KEY || localStorage.getItem('fcm_vapid_key');
        if (!vapidKey) {
            console.error('⚠️ ERREUR: FCM_VAPID_KEY n\'est pas défini dans config.js');
            return null;
        }
        
        try {
            const token = await messaging.getToken({
                vapidKey: vapidKey
            });
            return token;
        } catch (error) {
            console.error('Erreur lors de la récupération du token FCM:', error);
            return null;
        }
    },
    
    async requestPeriodicSyncPermission() {
        // Demander la permission Periodic Background Sync si disponible (Android Chrome)
        if ('serviceWorker' in navigator && 'periodicSync' in navigator.serviceWorker) {
            try {
                const registration = await navigator.serviceWorker.ready;
                if ('periodicSync' in registration) {
                    try {
                        const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
                        if (status.state === 'prompt') {
                            // La permission sera demandée automatiquement lors de l'enregistrement
                            // On essaie de l'enregistrer pour déclencher la demande
                            try {
                                await registration.periodicSync.register('check-notifications-periodic', {
                                    minInterval: 60 * 60 * 1000 // Minimum 1 heure
                                });
                            } catch (error) {
                                // Ignorer si la permission n'est pas accordée
                                console.log('Periodic Background Sync non disponible:', error);
                            }
                        }
                    } catch (error) {
                        // L'API n'est pas disponible
                        console.log('Periodic Background Sync API non disponible');
                    }
                }
            } catch (error) {
                console.log('Erreur lors de la demande de permission Periodic Sync:', error);
            }
        }
    },
    
    async testNotificationsOnStart() {
        // Tester les notifications au démarrage si les permissions sont accordées
        if ('Notification' in window && Notification.permission === 'granted') {
            if ('serviceWorker' in navigator) {
                try {
                    const registration = await navigator.serviceWorker.ready;
                    // Vérifier que le service worker peut afficher des notifications
                    console.log('Permissions de notifications actives, service worker pret');
                } catch (error) {
                    console.log('Service worker pas encore pret:', error);
                }
            }
        }
    },
    
    
    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            // Utiliser un chemin relatif pour le service worker
            const swPath = './service-worker.js';
            try {
                const registration = await navigator.serviceWorker.register(swPath);
                
                // Enregistrer Periodic Background Sync si disponible (Android Chrome)
                if ('periodicSync' in registration) {
                    try {
                        const status = await navigator.permissions.query({ name: 'periodic-background-sync' });
                        if (status.state === 'granted') {
                            await registration.periodicSync.register('check-notifications-periodic', {
                                minInterval: 60 * 60 * 1000 // Minimum 1 heure entre les syncs
                            });
                            console.log('Periodic Background Sync enregistré');
                        }
                    } catch (error) {
                        console.log('Periodic Background Sync non disponible:', error);
                    }
                }
                
                // Enregistrer plusieurs synchronisations en arrière-plan pour augmenter la fiabilité
                if ('sync' in registration) {
                    try {
                        // Sync principale
                        await registration.sync.register('check-notifications');
                        // Syncs de backup pour augmenter les chances
                        await registration.sync.register('check-notifications-backup-1').catch(() => {});
                        await registration.sync.register('check-notifications-backup-2').catch(() => {});
                    } catch (error) {
                        // Ignorer les erreurs si l'API n'est pas disponible
                        console.log('Background Sync non disponible:', error);
                    }
                }
                
                // Vérifier périodiquement si on peut reprogrammer les syncs
                // Cela aide à maintenir les syncs actives même si le navigateur les ignore parfois
                setInterval(async () => {
                    if (registration.sync) {
                        try {
                            // Réenregistrer toutes les syncs pour maintenir leur activation
                            await registration.sync.register('check-notifications').catch(() => {});
                            await registration.sync.register('check-notifications-backup-1').catch(() => {});
                            await registration.sync.register('check-notifications-backup-2').catch(() => {});
                        } catch (error) {
                            // Ignorer les erreurs
                        }
                    }
                }, 15 * 60 * 1000); // Toutes les 15 minutes (plus fréquent pour maintenir les syncs actives)
                
            } catch (err) {
                // Ignorer l'erreur si on est en file:// (développement local)
                if (window.location.protocol !== 'file:') {
                    console.error('Service Worker registration failed:', err);
                }
            }
        }
    },
    
    checkFirstVisit() {
        // Vérifier si c'est la première visite
        const hasVisited = localStorage.getItem('flashcards_hasVisited');
        if (!hasVisited) {
            // Marquer comme visité
            localStorage.setItem('flashcards_hasVisited', 'true');
            // Ouvrir automatiquement le popup d'aide après un court délai
            setTimeout(() => {
                this.showHelpModal();
            }, 500);
        }
    },
    
    setupServiceWorkerMessageListener() {
        // Écouter les messages du service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', async (event) => {
                if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
                    // Afficher une notification si nécessaire
                } else if (event.data && event.data.type === 'SCHEDULE_FCM') {
                    // Le service worker demande d'enregistrer une notification pour FCM
                    console.log('[NIVEAU 3] Notification programmée pour FCM:', event.data.notification);
                    // Note: Les notifications FCM sont envoyées depuis Firebase Console
                    // Le token FCM est disponible dans localStorage.getItem('fcm_token')
                    console.log('Token FCM disponible pour envoyer la notification:', localStorage.getItem('fcm_token'));
                }
            });
        }
    },
    
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    
    showHelpModal() {
        const content = `
            <div class="help-modal-container">
                <div class="help-pages-wrapper">
                    <div class="help-page active">
                        <h3 class="help-page-title">
                            <span class="icon-svg">${Icons.getIcon('help', 24, 'var(--primary-color)')}</span>
                            Qu'est-ce qu'une flashcard ?
                        </h3>
                        <div class="help-page-content">
                            <p><strong>ShardCards</strong> utilise le principe des <strong>flashcards</strong> (cartes flash) pour mémoriser efficacement.</p>
                            <p style="margin-top: 10px;"><strong>Qu'est-ce qu'une flashcard ?</strong></p>
                            <p>Une carte avec deux faces : <strong>recto</strong> (question/concept) et <strong>verso</strong> (réponse/explication).</p>
                            <p style="margin-top: 10px;"><strong>Comment ça fonctionne ?</strong></p>
                            <p>Regardez le recto, essayez de vous souvenir du verso, puis vérifiez. Plus vous révisez, mieux vous mémorisez !</p>
                            <p style="margin-top: 10px;"><strong>Pourquoi c'est efficace ?</strong></p>
                            <p>La <strong>répétition espacée</strong> : les cartes difficiles sont présentées plus souvent, les faciles moins souvent. Cela optimise votre temps et renforce votre mémoire.</p>
                        </div>
                    </div>
                    <div class="help-page">
                        <h3 class="help-page-title">
                            <span class="icon-svg">${Icons.getIcon('help', 24, 'var(--primary-color)')}</span>
                            Bienvenue dans ShardCards
                        </h3>
                        <div class="help-page-content">
                            <p><strong>Créer un deck :</strong> Cliquez sur le bouton <strong>+</strong> en bas à droite, puis entrez un nom.</p>
                            <p style="margin-top: 10px;"><strong>Ajouter des cartes :</strong> Ouvrez un deck, puis cliquez sur <strong>+</strong> pour ajouter une carte (recto/verso).</p>
                            <p style="margin-top: 10px;"><strong>Actions sur les decks :</strong> Maintenez un appui long sur un deck pour réviser ou supprimer.</p>
                        </div>
                    </div>
                    <div class="help-page">
                        <h3 class="help-page-title">
                            <span class="icon-svg">${Icons.getIcon('refresh', 24, 'var(--primary-color)')}</span>
                            Réviser vos cartes
                        </h3>
                        <div class="help-page-content">
                            <p><strong>Comment réviser :</strong> Maintenez un appui long sur un deck et sélectionnez "Réviser", ou utilisez le menu hamburger.</p>
                            <p style="margin-top: 10px;"><strong>Système de révision :</strong> Algorithme intelligent qui privilégie les cartes difficiles. Couleurs selon la difficulté :</p>
                            <ul style="margin-top: 8px; padding-left: 20px; font-size: 14px;">
                                <li><span style="color: #F44336;">🔴 Rouge</span> : Très difficile</li>
                                <li><span style="color: #FF9800;">🟠 Orange</span> : Difficile</li>
                                <li><span style="color: #FFC107;">🟡 Jaune</span> : Moyen</li>
                                <li><span style="color: #4CAF50;">🟢 Vert</span> : Facile</li>
                            </ul>
                        </div>
                    </div>
                    <div class="help-page">
                        <h3 class="help-page-title">
                            <span class="icon-svg">${Icons.getIcon('settings', 24, 'var(--primary-color)')}</span>
                            Fonctionnalités
                        </h3>
                        <div class="help-page-content">
                            <p><strong>Decks de base :</strong> Decks prédéfinis dans l'onglet "Decks de Base". Révisables mais non modifiables.</p>
                            <p style="margin-top: 10px;"><strong>Import/Export :</strong> Exportez vos decks (sauvegarde/partage) ou importez depuis des fichiers JSON.</p>
                            <p style="margin-top: 10px;"><strong>Statistiques :</strong> Consultez la répartition des difficultés via le menu hamburger.</p>
                        </div>
                    </div>
                </div>
                <div class="help-navigation">
                    <button class="help-nav-btn" id="help-prev-btn" disabled>
                        <span class="icon-svg">${Icons.getIcon('arrowLeft', 20, 'white')}</span>
                    </button>
                    <div class="help-dots">
                        <span class="help-dot active" data-page="0"></span>
                        <span class="help-dot" data-page="1"></span>
                        <span class="help-dot" data-page="2"></span>
                        <span class="help-dot" data-page="3"></span>
                    </div>
                    <button class="help-nav-btn" id="help-next-btn">
                        <span class="icon-svg">${Icons.getIcon('arrowRight', 20, 'white')}</span>
                    </button>
                </div>
            </div>
        `;
        
        this.showModalWithContent('Aide', content);
        
        // Initialiser la navigation de l'aide immédiatement
        requestAnimationFrame(() => {
            this.initHelpNavigation();
        });
    },
    
    initHelpNavigation() {
        let currentPage = 0;
        const totalPages = 4;
        const pages = document.querySelectorAll('.help-page');
        const dots = document.querySelectorAll('.help-dot');
        const prevBtn = document.getElementById('help-prev-btn');
        const nextBtn = document.getElementById('help-next-btn');
        
        const updatePage = (pageIndex) => {
            // Mettre à jour les pages
            pages.forEach((page, index) => {
                if (index === pageIndex) {
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                }
            });
            
            // Mettre à jour les dots
            dots.forEach((dot, index) => {
                if (index === pageIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
            
            // Mettre à jour les boutons
            if (prevBtn) {
                prevBtn.disabled = pageIndex === 0;
            }
            if (nextBtn) {
                nextBtn.disabled = pageIndex === totalPages - 1;
            }
        };
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage > 0) {
                    currentPage--;
                    updatePage(currentPage);
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages - 1) {
                    currentPage++;
                    updatePage(currentPage);
                }
            });
        }
        
        // Navigation par dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentPage = index;
                updatePage(currentPage);
            });
        });
    },
    
    // ============================================
    // UTILITAIRES
    // ============================================
    
    escapeHtml(text) {
        if (text === null || text === undefined) {
            return '';
        }
        const div = document.createElement('div');
        div.textContent = String(text);
        return div.innerHTML;
    }
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
