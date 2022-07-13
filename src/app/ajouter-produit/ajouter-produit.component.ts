import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from "../models/produit"
import {
  ProduitService
} from '../produit.service';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss']
})
export class AjouterProduitComponent implements OnInit {

  constructor(private router: Router, private produitService: ProduitService) {

  }

  ngOnInit(): void {
  }
  addProduitHandler(produit: Produit) {
    console.log(produit);
    this.produitService.addProduit(produit)
    this.router.navigate(["admin", "gerer-produits"])
  }
}
