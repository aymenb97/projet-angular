import { Component, OnInit } from '@angular/core';
import { ProduitService } from "../produit.service";
import { Router } from '@angular/router';
import { Produit } from "../models/produit";
@Component({
  selector: 'app-gerer-produit',
  templateUrl: './gerer-produit.component.html',
  styleUrls: ['./gerer-produit.component.scss']
})
export class GererProduitComponent implements OnInit {
  listProduits: Produit[] = [];
  constructor(private produitService: ProduitService, private router: Router) {
    produitService.produitsChange.subscribe((produits) => {
      this.listProduits = produits;
    })
  }

  ngOnInit(): void {
    this.listProduits = this.produitService.getProduits();

  }
  deleteProduit(id: String) {
    if (confirm("Supprimer Produit?")) {
      this.produitService.supprimerProduit(id)
    } else {
      return
    }


  }
  modifierProduit(id: String) {
    this.router.navigate(["admin", "modifier-produit", id])
  }

}
