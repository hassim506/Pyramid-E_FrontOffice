# Composant Explorer - Documentation Complète

## 📋 Vue d'ensemble

Le composant **Explorer** permet aux employés de découvrir et demander des **formations**, **catalogues** et **parcours** disponibles dans leur entreprise, avec des **filtres avancés** et une interface inspirée de plateformes d'e-learning modernes.

---

## 🎯 Fonctionnalités

### ✅ Affichage multi-onglets
- **Formations** : Liste toutes les formations disponibles
- **Catalogues** : Collections de formations thématiques
- **Parcours** : Parcours de formation structurés

### ✅ Filtres avancés
- **Recherche textuelle** : Par titre et description
- **Catégorie** : Filtrer par catégorie de formation
- **Niveau** : Débutant, Intermédiaire, Avancé, Expert (pour formations)
- **Prix** : Gratuit, Payant, Tous (pour formations)
- **Reset** : Réinitialiser tous les filtres

### ✅ Cartes interactives
- **Image de couverture** avec effet hover
- **Badges** : Inscrit, Gratuit, Catégorie, Niveau
- **Statistiques** : Durée, Note, Nombre d'étudiants
- **Formateur** : Avatar et nom (pour formations)
- **Actions** : Voir détails + Demander (si pas déjà inscrit)

### ✅ Isolation par entreprise
- Seules les formations/catalogues/parcours de l'entreprise de l'employé sont affichés
- Filtrage automatique côté backend

---

## 📁 Structure des fichiers

```
src/app/features/student/explorer/
├── explorer.component.ts        # Logique TypeScript
├── explorer.component.html      # Template HTML
├── explorer.component.scss      # Styles SCSS
└── explorer.component.spec.ts   # Tests unitaires
```

---

## 🔧 Composant TypeScript

### Interfaces

```typescript
interface Formation {
  id: number;
  titre: string;
  description: string;
  image_couverture: string;
  niveau: string;
  duree_totale: number;
  categorie_formation?: any;
  formateur?: any;
  est_gratuite: boolean;
  prix?: number;
  note_moyenne?: number;
  nombre_etudiants?: number;
  est_inscrit?: boolean;
}

interface Catalogue {
  id: number;
  nom: string;
  description: string;
  image_couverture: string;
  formations_count: number;
  est_assigne?: boolean;
}

interface Parcours {
  id: number;
  nom: string;
  description: string;
  image_couverture: string;
  duree_totale: number;
  formations_count: number;
  categorie?: any;
  est_assigne?: boolean;
}
```

### Services utilisés

```typescript
import { FormationService } from '../../../shared/service/formation/formation.service';
import { CategorieService } from '../../../shared/service/categorie/categorie-service.service';
import { Router } from '@angular/router';
```

### Méthodes principales

#### Chargement des données

```typescript
loadFormations(): void {
  this.formationService.getFormations({ page: 1, limit: 100 }).subscribe({
    next: (response: any) => {
      this.formations = response.formations || response.data || [];
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Impossible de charger les formations';
      this.loading = false;
    }
  });
}

loadCatalogues(): void {
  this.formationService.getCataloguesForEmploye().subscribe({
    // ...
  });
}

loadParcours(): void {
  this.formationService.getParcoursDisponibles().subscribe({
    // ...
  });
}
```

#### Filtrage

```typescript
get filteredFormations(): Formation[] {
  return this.applyFilters(this.formations);
}

applyFilters(items: Formation[]): Formation[] {
  let result = items;

  // Recherche textuelle
  if (this.searchTerm) {
    const search = this.searchTerm.toLowerCase();
    result = result.filter(item =>
      item.titre.toLowerCase().includes(search) ||
      item.description?.toLowerCase().includes(search)
    );
  }

  // Filtre catégorie
  if (this.selectedCategory) {
    result = result.filter(item => 
      item.categorie_formation?.id === this.selectedCategory
    );
  }

  // Filtre niveau
  if (this.selectedNiveau) {
    result = result.filter(item => 
      item.niveau?.toLowerCase() === this.selectedNiveau.toLowerCase()
    );
  }

  // Filtre prix
  if (this.selectedPrix === 'gratuit') {
    result = result.filter(item => 
      item.est_gratuite || !item.prix || item.prix === 0
    );
  } else if (this.selectedPrix === 'payant') {
    result = result.filter(item => 
      !item.est_gratuite && item.prix && item.prix > 0
    );
  }

  return result;
}
```

#### Actions de demande

```typescript
demanderFormation(formationId: number): void {
  // Redirection vers la page de demande avec l'ID en paramètre
  this.router.navigate(['/student/student-demande'], {
    queryParams: { formationId: formationId }
  });
}

demanderCatalogue(catalogueId: number): void {
  this.router.navigate(['/student/students-catalogue'], {
    queryParams: { catalogueId: catalogueId }
  });
}

demanderParcours(parcoursId: number): void {
  this.router.navigate(['/student/mes-parcours'], {
    queryParams: { parcoursId: parcoursId }
  });
}
```

---

## 🎨 Template HTML

### Structure

```html
<!-- Header -->
<div class="ph">
  <div class="ph-icon"><i class="isax isax-search-normal-1"></i></div>
  <div class="ph-info">
    <div class="ph-title">Explorer les Formations</div>
    <div class="ph-sub">Découvrez formations, catalogues et parcours...</div>
  </div>
</div>

<!-- Tabs Navigation -->
<div class="tab-bar">
  <div class="tab" [class.active]="activeTab === 'formations'" 
       (click)="changeTab('formations')">
    <i class="isax isax-book-1"></i> Formations
  </div>
  <!-- ... -->
</div>

<!-- Filters Bar -->
<div class="filters-bar">
  <div class="search-box">
    <input [(ngModel)]="searchTerm" placeholder="Rechercher...">
  </div>
  <select [(ngModel)]="selectedCategory"><!-- ... --></select>
  <!-- ... -->
</div>

<!-- Content (Formations/Catalogues/Parcours) -->
<div class="course-grid">
  <div class="course-card" *ngFor="let formation of filteredFormations">
    <!-- Card content -->
  </div>
</div>
```

### Card Formation

```html
<div class="course-card">
  <!-- Image -->
  <div class="course-image">
    <img [src]="getImageUrl(formation.image_couverture)">
    <div class="course-badge" *ngIf="formation.est_inscrit">
      <i class="isax isax-tick-circle"></i> Inscrit
    </div>
  </div>

  <!-- Content -->
  <div class="course-content">
    <!-- Badges -->
    <div class="course-meta">
      <span class="category-badge">{{ formation.categorie_formation.nom }}</span>
      <span class="niveau-badge">{{ formation.niveau }}</span>
    </div>

    <!-- Titre -->
    <h3 class="course-title">{{ formation.titre }}</h3>

    <!-- Description -->
    <p class="course-description">{{ formation.description | slice:0:120 }}...</p>

    <!-- Stats -->
    <div class="course-stats">
      <div class="stat">
        <i class="isax isax-clock"></i>
        <span>{{ formation.duree_totale }}h</span>
      </div>
      <!-- ... -->
    </div>

    <!-- Actions -->
    <div class="course-actions">
      <a [routerLink]="['/student/formation', formation.id]" class="btn-view">
        <i class="isax isax-eye"></i> Voir détails
      </a>
      <button *ngIf="!formation.est_inscrit" 
              class="btn-demand"
              (click)="demanderFormation(formation.id)">
        <i class="isax isax-add-circle"></i> Demander
      </button>
    </div>
  </div>
</div>
```

---

## 🎨 Styles SCSS

### Couleurs principales

```scss
$primary: #059669;      // Vert principal
$primary-hover: #047857;
$success: #16a34a;
$danger: #ef4444;
$warning: #d97706;
$info: #2563eb;

$text-primary: #1e293b;
$text-secondary: #64748b;
$border: #e2e8f0;
$background: #f8fafc;
```

### Classes principales

```scss
.filters-bar { /* Barre de filtres */ }
.search-box { /* Champ de recherche */ }
.filter-group { /* Groupe de filtres */ }
.course-grid { /* Grille responsive */ }
.course-card { /* Carte de formation/catalogue/parcours */ }
.course-image { /* Image avec hover effect */ }
.course-content { /* Contenu de la carte */ }
.course-badge { /* Badge (Inscrit, Gratuit) */ }
.btn-demand { /* Bouton "Demander" */ }
.enrolled-tag { /* Tag "Déjà inscrit" */ }
```

### Responsive

```scss
@media (max-width: 768px) {
  .course-grid {
    grid-template-columns: 1fr; // Une colonne
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .course-grid {
    grid-template-columns: repeat(2, 1fr); // Deux colonnes
  }
}

// Desktop : 3+ colonnes (auto-fill minmax(320px, 1fr))
```

---

## 🔗 Routes et Navigation

### Route du composant

```typescript
{
  path: 'explorer',
  component: ExplorerComponent
}
```

**URL** : `http://localhost:4200/student/explorer`

### Redirections vers les pages de demande

| Action | Route | Paramètre |
|--------|-------|-----------|
| **Demander Formation** | `/student/student-demande` | `?formationId=X` |
| **Demander Catalogue** | `/student/students-catalogue` | `?catalogueId=X` |
| **Demander Parcours** | `/student/mes-parcours` | `?parcoursId=X` |

### Liens de détails

| Type | Route |
|------|-------|
| **Formation** | `/student/formation/:id` |
| **Catalogue** | `/student/catalogue/:id` |
| **Parcours** | `/student/parcours/:id` |

---

## 📊 Endpoints API utilisés

### Formations

```typescript
GET /api/formations?page=1&limit=100
// Response: { formations: Formation[] }
```

### Catalogues

```typescript
GET /api/demandes-formation/listes/catalogues
// Response: { catalogues: Catalogue[] }
```

### Parcours

```typescript
GET /api/demandes-formation/listes/parcours
// Response: { parcours: Parcours[] }
```

### Catégories

```typescript
GET /api/categories-formation?est_active=true&est_visible=true
// Response: { data: { categories: CategorieFormation[] } }
```

**Note** : Tous ces endpoints filtrent automatiquement par `entreprise_id` de l'utilisateur connecté côté backend.

---

## 🧪 Tests et vérification

### 1. Test d'affichage

```bash
# Aller sur http://localhost:4200/student/explorer
# Vérifier que les 3 onglets s'affichent
# Vérifier que les formations de l'entreprise s'affichent
```

### 2. Test de filtrage

```bash
# Taper dans la recherche : "Angular"
# Sélectionner une catégorie
# Sélectionner un niveau
# Sélectionner "Gratuit"
# Vérifier que les résultats se filtrent en temps réel
```

### 3. Test de demande

```bash
# Cliquer sur "Demander" pour une formation
# Vérifier la redirection vers /student/student-demande?formationId=X
# Répéter pour catalogue et parcours
```

### 4. Test responsive

```bash
# Redimensionner la fenêtre
# Vérifier que la grille passe à 2 colonnes (tablette)
# Vérifier que la grille passe à 1 colonne (mobile)
# Vérifier que les filtres passent en colonne (mobile)
```

---

## 🚀 Améliorations futures possibles

### Fonctionnalités

- [ ] **Pagination** : Charger les données par pages
- [ ] **Tri** : Trier par popularité, date, note
- [ ] **Favoris** : Marquer des formations comme favorites
- [ ] **Comparaison** : Comparer plusieurs formations
- [ ] **Partage** : Partager un lien vers une formation
- [ ] **Historique** : Voir les formations récemment consultées
- [ ] **Recommandations** : Formations recommandées basées sur le profil

### Performance

- [ ] **Lazy loading** : Charger les images progressivement
- [ ] **Skeleton loading** : Afficher des placeholders pendant le chargement
- [ ] **Cache** : Mettre en cache les résultats de recherche
- [ ] **Infinite scroll** : Charger plus de résultats au scroll

### UX

- [ ] **Animations** : Ajouter des transitions fluides
- [ ] **Preview** : Afficher un aperçu au hover
- [ ] **Quick actions** : Menu contextuel sur les cartes
- [ ] **Tooltips** : Informations au survol des badges

---

## 📝 Checklist de déploiement

### Code

- [x] Composant TypeScript complété
- [x] Template HTML créé
- [x] Styles SCSS ajoutés
- [x] Imports corrects (CommonModule, FormsModule, RouterLink)
- [x] Services injectés (FormationService, CategorieService, Router)

### Fonctionnalités

- [x] Onglets (Formations, Catalogues, Parcours)
- [x] Barre de filtres (Recherche, Catégorie, Niveau, Prix)
- [x] Affichage des cartes
- [x] Actions (Voir détails, Demander)
- [x] États (Loading, Error, Empty)

### Backend

- [x] Filtrage automatique par entreprise
- [x] Endpoints API fonctionnels
- [x] Routes de demande existantes

### Navigation

- [x] Route `/student/explorer` configurée
- [x] Redirections vers pages de demande
- [x] Liens vers pages de détails

---

## ✅ Statut

**PRÊT POUR UTILISATION** 🎉

Le composant Explorer est complet et fonctionnel. Il affiche les formations, catalogues et parcours de l'entreprise de l'employé avec des filtres avancés et permet de faire des demandes via les pages dédiées existantes.

---

## 🔗 Liens utiles

- [FormationService](../../../shared/service/formation/formation.service.ts)
- [CategorieService](../../../shared/service/categorie/categorie-service.service.ts)
- [Page Demande Formation](../student-demande/)
- [Page Demande Catalogue](../students-catalogue/)
- [Page Mes Parcours](../mes-parcours/)
