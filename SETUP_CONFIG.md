# Configuration des secrets Firebase

## ⚠️ Important - Sécurité

Les fichiers `config.js` et `config-sw.js` contiennent vos clés API Firebase et sont **exclus du repository** pour la sécurité.

## 📋 Étapes de configuration

### 1. Créer les fichiers de configuration

Si vous clonez ce repository, vous devez créer les fichiers de configuration :

```bash
# Copier les fichiers d'exemple
cp config.example.js config.js
cp config-sw.example.js config-sw.js
```

### 2. Remplir les valeurs

Ouvrez `config.js` et `config-sw.js` et remplacez :

- `VOTRE_API_KEY_ICI` → Votre clé API Firebase
- `VOTRE_CLE_VAPID_ICI` → Votre clé VAPID Firebase

### 3. Où trouver ces valeurs ?

1. Allez sur [Firebase Console](https://console.firebase.google.com)
2. Sélectionnez votre projet
3. Allez dans **Project Settings** (⚙️) > **General**
4. Dans la section **"Your apps"**, trouvez votre application Web
5. Copiez les valeurs de `apiKey` et `appId`
6. Pour la clé VAPID : **Build** > **Cloud Messaging** > **Web Push Certificates**

## ✅ Vérification

Une fois configuré :

1. Ouvrez votre application dans le navigateur
2. Ouvrez la console (F12)
3. Vous ne devriez **PAS** voir d'erreurs concernant `firebaseConfig` ou `FCM_VAPID_KEY`
4. Si vous voyez des erreurs, vérifiez que `config.js` et `config-sw.js` existent et contiennent les bonnes valeurs

## 🔒 Sécurité

- ✅ `config.js` et `config-sw.js` sont dans `.gitignore` → **NE SERONT PAS COMMITTÉS**
- ✅ `config.example.js` et `config-sw.example.js` sont dans le repo → **SANS SECRETS**
- ⚠️ **NE COMMITTEZ JAMAIS** `config.js` ou `config-sw.js` dans Git

## 📝 Fichiers

- `config.example.js` → Template pour la configuration principale (dans le repo)
- `config-sw.example.js` → Template pour la configuration service worker (dans le repo)
- `config.js` → Configuration réelle avec secrets (exclu du repo)
- `config-sw.js` → Configuration service worker réelle avec secrets (exclu du repo)
