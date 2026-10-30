# 🦊 Wildlife Observation App

Application **full-stack** de suivi d'observations de faune sauvage : chaque utilisateur peut recenser des **animaux**, enregistrer ses **observations** géolocalisées sur le terrain et consulter leur **statut de conservation IUCN**.

Backend **API REST Symfony** (API Platform + authentification **JWT**) · Frontend **Angular**.

> Projet réalisé dans le cadre du Master Informatique — Université d'Orléans.

---

## ✨ Fonctionnalités

- 🔐 **Authentification JWT** — inscription, connexion, accès sécurisé à l'API
- 🦌 **Gestion des animaux** — création, consultation, modification, suppression (CRUD)
- 🔭 **Gestion des observations** — géolocalisées (GPS), rattachées à un animal et à un utilisateur
- 🌍 **Statut de conservation IUCN** — classification de l'état de menace des espèces
- 🔗 **API REST** exposée via **API Platform** et consommée par un front **Angular** découplé

---

## 🏗️ Architecture

```
wildlife-observation-app/
├── backend/        # API REST — Symfony + API Platform
│   ├── src/
│   │   ├── Entity/        # Animal, Observation, User
│   │   ├── Enum/          # Iucn (statut de conservation)
│   │   ├── Controller/    # Authentification JWT
│   │   ├── Repository/    # Accès aux données (Doctrine)
│   │   └── DataFixtures/  # Jeux de données de démonstration
│   ├── config/
│   └── migrations/        # Migrations de base de données
│
└── frontend/       # Interface — Angular
    └── src/app/
        ├── animal/        # Liste / détail / formulaire
        ├── observation/   # Liste / détail / formulaire
        ├── auth/          # Login / register
        └── services/      # Appels à l'API REST
```

---

## 🗃️ Modèle de données — Observation

| Propriété | Type | Description |
|-----------|------|-------------|
| `id` | int | Identifiant de l'observation |
| `dateHeure` | datetime | Date et heure de l'observation |
| `latitude` | float | Latitude GPS du lieu d'observation |
| `longitude` | float | Longitude GPS du lieu d'observation |
| `description` | text | Description textuelle de l'observation |
| `animalId` | int | Clé étrangère vers `Animal` (relation **ManyToOne**) |

> Les coordonnées GPS sont découpées en deux champs `latitude` / `longitude`.
> La relation `ManyToOne` garantit **un seul animal par observation**.

---

## 🛠️ Stack technique

| Côté | Technologies |
|------|--------------|
| **Backend** | PHP, Symfony, API Platform, Doctrine ORM, LexikJWTAuthenticationBundle |
| **Frontend** | Angular, TypeScript, Angular Material, SCSS |
| **Base de données** | PostgreSQL |
| **Auth** | JSON Web Tokens (JWT) |
| **Outils** | Docker, Composer, npm |

---

## 🚀 Installation & lancement

### Prérequis
PHP 8.2+, Composer, Node.js + npm, Docker, Symfony CLI.

### 1. Backend (Symfony)

```bash
cd backend
composer install

# Lancer la base PostgreSQL
docker compose up -d

# Configurer les secrets (voir section ci-dessous), puis :
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load   # données de démo

symfony server:start
```

### 2. Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

Application : `http://localhost:4200` · API : `http://localhost:8000`.

---

## 🔑 Configuration des secrets

Par sécurité, **aucun secret réel n'est versionné** dans ce dépôt. Avant de lancer le projet, renseigne tes propres valeurs.

### 1. `backend/.env` (ou mieux : `backend/.env.local`)

```dotenv
APP_SECRET=ta_cle_secrete        # génère une chaîne aléatoire
DATABASE_URL="postgresql://app:motdepasse@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
JWT_PASSPHRASE=ta_passphrase     # choisie librement
```

### 2. Générer les clés JWT

Les clés privée/publique **ne sont pas** dans le dépôt (ignorées par Git). Génère-les localement :

```bash
php bin/console lexik:jwt:generate-keypair
```

> La passphrase demandée doit être la même que `JWT_PASSPHRASE`.

---

## 🧭 Démarche de développement

Le projet a été construit par étapes :

1. **Modélisation** des entités `Animal` et `Observation` (propriétés, relation ManyToOne)
2. **Base de données** : création, migrations Doctrine
3. **Fixtures** de démonstration (Faker)
4. **Front Angular** : services d'accès à l'API (`animal`, `observation`)
5. **Composants** animaux : liste / détail / formulaire
6. **Composants** observations : liste / détail / formulaire
7. **Navigation** et UI avec Angular Material
8. **Authentification** : entité `User`, API d'auth JWT côté Symfony, pages login / register côté Angular

---

## 👥 Auteurs

Projet de groupe — Master Informatique, Université d'Orléans :

- **Gahlas Aicha** — [github.com/GahlasAicha](https://github.com/GahlasAicha)
- **Seffar Nordine**
- **Aissat Fatima**
- **Mimoun Ali**
