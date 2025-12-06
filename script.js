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
            grid: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
        };
        return icons[name] || '';
    }
};

// ============================================
// GESTION DES DONNÉES
// ============================================

const Storage = {
    getDecks() {
        const data = localStorage.getItem('flashcards_decks');
        return data ? JSON.parse(data) : [];
    },
    
    saveDecks(decks) {
        localStorage.setItem('flashcards_decks', JSON.stringify(decks));
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
        this.renderDecks();
        this.registerServiceWorker();
        
        // Afficher le popup d'aide lors de la première visite
        this.checkFirstVisit();
    },
    
    initIcons() {
        // Remplacer les placeholders d'icônes par les SVG réels
        document.querySelectorAll('.icon-menu').forEach(el => {
            el.innerHTML = Icons.getIcon('menu', 20, 'white');
        });
        document.querySelectorAll('.icon-arrow-left').forEach(el => {
            el.innerHTML = Icons.getIcon('arrowLeft', 20, 'white');
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
        // Navigation
        document.getElementById('add-deck-btn').addEventListener('click', () => this.showAddDeckModal());
        document.getElementById('help-btn').addEventListener('click', () => this.showHelpModal());
        document.getElementById('back-btn').addEventListener('click', () => this.showDecksView());
        document.getElementById('review-back-btn').addEventListener('click', () => this.showDeckDetailView());
        
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
        
        // Review
        document.getElementById('review-card').addEventListener('click', () => this.revealAnswer());
        document.getElementById('again-btn').addEventListener('click', () => this.rateCard(0));
        document.getElementById('good-btn').addEventListener('click', () => this.rateCard(1));
        document.getElementById('easy-btn').addEventListener('click', () => this.rateCard(2));
        
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
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`${viewName}-view`).classList.add('active');
        this.currentView = viewName;
    },
    
    showDecksView() {
        this.showView('decks');
        this.currentDeckId = null;
        this.renderDecks();
    },
    
    showDeckDetailView() {
        if (!this.currentDeckId) return;
        this.showView('deck-detail');
        this.renderCards();
    },
    
    showReviewView() {
        if (!this.currentDeckId) return;
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck) return;
        
        // Limiter le nombre de cartes selon la configuration
        this.reviewCards = SM2.getCardsToReview(deck, this.cardsPerSession);
        if (this.reviewCards.length === 0) {
            alert('Aucune carte dans ce deck !');
            return;
        }
        
        this.currentReviewIndex = 0;
        this.isRevealed = false;
        this.showView('review');
        
        // Attendre que la vue soit complètement affichée avant de rendre la carte
        setTimeout(() => {
            this.renderReviewCard();
        }, 10);
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
                { icon: 'upload', text: 'Exporter', action: () => {
                    this.exportDeck();
                    this.hideHamburgerMenu();
                }},
                { icon: 'edit', text: 'Modifier le deck', action: () => {
                    this.showEditDeckModal();
                    this.hideHamburgerMenu();
                }},
            ];
        }
        
        menuItems.innerHTML = items.map(item => `
            <button class="hamburger-menu-item" onclick="App.hamburgerMenuAction(${items.indexOf(item)})">
                <span class="hamburger-menu-item-icon">${Icons.getIcon(item.icon, 20, 'currentColor')}</span>
                <span>${item.text}</span>
            </button>
        `).join('');
        
        // Stocker les actions pour pouvoir les appeler
        this.currentMenuActions = items.map(item => item.action);
        
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
            const cardsDue = deck.cards.filter(card => !card.nextReview || card.nextReview <= now).length;
            const totalCards = deck.cards.length;
            
            return `
                <div class="deck-card" data-deck-id="${deck.id}">
                    <div class="deck-actions">
                        <button class="deck-action-btn" onclick="App.deleteDeck('${deck.id}')" title="Supprimer">${Icons.getIcon('delete', 16, 'currentColor')}</button>
                        <button class="deck-action-btn" onclick="App.startReview('${deck.id}')" title="Réviser">${Icons.getIcon('refresh', 16, 'currentColor')}</button>
                    </div>
                    <h3>${this.escapeHtml(deck.name)}</h3>
                    <div class="deck-info">
                        <span>${totalCards} carte${totalCards > 1 ? 's' : ''}</span>
                        ${cardsDue > 0 ? `<span style="color: var(--primary-color); font-weight: 600;">${cardsDue} à réviser</span>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        container.querySelectorAll('.deck-card').forEach(card => {
            const deckId = card.dataset.deckId;
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.deck-actions')) {
                    this.openDeck(deckId);
                }
            });
        });
    },
    
    openDeck(deckId) {
        this.currentDeckId = deckId;
        const deck = Storage.getDeck(deckId);
        if (deck) {
            document.getElementById('deck-title').textContent = deck.name;
            this.showDeckDetailView();
        }
    },
    
    startReview(deckId) {
        this.currentDeckId = deckId;
        this.showReviewView();
    },
    
    // ============================================
    // RENDU DES CARTES
    // ============================================
    
    renderCards() {
        if (!this.currentDeckId) return;
        
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck) return;
        
        const container = document.getElementById('cards-container');
        
        if (deck.cards.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">${Icons.getIcon('card', 64, 'var(--text-secondary)')}</div>
                    <div class="empty-state-text">Aucune carte. Ajoutez-en une pour commencer !</div>
                </div>
            `;
            return;
        }
        
        const now = Date.now();
        
        container.innerHTML = deck.cards.map((card, index) => {
            const cardScore = card.cardScore || 0;
            
            // Couleur selon le score (système de zones)
            const cardColor = ColorZones.getCardColor(cardScore);
            const zoneName = ColorZones.getZoneName(cardScore);
            
            return `
                <div class="card-item">
                    <div class="card-color-band" style="background-color: ${cardColor};"></div>
                    <div class="card-item-header">
                        <strong>Carte ${index + 1}</strong>
                        <span style="font-size: 11px; color: ${cardColor}; font-weight: 600; margin-left: 10px;">
                            ${zoneName}
                        </span>
                    </div>
                    <div class="card-item-content">
                        <div class="card-side-content">
                            <strong>Question:</strong>
                            ${card.frontImage ? `<div class="card-image-container" data-card-index="${index}" data-side="front"><img src="${card.frontImage}" alt="Question" class="card-image"></div>` : ''}
                            ${card.front ? `<div class="card-text" data-card-index="${index}" data-side="front">${this.escapeHtml(card.front)}</div>` : ''}
                        </div>
                        <div class="card-side-content" style="margin-top: 10px;">
                            <strong>Réponse:</strong>
                            ${card.backImage ? `<div class="card-image-container" data-card-index="${index}" data-side="back"><img src="${card.backImage}" alt="Réponse" class="card-image"></div>` : ''}
                            ${card.back ? `<div class="card-text" data-card-index="${index}" data-side="back">${this.escapeHtml(card.back)}</div>` : ''}
                        </div>
                    </div>
                    <div class="card-item-actions">
                        <button class="card-action-btn" onclick="App.editCard(${index})">Modifier</button>
                        <button class="card-action-btn" onclick="App.deleteCard(${index})" style="color: var(--error);">Supprimer</button>
                    </div>
                </div>
            `;
        }).join('');
        
        // Appliquer la taille de texte proportionnelle aux images dans la liste
        setTimeout(() => {
            container.querySelectorAll('.card-image-container').forEach(imageContainer => {
                const side = imageContainer.dataset.side;
                const cardIndex = imageContainer.dataset.cardIndex;
                const textElement = container.querySelector(`.card-text[data-side="${side}"][data-card-index="${cardIndex}"]`);
                if (textElement) {
                    this.applyProportionalTextSize(imageContainer, textElement);
                }
            });
        }, 100);
    },
    
    // ============================================
    // MODALS - IDs CORRIGÉS POUR ÉVITER LES CONFLITS
    // ============================================
    
    showModal(title, content) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-content').innerHTML = content;
        document.getElementById('modal-overlay').classList.remove('hidden');
    },
    
    hideModal() {
        document.getElementById('modal-overlay').classList.add('hidden');
    },
    
    showAddDeckModal() {
        const content = `
            <form id="add-deck-form">
                <div class="form-group">
                    <label for="deck-name">Nom du deck</label>
                    <input type="text" id="deck-name" required placeholder="Ex: Vocabulaire anglais">
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Créer</button>
                </div>
            </form>
        `;
        
        this.showModal('Nouveau deck', content);
        
        setTimeout(() => {
            const form = document.getElementById('add-deck-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('deck-name').value.trim();
                    if (name) {
                        this.createDeck(name);
                        this.hideModal();
                    }
                });
            }
        }, 10);
    },
    
    showEditDeckModal() {
        if (!this.currentDeckId) return;
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck) return;
        
        const content = `
            <form id="edit-deck-form">
                <div class="form-group">
                    <label for="edit-deck-name">Nom du deck</label>
                    <input type="text" id="edit-deck-name" value="${this.escapeHtml(deck.name)}" required>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        `;
        
        this.showModal('Modifier le deck', content);
        
        setTimeout(() => {
            const form = document.getElementById('edit-deck-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('edit-deck-name').value.trim();
                    if (name) {
                        this.updateDeck(name);
                        this.hideModal();
                    }
                });
            }
        }, 10);
    },
    
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
        
        this.showModal('Paramètres de révision', content);
        
        setTimeout(() => {
            const form = document.getElementById('review-settings-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const cardsPerSession = parseInt(document.getElementById('cards-per-session').value);
                    if (cardsPerSession > 0 && cardsPerSession <= 100) {
                        this.cardsPerSession = cardsPerSession;
                        // Sauvegarder dans localStorage
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
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck) return;
        
        const now = Date.now();
        const cardsWithStats = deck.cards.map((card, index) => {
            const againCount = card.againCount || 0;
            const cardScore = card.cardScore || 0;
            const isDue = !card.nextReview || card.nextReview <= now;
            const daysSinceLastReview = card.lastReview 
                ? Math.floor((now - card.lastReview) / (24 * 60 * 60 * 1000))
                : 999;
            
            return {
                index: index,
                card: card,
                againCount: againCount,
                cardScore: cardScore,
                isDue: isDue,
                daysSinceLastReview: daysSinceLastReview,
                nextReview: card.nextReview ? new Date(card.nextReview).toLocaleDateString('fr-FR') : 'Jamais'
            };
        });
        
        // Trier par score (croissant = les plus difficiles en premier)
        cardsWithStats.sort((a, b) => {
            if (a.cardScore !== b.cardScore) {
                return a.cardScore - b.cardScore; // Tri croissant
            }
            if (a.isDue !== b.isDue) {
                return a.isDue ? -1 : 1;
            }
            if (b.againCount !== a.againCount) {
                return b.againCount - a.againCount;
            }
            return (a.card.nextReview || 0) - (b.card.nextReview || 0);
        });
        
        const totalCards = deck.cards.length;
        const totalAgainClicks = deck.cards.reduce((sum, card) => sum + (card.againCount || 0), 0);
        const totalCardScore = deck.cards.reduce((sum, card) => sum + (card.cardScore || 0), 0);
        const cardsDue = deck.cards.filter(card => !card.nextReview || card.nextReview <= now).length;
        const avgAgainCount = totalCards > 0 ? (totalAgainClicks / totalCards).toFixed(1) : 0;
        const avgCardScore = totalCards > 0 ? (totalCardScore / totalCards).toFixed(1) : 0;
        
        const statsHtml = `
            <div style="margin-bottom: 20px; padding: 15px; background: var(--bg-secondary); border-radius: 8px;">
                <h3 style="margin-top: 0; margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                    <span class="icon-svg">${Icons.getIcon('chart', 20, 'var(--primary-color)')}</span>
                    Statistiques du deck
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; font-size: 14px;">
                    <div><strong>Total cartes:</strong> ${totalCards}</div>
                    <div><strong>Cartes à réviser:</strong> ${cardsDue}</div>
                    <div><strong>Total clics "Encore":</strong> ${totalAgainClicks}</div>
                    <div><strong>Score total:</strong> <span style="color: #2196F3;">${totalCardScore}</span></div>
                    <div><strong>Moyenne "Encore":</strong> ${avgAgainCount} par carte</div>
                    <div><strong>Score moyen:</strong> ${avgCardScore}</div>
                </div>
            </div>
            <div style="max-height: 400px; overflow-y: auto;">
                <h4 style="margin-top: 0;">Classement par difficulté (les plus difficiles en premier)</h4>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                    <thead>
                        <tr style="background: var(--bg-secondary); position: sticky; top: 0;">
                            <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">#</th>
                            <th style="padding: 8px; text-align: left; border-bottom: 2px solid var(--border-color);">Carte</th>
                            <th style="padding: 8px; text-align: center; border-bottom: 2px solid var(--border-color);">Encore</th>
                            <th style="padding: 8px; text-align: center; border-bottom: 2px solid var(--border-color);">
                                <span class="icon-svg" style="display: inline-block; vertical-align: middle;">${Icons.getIcon('chart', 14, 'currentColor')}</span> Score
                            </th>
                            <th style="padding: 8px; text-align: center; border-bottom: 2px solid var(--border-color);">📅 Prochaine</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cardsWithStats.map((stat, idx) => {
                            const cardColor = ColorZones.getCardColor(stat.cardScore);
                            
                            return `
                                <tr style="border-bottom: 1px solid var(--border-color);">
                                    <td style="padding: 8px; font-weight: 600; color: ${cardColor};">${idx + 1}</td>
                                    <td style="padding: 8px;">
                                        <strong>Carte ${stat.index + 1}</strong><br>
                                        <small style="color: var(--text-secondary);">${this.escapeHtml(stat.card.front.substring(0, 40))}${stat.card.front.length > 40 ? '...' : ''}</small>
                                    </td>
                                    <td style="padding: 8px; text-align: center; color: ${cardColor}; font-weight: 600;">${stat.againCount}</td>
                                    <td style="padding: 8px; text-align: center; font-weight: 600; color: ${cardColor};">${stat.cardScore}</td>
                                    <td style="padding: 8px; text-align: center; font-size: 11px;">${stat.nextReview}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
        
        this.showModal('Statistiques du deck', statsHtml);
    },
    
    showAddCardModal() {
        if (!this.currentDeckId) {
            alert('Veuillez d\'abord ouvrir un deck');
            return;
        }
        
        // IDs MODIFIÉS: input-card-front et input-card-back pour éviter conflit
        const content = `
            <form id="add-card-form">
                <div class="form-group">
                    <label for="input-card-front">Question</label>
                    <textarea id="input-card-front" placeholder="Texte de la question"></textarea>
                </div>
                <div class="form-group">
                    <input type="file" id="input-card-front-image" accept="image/*" style="display: none;">
                    <button type="button" class="btn btn-primary btn-import-image" id="btn-import-front-image">
                        Importer une image pour la question
                    </button>
                    <div id="front-image-preview" class="image-preview"></div>
                </div>
                <div class="form-group">
                    <label for="input-card-back">Réponse</label>
                    <textarea id="input-card-back" placeholder="Texte de la réponse"></textarea>
                </div>
                <div class="form-group">
                    <input type="file" id="input-card-back-image" accept="image/*" style="display: none;">
                    <button type="button" class="btn btn-primary btn-import-image" id="btn-import-back-image">
                        Importer une image pour la réponse
                    </button>
                    <div id="back-image-preview" class="image-preview"></div>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Ajouter</button>
                </div>
            </form>
        `;
        
        this.showModal('Nouvelle carte', content);
        
        setTimeout(() => {
            const form = document.getElementById('add-card-form');
            const frontImageInput = document.getElementById('input-card-front-image');
            const backImageInput = document.getElementById('input-card-back-image');
            const frontImagePreview = document.getElementById('front-image-preview');
            const backImagePreview = document.getElementById('back-image-preview');
            const btnImportFront = document.getElementById('btn-import-front-image');
            const btnImportBack = document.getElementById('btn-import-back-image');
            
            const imageData = { front: null, back: null };
            
            // Gestion de l'upload d'image pour la question
            if (btnImportFront && frontImageInput) {
                btnImportFront.addEventListener('click', () => {
                    frontImageInput.click();
                });
                
                frontImageInput.addEventListener('change', async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        try {
                            const base64 = await this.imageToBase64(file);
                            imageData.front = base64;
                            if (frontImagePreview) {
                                frontImagePreview.innerHTML = `<img src="${base64}" alt="Aperçu" class="preview-image"><button type="button" class="btn-remove-preview" id="btn-remove-front-new">×</button>`;
                                const newBtn = document.getElementById('btn-remove-front-new');
                                if (newBtn) {
                                    newBtn.addEventListener('click', () => {
                                        imageData.front = null;
                                        if (frontImageInput) frontImageInput.value = '';
                                        if (frontImagePreview) frontImagePreview.innerHTML = '';
                                    });
                                }
                            }
                        } catch (error) {
                            alert('Erreur lors du chargement de l\'image : ' + error.message);
                        }
                    }
                });
            }
            
            // Gestion de l'upload d'image pour la réponse
            if (btnImportBack && backImageInput) {
                btnImportBack.addEventListener('click', () => {
                    backImageInput.click();
                });
                
                backImageInput.addEventListener('change', async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        try {
                            const base64 = await this.imageToBase64(file);
                            imageData.back = base64;
                            if (backImagePreview) {
                                backImagePreview.innerHTML = `<img src="${base64}" alt="Aperçu" class="preview-image"><button type="button" class="btn-remove-preview" id="btn-remove-back-new">×</button>`;
                                const newBtn = document.getElementById('btn-remove-back-new');
                                if (newBtn) {
                                    newBtn.addEventListener('click', () => {
                                        imageData.back = null;
                                        if (backImageInput) backImageInput.value = '';
                                        if (backImagePreview) backImagePreview.innerHTML = '';
                                    });
                                }
                            }
                        } catch (error) {
                            alert('Erreur lors du chargement de l\'image : ' + error.message);
                        }
                    }
                });
            }
            
            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const front = document.getElementById('input-card-front').value.trim();
                    const back = document.getElementById('input-card-back').value.trim();
                    
                    // Vérifier qu'au moins un champ (texte ou image) est rempli pour chaque côté
                    if (!front && !imageData.front && !back && !imageData.back) {
                        alert('Veuillez remplir au moins un champ (texte ou image) pour la question et la réponse');
                        return;
                    }
                    
                    if (!front && !imageData.front) {
                        alert('Veuillez ajouter du texte ou une image pour la question');
                        return;
                    }
                    
                    if (!back && !imageData.back) {
                        alert('Veuillez ajouter du texte ou une image pour la réponse');
                        return;
                    }
                    
                    await this.createCard(front, back, imageData.front, imageData.back);
                    this.hideModal();
                });
            }
        }, 10);
    },
    
    showEditCardModal(cardIndex) {
        if (!this.currentDeckId) return;
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck || !deck.cards[cardIndex]) return;
        
        const card = deck.cards[cardIndex];
        const frontImage = card.frontImage || '';
        const backImage = card.backImage || '';
        
        // IDs MODIFIÉS: input-edit-card-front et input-edit-card-back
        const content = `
            <form id="edit-card-form">
                <div class="form-group">
                    <label for="input-edit-card-front">Question</label>
                    <textarea id="input-edit-card-front" placeholder="Texte de la question">${this.escapeHtml(card.front || '')}</textarea>
                </div>
                <div class="form-group">
                    <input type="file" id="input-edit-card-front-image" accept="image/*" style="display: none;">
                    <button type="button" class="btn btn-primary btn-import-image" id="btn-edit-import-front-image">
                        Importer une image pour la question
                    </button>
                    <div id="edit-front-image-preview" class="image-preview">${frontImage ? `<img src="${frontImage}" alt="Aperçu" class="preview-image"><button type="button" class="btn-remove-preview" id="btn-remove-edit-front">×</button>` : ''}</div>
                </div>
                <div class="form-group">
                    <label for="input-edit-card-back">Réponse</label>
                    <textarea id="input-edit-card-back" placeholder="Texte de la réponse">${this.escapeHtml(card.back || '')}</textarea>
                </div>
                <div class="form-group">
                    <input type="file" id="input-edit-card-back-image" accept="image/*" style="display: none;">
                    <button type="button" class="btn btn-primary btn-import-image" id="btn-edit-import-back-image">
                        Importer une image pour la réponse
                    </button>
                    <div id="edit-back-image-preview" class="image-preview">${backImage ? `<img src="${backImage}" alt="Aperçu" class="preview-image"><button type="button" class="btn-remove-preview" id="btn-remove-edit-back">×</button>` : ''}</div>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="App.hideModal()">Annuler</button>
                    <button type="submit" class="btn btn-primary">Enregistrer</button>
                </div>
            </form>
        `;
        
        this.showModal('Modifier la carte', content);
        
        setTimeout(() => {
            const form = document.getElementById('edit-card-form');
            const frontImageInput = document.getElementById('input-edit-card-front-image');
            const backImageInput = document.getElementById('input-edit-card-back-image');
            const frontImagePreview = document.getElementById('edit-front-image-preview');
            const backImagePreview = document.getElementById('edit-back-image-preview');
            const btnImportFront = document.getElementById('btn-edit-import-front-image');
            const btnImportBack = document.getElementById('btn-edit-import-back-image');
            
            const editImageData = { front: frontImage || null, back: backImage || null };
            
            // Gestion de la suppression d'image
            const btnRemoveFront = document.getElementById('btn-remove-edit-front');
            const btnRemoveBack = document.getElementById('btn-remove-edit-back');
            
            if (btnRemoveFront) {
                btnRemoveFront.addEventListener('click', () => {
                    editImageData.front = null;
                    if (frontImageInput) frontImageInput.value = '';
                    if (frontImagePreview) frontImagePreview.innerHTML = '';
                });
            }
            
            if (btnRemoveBack) {
                btnRemoveBack.addEventListener('click', () => {
                    editImageData.back = null;
                    if (backImageInput) backImageInput.value = '';
                    if (backImagePreview) backImagePreview.innerHTML = '';
                });
            }
            
            // Gestion de l'upload d'image pour la question
            if (btnImportFront && frontImageInput) {
                btnImportFront.addEventListener('click', () => {
                    frontImageInput.click();
                });
                
                frontImageInput.addEventListener('change', async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        try {
                            const base64 = await this.imageToBase64(file);
                            editImageData.front = base64;
                            if (frontImagePreview) {
                                frontImagePreview.innerHTML = `<img src="${base64}" alt="Aperçu" class="preview-image"><button type="button" class="btn-remove-preview" id="btn-remove-edit-front-new">×</button>`;
                                const newBtn = document.getElementById('btn-remove-edit-front-new');
                                if (newBtn) {
                                    newBtn.addEventListener('click', () => {
                                        editImageData.front = null;
                                        if (frontImageInput) frontImageInput.value = '';
                                        if (frontImagePreview) frontImagePreview.innerHTML = '';
                                    });
                                }
                            }
                        } catch (error) {
                            alert('Erreur lors du chargement de l\'image : ' + error.message);
                        }
                    }
                });
            }
            
            // Gestion de l'upload d'image pour la réponse
            if (btnImportBack && backImageInput) {
                btnImportBack.addEventListener('click', () => {
                    backImageInput.click();
                });
                
                backImageInput.addEventListener('change', async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        try {
                            const base64 = await this.imageToBase64(file);
                            editImageData.back = base64;
                            if (backImagePreview) {
                                backImagePreview.innerHTML = `<img src="${base64}" alt="Aperçu" class="preview-image"><button type="button" class="btn-remove-preview" id="btn-remove-edit-back-new">×</button>`;
                                const newBtn = document.getElementById('btn-remove-edit-back-new');
                                if (newBtn) {
                                    newBtn.addEventListener('click', () => {
                                        editImageData.back = null;
                                        if (backImageInput) backImageInput.value = '';
                                        if (backImagePreview) backImagePreview.innerHTML = '';
                                    });
                                }
                            }
                        } catch (error) {
                            alert('Erreur lors du chargement de l\'image : ' + error.message);
                        }
                    }
                });
            }
            
            if (form) {
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    const front = document.getElementById('input-edit-card-front').value.trim();
                    const back = document.getElementById('input-edit-card-back').value.trim();
                    
                    // Vérifier qu'au moins un champ (texte ou image) est rempli pour chaque côté
                    if (!front && !editImageData.front && !back && !editImageData.back) {
                        alert('Veuillez remplir au moins un champ (texte ou image) pour la question et la réponse');
                        return;
                    }
                    
                    if (!front && !editImageData.front) {
                        alert('Veuillez ajouter du texte ou une image pour la question');
                        return;
                    }
                    
                    if (!back && !editImageData.back) {
                        alert('Veuillez ajouter du texte ou une image pour la réponse');
                        return;
                    }
                    
                    await this.updateCard(cardIndex, front, back, editImageData.front, editImageData.back);
                    this.hideModal();
                });
            }
        }, 10);
    },
    
    // ============================================
    // GESTION DES DECKS
    // ============================================
    
    createDeck(name) {
        const deck = {
            id: Date.now().toString(),
            name: name,
            cards: [],
            createdAt: Date.now()
        };
        
        Storage.saveDeck(deck);
        this.renderDecks();
    },
    
    updateDeck(name) {
        if (!this.currentDeckId) return;
        const deck = Storage.getDeck(this.currentDeckId);
        if (deck) {
            deck.name = name;
            Storage.saveDeck(deck);
            document.getElementById('deck-title').textContent = name;
            this.renderDecks();
        }
    },
    
    deleteDeck(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce deck ?')) {
            Storage.deleteDeck(id);
            if (this.currentDeckId === id) {
                this.showDecksView();
            } else {
                this.renderDecks();
            }
        }
    },
    
    // ============================================
    // GESTION DES CARTES
    // ============================================
    
    createCard(front, back, frontImage = null, backImage = null) {
        if (!this.currentDeckId) {
            console.error('Aucun deck sélectionné');
            return;
        }
        
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck) {
            console.error('Deck non trouvé');
            return;
        }
        
        const card = {
            front: front || '',
            back: back || '',
            frontImage: frontImage || null,
            backImage: backImage || null,
            easeFactor: 2.5,
            interval: 1,
            repetitions: 0,
            againCount: 0,
            cardScore: 0,
            nextReview: null,
            lastReview: null
        };
        
        deck.cards.push(card);
        Storage.saveDeck(deck);
        this.renderCards();
        this.renderDecks();
    },
    
    removeImagePreview(side, imageData) {
        if (side === 'front') {
            const input = document.getElementById('input-card-front-image');
            const preview = document.getElementById('front-image-preview');
            if (input) input.value = '';
            if (preview) preview.innerHTML = '';
            if (imageData) imageData.front = null;
        } else if (side === 'back') {
            const input = document.getElementById('input-card-back-image');
            const preview = document.getElementById('back-image-preview');
            if (input) input.value = '';
            if (preview) preview.innerHTML = '';
            if (imageData) imageData.back = null;
        }
    },
    
    editCard(index) {
        this.showEditCardModal(index);
    },
    
    updateCard(index, front, back, frontImage = null, backImage = null) {
        if (!this.currentDeckId) return;
        const deck = Storage.getDeck(this.currentDeckId);
        if (deck && deck.cards[index]) {
            deck.cards[index].front = front || '';
            deck.cards[index].back = back || '';
            if (frontImage !== null) {
                deck.cards[index].frontImage = frontImage || null;
            }
            if (backImage !== null) {
                deck.cards[index].backImage = backImage || null;
            }
            Storage.saveDeck(deck);
            this.renderCards();
        }
    },
    
    deleteCard(index) {
        if (!this.currentDeckId) return;
        if (confirm('Êtes-vous sûr de vouloir supprimer cette carte ?')) {
            const deck = Storage.getDeck(this.currentDeckId);
            if (deck && deck.cards[index]) {
                deck.cards.splice(index, 1);
                Storage.saveDeck(deck);
                this.renderCards();
                this.renderDecks();
            }
        }
    },
    
    // ============================================
    // RÉVISION
    // ============================================
    
    renderReviewCard() {
        if (this.currentReviewIndex >= this.reviewCards.length) {
            const reviewCard = document.getElementById('review-card');
            const reviewButtons = document.getElementById('review-buttons');
            const reviewProgress = document.getElementById('review-progress');
            
            if (reviewCard) {
                reviewCard.innerHTML = `
                    <div class="card-side">
                        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px;">
                            <div class="icon-svg" style="color: var(--success);">${Icons.getIcon('success', 48, 'var(--success)')}</div>
                            <p style="font-size: 20px; font-weight: 600;">Félicitations !</p>
                            <p>Vous avez terminé toutes les cartes à réviser.</p>
                        </div>
                    </div>
                `;
            }
            if (reviewButtons) {
                reviewButtons.classList.add('hidden');
            }
            if (reviewProgress) {
                reviewProgress.textContent = 'Terminé';
            }
            return;
        }
        
        // Restaurer la structure HTML si elle a été modifiée
        const reviewCard = document.getElementById('review-card');
        if (reviewCard && !reviewCard.querySelector('#card-front')) {
            reviewCard.innerHTML = `
                <div id="card-front" class="card-side">
                    <div id="review-card-color-band" class="review-card-color-band"></div>
                    <div id="front-content" class="card-side-inner"></div>
                </div>
                <div id="card-back" class="card-side hidden">
                    <div id="review-card-color-band-back" class="review-card-color-band"></div>
                    <div id="back-content" class="card-side-inner"></div>
                </div>
                <div id="reveal-hint" class="reveal-hint">Tapez pour révéler</div>
            `;
        }
        
        const card = this.reviewCards[this.currentReviewIndex];
        if (!card) return;
        
        const total = this.reviewCards.length;
        const current = this.currentReviewIndex + 1;
        const cardScore = card.cardScore || 0;
        const cardColor = ColorZones.getCardColor(cardScore);
        
        const frontContent = document.getElementById('front-content');
        const backContent = document.getElementById('back-content');
        const cardFront = document.getElementById('card-front');
        const cardBack = document.getElementById('card-back');
        const revealHint = document.getElementById('reveal-hint');
        const reviewButtons = document.getElementById('review-buttons');
        const reviewProgress = document.getElementById('review-progress');
        const colorBand = document.getElementById('review-card-color-band');
        const colorBandBack = document.getElementById('review-card-color-band-back');
        
        // Construire le contenu de la question avec image et/ou texte
        if (frontContent) {
            let frontHtml = '';
            const hasFrontImage = card.frontImage && (typeof card.frontImage === 'string') && card.frontImage.trim() !== '';
            const hasFrontText = card.front && (typeof card.front === 'string') && card.front.trim() !== '';
            
            if (hasFrontImage) {
                frontHtml += `<div class="review-image-container" id="front-image-container"><img src="${card.frontImage}" alt="Question" class="review-image"></div>`;
            }
            if (hasFrontText) {
                frontHtml += `<p class="review-text" id="front-text-element">${this.escapeHtml(card.front)}</p>`;
            }
            if (!frontHtml) {
                frontHtml = '<p style="color: var(--text-secondary);">Aucun contenu pour la question</p>';
            }
            frontContent.innerHTML = frontHtml;
            
            // Appliquer la taille de texte proportionnelle si image et texte sont présents
            if (hasFrontImage && hasFrontText) {
                setTimeout(() => {
                    const imageContainer = document.getElementById('front-image-container');
                    const textElement = document.getElementById('front-text-element');
                    if (imageContainer && textElement) {
                        this.applyProportionalTextSize(imageContainer, textElement);
                    }
                }, 50);
            }
        }
        
        // Construire le contenu de la réponse avec image et/ou texte
        if (backContent) {
            let backHtml = '';
            const hasBackImage = card.backImage && (typeof card.backImage === 'string') && card.backImage.trim() !== '';
            const hasBackText = card.back && (typeof card.back === 'string') && card.back.trim() !== '';
            
            if (hasBackImage) {
                backHtml += `<div class="review-image-container" id="back-image-container"><img src="${card.backImage}" alt="Réponse" class="review-image"></div>`;
            }
            if (hasBackText) {
                backHtml += `<p class="review-text" id="back-text-element">${this.escapeHtml(card.back)}</p>`;
            }
            if (!backHtml) {
                backHtml = '<p style="color: var(--text-secondary);">Aucun contenu pour la réponse</p>';
            }
            backContent.innerHTML = backHtml;
            
            // Appliquer la taille de texte proportionnelle si image et texte sont présents
            if (hasBackImage && hasBackText) {
                setTimeout(() => {
                    const imageContainer = document.getElementById('back-image-container');
                    const textElement = document.getElementById('back-text-element');
                    if (imageContainer && textElement) {
                        this.applyProportionalTextSize(imageContainer, textElement);
                    }
                }, 50);
            }
        }
        if (cardFront) cardFront.classList.remove('hidden');
        if (cardBack) cardBack.classList.add('hidden');
        if (revealHint) revealHint.style.display = 'block';
        if (reviewButtons) reviewButtons.classList.add('hidden');
        if (reviewProgress) reviewProgress.textContent = `${current} / ${total}`;
        if (colorBand) colorBand.style.backgroundColor = cardColor;
        if (colorBandBack) colorBandBack.style.backgroundColor = cardColor;
        
        this.isRevealed = false;
    },
    
    revealAnswer() {
        if (this.isRevealed) return;
        
        const cardFront = document.getElementById('card-front');
        const cardBack = document.getElementById('card-back');
        const revealHint = document.getElementById('reveal-hint');
        const reviewButtons = document.getElementById('review-buttons');
        
        if (!cardFront || !cardBack || !revealHint || !reviewButtons) return;
        
        this.isRevealed = true;
        cardFront.classList.add('hidden');
        cardBack.classList.remove('hidden');
        revealHint.style.display = 'none';
        reviewButtons.classList.remove('hidden');
    },
    
    rateCard(quality) {
        if (this.currentReviewIndex >= this.reviewCards.length) return;
        
        const card = this.reviewCards[this.currentReviewIndex];
        const deck = Storage.getDeck(this.currentDeckId);
        
        if (deck) {
            const deckCard = deck.cards.find(c => c.front === card.front && c.back === card.back);
            if (deckCard) {
                SM2.calculateNextReview(deckCard, quality);
                Storage.saveDeck(deck);
            }
        }
        
        this.currentReviewIndex++;
        this.renderReviewCard();
    },
    
    // ============================================
    // IMPORT / EXPORT
    // ============================================
    
    exportDeck() {
        if (!this.currentDeckId) return;
        const deck = Storage.getDeck(this.currentDeckId);
        if (!deck) return;
        
        const exportData = {
            name: deck.name,
            cards: deck.cards.map(card => ({
                front: card.front || '',
                back: card.back || '',
                frontImage: card.frontImage || null,
                backImage: card.backImage || null
            }))
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${deck.name.replace(/[^a-z0-9]/gi, '_')}.json`;
        link.click();
        URL.revokeObjectURL(url);
    },
    
    importDeck(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        const self = this; // Sauvegarder la référence à 'this'
        
        reader.onload = (e) => {
            try {
                const fileContent = e.target.result;
                console.log('Contenu du fichier (premiers 500 caractères):', fileContent.substring(0, 500));
                
                const importData = JSON.parse(fileContent);
                console.log('Données JSON parsées:', importData);
                console.log('Type de importData.cards:', typeof importData.cards, Array.isArray(importData.cards));
                
                // Vérifier le format
                if (!importData.name) {
                    throw new Error('Le fichier doit contenir un champ "name"');
                }
                
                // Vérifier si cards existe et est un tableau
                if (importData.cards === undefined || importData.cards === null) {
                    throw new Error('Le fichier doit contenir un champ "cards" (tableau)');
                }
                
                if (!Array.isArray(importData.cards)) {
                    console.error('cards n\'est pas un tableau:', importData.cards);
                    throw new Error(`Le champ "cards" doit être un tableau. Type reçu: ${typeof importData.cards}`);
                }
                
                console.log('Nombre de cartes dans le fichier:', importData.cards.length);
                
                // Permettre l'importation d'un deck vide (on peut ajouter des cartes après)
                if (importData.cards.length === 0) {
                    console.warn('Le deck est vide (aucune carte). Le deck sera créé mais sans cartes.');
                }
                
                // Créer le deck avec toutes les cartes
                let validCardsCount = 0;
                let invalidCardsCount = 0;
                
                const cards = importData.cards.map((card, index) => {
                    // Vérifier que chaque carte a les champs requis
                    if (!card) {
                        console.warn(`Carte ${index + 1} est null ou undefined`);
                        invalidCardsCount++;
                        return null;
                    }
                    
                    if (typeof card !== 'object') {
                        console.warn(`Carte ${index + 1} n'est pas un objet:`, card);
                        invalidCardsCount++;
                        return null;
                    }
                    
                    // Accepter front/back même s'ils sont vides (on les trimmera)
                    const front = card.front !== undefined && card.front !== null ? String(card.front).trim() : '';
                    const back = card.back !== undefined && card.back !== null ? String(card.back).trim() : '';
                    const frontImage = card.frontImage || null;
                    const backImage = card.backImage || null;
                    
                    if ((!front && !frontImage) || (!back && !backImage)) {
                        console.warn(`Carte ${index + 1} ignorée: champs manquants ou vides`, {
                            front: front || '(vide)',
                            back: back || '(vide)',
                            card: card
                        });
                        invalidCardsCount++;
                        return null;
                    }
                    
                    validCardsCount++;
                    return {
                        front: front,
                        back: back,
                        frontImage: frontImage,
                        backImage: backImage,
                        easeFactor: 2.5,
                        interval: 1,
                        repetitions: 0,
                        againCount: 0,
                        cardScore: 0,
                        nextReview: null,
                        lastReview: null
                    };
                }).filter(card => card !== null); // Filtrer les cartes invalides
                
                console.log(`Cartes valides: ${validCardsCount}, invalides: ${invalidCardsCount}`);
                
                if (cards.length === 0) {
                    throw new Error(`Aucune carte valide trouvée dans le fichier. ${invalidCardsCount} carte(s) invalide(s) détectée(s). Vérifiez que chaque carte a les champs "front" et "back".`);
                }
                
                const deck = {
                    id: Date.now().toString(),
                    name: importData.name,
                    cards: cards,
                    createdAt: Date.now()
                };
                
                Storage.saveDeck(deck);
                self.renderDecks();
                
                let message = `Deck "${deck.name}" importé avec succès !\n${deck.cards.length} carte(s) importée(s).`;
                if (deck.cards.length === 0) {
                    message += '\n\nLe deck est vide. Vous pouvez ajouter des cartes en ouvrant le deck.';
                }
                if (invalidCardsCount > 0) {
                    message += `\n${invalidCardsCount} carte(s) invalide(s) ignorée(s).`;
                }
                alert(message);
                
            } catch (error) {
                console.error('Erreur lors de l\'import:', error);
                console.error('Stack trace:', error.stack);
                alert('Erreur lors de l\'import : ' + error.message + '\n\nVérifiez la console (F12) pour plus de détails.');
            }
        };
        
        reader.onerror = () => {
            alert('Erreur lors de la lecture du fichier');
        };
        
        reader.readAsText(file);
        event.target.value = '';
    },
    
    // ============================================
    // SERVICE WORKER
    // ============================================
    
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            // Vérifier que nous ne sommes pas en mode file://
            if (window.location.protocol === 'file:') {
                console.log('Service Worker désactivé en mode file://');
                return;
            }
            
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./service-worker.js')
                    .then(reg => console.log('Service Worker enregistré'))
                    .catch(err => {
                        // Ignorer silencieusement l'erreur en mode développement
                        if (window.location.protocol !== 'file:') {
                            console.log('Erreur Service Worker:', err);
                        }
                    });
            });
        }
    },
    
    // ============================================
    // UTILITAIRES
    // ============================================
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },
    
    // Convertir un fichier image en base64
    async imageToBase64(file) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve(null);
                return;
            }
            
            // Vérifier que c'est bien une image
            if (!file.type.startsWith('image/')) {
                reject(new Error('Le fichier doit être une image'));
                return;
            }
            
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsDataURL(file);
        });
    },
    
    // Calculer la taille de texte proportionnelle à la surface de l'image
    calculateTextSizeFromImage(imageElement) {
        if (!imageElement) {
            return null;
        }
        
        const getDimensions = () => {
            const width = imageElement.offsetWidth || imageElement.naturalWidth || 0;
            const height = imageElement.offsetHeight || imageElement.naturalHeight || 0;
            
            if (width === 0 || height === 0) {
                return null;
            }
            
            // Calculer la surface (largeur × hauteur) en pixels carrés
            const surface = width * height;
            
            // Formule pour calculer la taille de texte proportionnelle
            const baseSize = 16;
            const factor = Math.sqrt(surface) / 40;
            const fontSize = Math.max(12, Math.min(56, baseSize + factor));
            
            return Math.round(fontSize);
        };
        
        if (imageElement.complete && imageElement.naturalWidth > 0) {
            return getDimensions();
        }
        
        return null;
    },
    
    // Appliquer la taille de texte proportionnelle à une image et son texte associé
    applyProportionalTextSize(imageContainer, textElement) {
        if (!imageContainer || !textElement) return;
        
        const image = imageContainer.querySelector('img');
        if (!image) return;
        
        const applySize = () => {
            const fontSize = this.calculateTextSizeFromImage(image);
            if (fontSize) {
                textElement.style.fontSize = fontSize + 'px';
                textElement.style.lineHeight = '1.5';
            }
        };
        
        if (image.complete && image.naturalWidth > 0) {
            setTimeout(applySize, 10);
        } else {
            image.addEventListener('load', () => {
                setTimeout(applySize, 10);
            }, { once: true });
        }
        
        if (window.ResizeObserver) {
            const resizeObserver = new ResizeObserver(() => {
                applySize();
            });
            resizeObserver.observe(image);
        }
    },
    
    // ============================================
    // AIDE ET PREMIÈRE VISITE
    // ============================================
    
    checkFirstVisit() {
        const hasVisited = localStorage.getItem('flashcards_hasVisited');
        if (!hasVisited) {
            // Afficher le popup d'aide après un court délai pour que la page soit chargée
            setTimeout(() => {
                this.showHelpModal();
                localStorage.setItem('flashcards_hasVisited', 'true');
            }, 500);
        }
    },
    
    showHelpModal() {
        const helpPages = [
            {
                title: 'Qu\'est-ce qu\'une flashcard ?',
                icon: 'books',
                content: `
                    <p style="margin-bottom: 15px;">
                        Une <strong>flashcard</strong> (carte flash) est un outil d'apprentissage efficace basé sur la répétition espacée. 
                        C'est une carte avec une <strong>question</strong> sur le recto et la <strong>réponse</strong> sur le verso.
                    </p>
                    <div style="background: var(--surface); padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                        <p style="margin: 0; font-weight: 600; margin-bottom: 8px;">Exemple :</p>
                        <p style="margin: 0; margin-bottom: 5px;"><strong>Question :</strong> "Bonjour"</p>
                        <p style="margin: 0;"><strong>Réponse :</strong> "Hello"</p>
                    </div>
                `
            },
            {
                title: 'Comment ça fonctionne ?',
                icon: 'settings',
                content: `
                    <ol style="padding-left: 20px; margin-bottom: 15px; line-height: 1.8;">
                        <li style="margin-bottom: 12px;"><strong>Créez un deck</strong> : Organisez vos cartes par thème (ex: vocabulaire anglais, histoire, etc.)</li>
                        <li style="margin-bottom: 12px;"><strong>Ajoutez des cartes</strong> : Pour chaque carte, entrez une question et sa réponse. Vous pouvez aussi ajouter des images !</li>
                        <li style="margin-bottom: 12px;"><strong>Révisez régulièrement</strong> : L'application vous propose les cartes à réviser selon leur difficulté</li>
                        <li style="margin-bottom: 12px;"><strong>Évaluez-vous</strong> : Après avoir vu la réponse, indiquez si c'était "Encore", "Bien" ou "Facile"</li>
                    </ol>
                `
            },
            {
                title: 'Astuce',
                icon: 'help',
                content: `
                    <p style="margin-bottom: 15px; line-height: 1.8;">
                        Plus vous répondez correctement, moins la carte vous sera proposée. 
                        Les cartes difficiles apparaîtront plus souvent jusqu'à ce que vous les maîtrisiez !
                    </p>
                    <p style="margin-bottom: 0; line-height: 1.8;">
                        Vous pouvez créer des cartes avec du texte, des images, ou les deux combinés. 
                        Les images s'adaptent automatiquement à l'espace disponible.
                    </p>
                `
            }
        ];
        
        const content = `
            <div class="help-modal-container">
                <div class="help-pages-wrapper">
                    ${helpPages.map((page, index) => `
                        <div class="help-page ${index === 0 ? 'active' : ''}" data-page="${index}">
                            <h3 class="help-page-title">
                                <span class="icon-svg" style="display: inline-block; vertical-align: middle; margin-right: 8px;">${Icons.getIcon(page.icon, 24, 'var(--primary-color)')}</span>
                                ${page.title}
                            </h3>
                            <div class="help-page-content" style="line-height: 1.8;">
                                ${page.content}
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="help-navigation">
                    <button class="help-nav-btn help-nav-prev" id="help-prev-btn" aria-label="Page précédente">
                        <span class="icon-svg">${Icons.getIcon('arrowLeft', 20, 'white')}</span>
                    </button>
                    <div class="help-dots">
                        ${helpPages.map((_, index) => `
                            <span class="help-dot ${index === 0 ? 'active' : ''}" data-page="${index}"></span>
                        `).join('')}
                    </div>
                    <button class="help-nav-btn help-nav-next" id="help-next-btn" aria-label="Page suivante">
                        <span class="icon-svg">${Icons.getIcon('arrowRight', 20, 'white')}</span>
                    </button>
                </div>
            </div>
        `;
        
        this.showModal('Bienvenue ! Guide des flashcards', content);
        
        // Initialiser la navigation
        setTimeout(() => {
            let currentPage = 0;
            const totalPages = helpPages.length;
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
                
                // Mettre à jour les points
                dots.forEach((dot, index) => {
                    if (index === pageIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
                
                // Mettre à jour les boutons de navigation
                if (prevBtn) {
                    prevBtn.style.opacity = pageIndex === 0 ? '0.3' : '1';
                    prevBtn.style.cursor = pageIndex === 0 ? 'not-allowed' : 'pointer';
                }
                if (nextBtn) {
                    nextBtn.style.opacity = pageIndex === totalPages - 1 ? '0.3' : '1';
                    nextBtn.style.cursor = pageIndex === totalPages - 1 ? 'not-allowed' : 'pointer';
                }
            };
            
            // Navigation avec les boutons
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
            
            // Navigation avec les points
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentPage = index;
                    updatePage(currentPage);
                });
            });
            
            // Initialiser l'état
            updatePage(0);
        }, 10);
    }
};

// Initialiser l'application au chargement
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
