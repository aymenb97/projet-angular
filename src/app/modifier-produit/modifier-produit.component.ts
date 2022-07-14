import { Component, OnInit } from '@angular/core';
import { Produit } from "../models/produit";
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from "../produit.service";
@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',

  styleUrls: ['./modifier-produit.component.scss']
})
export class ModifierProduitComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private produitService: ProduitService) { }
  produit: any;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.produit = this.produitService.getProduits().find((x) => {
      return x.id === id;
    })
    console.log(this.produit)
  }
  modifierProduitHandler(values: Produit) {
    this.produitService.modifierProduit(values, values.id);
    this.router.navigate(["admin", "gerer-produits"]);
  }
}
