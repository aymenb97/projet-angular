import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produit } from "./models/produit";
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: Produit[] = [];
  panierChange: Subject<Produit[]> = new Subject<Produit[]>;
  constructor() { }
  addProduit(produit: Produit) {
    this.panier.push(produit)
  }
  getPanier() {
    return this.panier;
  }
  supprimerProduit(id: String) {
    this.panier.splice(this.panier.findIndex(el => el.id === id), 1);
    this.panierChange.next(this.panier)
    console.log(this.panier);
  }
}
