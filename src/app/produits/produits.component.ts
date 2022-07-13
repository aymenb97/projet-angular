import { Component, OnInit } from '@angular/core';
import { ProduitService } from "../produit.service";
import { Produit } from "../models/produit"
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {

  listProduits: Produit[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.listProduits = this.produitService.getProduits();
  }

}
