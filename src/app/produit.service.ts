import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produit } from "./models/produit"
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  listeProduits: Produit[] = []
  produitsChange: Subject<Produit[]> = new Subject<Produit[]>;
  constructor() {
    this.listeProduits = [
      new Produit("fSshW", "Chaussure", "Chaussures XYZ", 50.7),
      new Produit("oC7Qc", "Smartphone", "Smartphone Samsung", 450),
      new Produit("SzI60", "PC Portable", "PC Portable Asus", 1000.7),
    ]
  }

  getProduits(): Produit[] {

    return this.listeProduits;
  }
  addProduit(p: Produit) {
    this.listeProduits.push(new Produit(this.randomId(5), p.titre, p.description, p.prix))
    this.produitsChange.next(this.listeProduits)
  }
  modifierProduit(p: Produit, id: string) {
    let produit = this.listeProduits.find(x => x.id == id);
    produit = p;
  }
  supprimerProduit(id: String) {
    this.listeProduits.splice(this.listeProduits.findIndex(el => el.id === id), 1);
    this.produitsChange.next(this.listeProduits)
    console.log(this.listeProduits);
  }
  randomId(length: Number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    return result;
  }
}
