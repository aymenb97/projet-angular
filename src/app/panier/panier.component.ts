import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service';
import { Produit } from "../models/produit";
import { Router } from '@angular/router';
import { CommandeService } from '../commande.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier: Produit[] = []
  constructor(private panierService: PanierService, private commandeService: CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.panier = this.panierService.getPanier();
  }
  supprimerProduit(id: String) {
    this.panierService.supprimerProduit(id);
  }
  creerCommande() {
    this.commandeService.createCommande(this.panier);
    this.router.navigate(["client", "commandes"]);
  }

}
