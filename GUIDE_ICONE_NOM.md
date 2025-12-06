# Guide : Personnaliser l'icône et le nom de l'application

## 📱 Pour iPhone (iOS)

### 1. Créer votre icône personnalisée

**Taille requise :**
- **180x180 pixels** (pour iPhone)
- Format : PNG avec fond transparent ou couleur unie
- Recommandé : format carré

**Comment créer l'icône :**
1. Utilisez un outil de design (Figma, Canva, Photoshop, etc.)
2. Créez une image carrée de 180x180 pixels
3. Ajoutez votre logo/design
4. Exportez en PNG

**Ou utilisez un générateur en ligne :**
- [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### 2. Nommer et placer l'icône

1. Nommez votre fichier : `icon-192.png` (192x192 pixels)
2. Placez-le dans le dossier racine du projet (même dossier que `index.html`)
3. Créez aussi une version 512x512 : `icon-512.png` (pour Android)

### 3. Changer le nom de l'application

Le nom apparaît sous l'icône sur l'écran d'accueil.

**Pour iPhone :**
- Le nom est défini dans `index.html` ligne 8 : `<meta name="apple-mobile-web-app-title" content="VotreNom">`
- Changez "VotreNom" par le nom que vous voulez (max 12 caractères recommandé)

**Pour Android :**
- Le nom est défini dans `manifest.json` ligne 2 : `"name": "Votre Nom Complet"`
- Et ligne 3 : `"short_name": "Court"` (nom court, max 12 caractères)

## 📱 Pour Android

### 1. Créer les icônes

**Tailles requises :**
- **192x192 pixels** (minimum)
- **512x512 pixels** (recommandé)
- Format : PNG

### 2. Placer les icônes

1. Placez `icon-192.png` dans le dossier racine
2. Placez `icon-512.png` dans le dossier racine

### 3. Changer le nom

Modifiez `manifest.json` :
- `"name"` : nom complet de l'application
- `"short_name"` : nom court (affiché sous l'icône)

## 🎨 Exemple de personnalisation

### Fichier `manifest.json` :
```json
{
  "name": "Mes Cartes Flash",
  "short_name": "Cartes",
  ...
}
```

### Fichier `index.html` :
```html
<meta name="apple-mobile-web-app-title" content="Mes Cartes">
<title>Mes Cartes Flash</title>
```

## ✅ Vérification

1. **Sur iPhone :**
   - Ouvrez l'application dans Safari
   - Appuyez sur le bouton de partage
   - Sélectionnez "Sur l'écran d'accueil"
   - Vérifiez que votre icône et votre nom apparaissent

2. **Sur Android :**
   - Ouvrez l'application dans Chrome
   - Menu → "Ajouter à l'écran d'accueil"
   - Vérifiez que votre icône et votre nom apparaissent

## 💡 Conseils

- **Nom court** : Utilisez un nom court (max 12 caractères) pour éviter qu'il soit tronqué
- **Icône simple** : Une icône simple et reconnaissable fonctionne mieux
- **Couleurs contrastées** : Assurez-vous que l'icône se voit bien sur différents fonds
- **Format PNG** : Utilisez PNG avec transparence ou fond unie

## 🔄 Après modification

1. Remplacez les fichiers `icon-192.png` et `icon-512.png`
2. Modifiez `manifest.json` et `index.html` avec vos noms
3. Rechargez l'application dans le navigateur
4. Réinstallez l'application sur l'écran d'accueil pour voir les changements

