import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProduitsComponent } from './produits/produits.component';
import { PanierComponent } from './panier/panier.component';
import { AdminComponent } from './admin/admin.component';
import { GererProduitComponent } from './gerer-produit/gerer-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { CommandesComponent } from './commandes/commandes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    PanierComponent,
    AdminComponent,
    GererProduitComponent,
    AjouterProduitComponent,
    ModifierProduitComponent,
    CommandesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
