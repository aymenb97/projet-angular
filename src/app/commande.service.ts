import { Injectable } from '@angular/core';
import { Commande } from "./models/commande";
import { Produit } from "./models/produit";
@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandes: Commande[] = [];
  constructor() { }
  createCommande(p: Produit[]) {
    this.commandes.push(new Commande(this.randomId(5), new Date(), p.reduce(
      (x, y) => x + y.prix,
      0
    ), p.map(x => x.titre)));
  }
  getCommandes() {
    return this.commandes;
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
