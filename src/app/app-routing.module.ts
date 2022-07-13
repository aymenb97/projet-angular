import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { CommandesComponent } from './commandes/commandes.component';
import { GererProduitComponent } from './gerer-produit/gerer-produit.component';
import { HomeComponent } from "./home/home.component";
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { PanierComponent } from './panier/panier.component';
import { ProduitsComponent } from './produits/produits.component';
const routes: Routes = [
  {
    path: 'client', component: HomeComponent,
    children: [{
      path: 'produits', component: ProduitsComponent
    },
    {
      path: 'panier', component: PanierComponent
    }, {
      path: 'commandes', component: CommandesComponent
    }]

  },
  {
    path: 'admin', component: AdminComponent,
    children: [{
      path: 'gerer-produits', component: GererProduitComponent
    },
    {
      path: 'ajouter-produit', component: AjouterProduitComponent
    },
    { path: 'modifier-produit/:id', component: ModifierProduitComponent }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
