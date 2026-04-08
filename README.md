# Chair Shop - Boutique Shopify Complète

Une boutique moderne de meubles inspirée de Shopify, construite avec Next.js 16 et Tailwind CSS.

## 🪑 Fonctionnalités

### ✅ Pages Implémentées
- **Page d'accueil** - Hero section, produits vedettes, slider de collections
- **Collections** - Pages dynamiques pour chaque collection avec filtres
- **Tous les produits** - Grille/Liste avec filtres avancés et recherche
- **Détail produit** - Galerie d'images, variantes, quantité, ajout au panier
- **Panier** - Gestion complète avec mise à jour des quantités
- **Checkout** - Processus en 3 étapes (contact, livraison, paiement)

### 🛒 Fonctionnalités E-commerce
- **Panier fonctionnel** - Ajout, suppression, mise à jour des quantités
- **Gestion des variantes** - Couleurs, matériaux, tailles
- **Calcul automatique** - Sous-total, taxe, frais de port
- **Filtres produits** - Prix, collections, matériaux, couleurs
- **Recherche** - Recherche en temps réel des produits
- **Tri** - Par prix, nom, nouveautés, vedettes

### 🎨 Design & UX
- **Design cohérent** - Inspiré du thème Shopify fourni
- **Responsive** - Mobile-first design
- **Animations** - Hover effects, transitions fluides
- **Slider Swiper** - Pour les collections
- **Color palette** - Palette de couleurs chaleureuse et luxueuse

## 🚀 Démarrage

### Prérequis
- Node.js 18+
- pnpm

### Installation
```bash
pnpm install
```

### Démarrage du développement
```bash
pnpm dev
```

### Build pour production
```bash
pnpm build
```

## 📁 Structure du Projet

```
chair-shop/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── products/          # Pages produits
│   ├── collections/       # Pages collections
│   ├── cart/              # Page panier
│   ├── checkout/          # Page checkout
│   ├── layout.tsx         # Layout racine
│   └── globals.css        # Styles globaux
├── components/             # Composants React
│   ├── Header.tsx         # Navigation
│   ├── Footer.tsx         # Pied de page
│   ├── ProductCard.tsx    # Carte produit
│   ├── ProductDetail.tsx  # Détail produit
│   ├── ProductFilters.tsx # Filtres produits
│   ├── CollectionSlider.tsx # Slider collections
│   └── CartDrawer.tsx     # Panier latéral
├── contexts/              # Contextes React
│   └── CartContext.tsx    # État du panier
├── lib/                   # Utilitaires
│   ├── types.ts          # Types TypeScript
│   ├── data.ts           # Données fictives
│   └── utils.ts          # Fonctions utilitaires
└── public/                # Assets statiques
```

## 🛠️ Technologies

- **Next.js 16** - Framework React
- **TypeScript** - Typage strict
- **Tailwind CSS 4** - Styling utility-first
- **Lucide React** - Icônes
- **Swiper.js** - Carrousel
- **React Context** - Gestion d'état

## 📊 Données

### Produits
- 8 produits fictifs réalistes
- Variantes (couleurs, matériaux)
- Prix avec promotions
- Images multiples
- Informations détaillées

### Collections
- Minimalist
- Mid-Century  
- Luxe Velvet
- Outdoor
- Artisan Woven

## 🎯 Routes Disponibles

- `/` - Page d'accueil
- `/products` - Tous les produits
- `/products/[id]` - Détail produit
- `/collections` - Liste des collections
- `/collections/[handle]` - Page collection
- `/cart` - Panier
- `/checkout` - Processus de commande

## 💡 Notes de Développement

### État du Panier
Utilisation de React Context pour la gestion d'état du panier avec:
- Ajout/suppression de produits
- Mise à jour des quantités
- Calcul automatique des totaux
- Persistance (à implémenter avec localStorage)

### Filtres Avancés
Système de filtrage complet:
- Plage de prix (slider)
- Collections multiples
- Matériaux
- Couleurs
- Stock disponible
- Tri par pertinence, prix, nom

### Design System
Palette de couleurs cohérente:
- `#FEFCF5` - Fond principal
- `#2C241A` - Texte principal
- `#9C7B5C` - Accent primaire
- `#8B6946` - Accent secondaire
- `#5A4A3A` - Texte secondaire

## 🔄 Prochaines Améliorations

- [ ] Persistance du panier avec localStorage
- [ ] Intégration Stripe pour le paiement
- [ ] Page de confirmation de commande
- [ ] Système de favoris/wishlist
- [ ] Avis sur les produits
- [ ] Recommandations de produits
- [ ] Gestion des stocks en temps réel

## 📝 Conclusion

Cette boutique Shopify complète démontre:
- Architecture Next.js moderne
- Gestion d'état avec Context
- Design responsive et accessible
- Fonctionnalités e-commerce complètes
- Code maintenable et scalable

Le projet est prêt pour être déployé et peut être facilement étendu avec des fonctionnalités additionnelles.
