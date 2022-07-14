import { Component, OnInit } from '@angular/core';
import { ProduitService } from "../produit.service";
import { Produit } from "../models/produit"
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  listProduits: Produit[] = [];

  constructor(private produitService: ProduitService, private panierService: PanierService) { }

  ngOnInit(): void {
    this.listProduits = this.produitService.getProduits();
  }
  addToCart(p: Produit) {
    this.panierService.addProduit(p);
    alert("Produit Ajouter avec success")
  }

}
