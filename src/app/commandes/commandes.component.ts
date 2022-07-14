import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from "../models/commande"
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
  commandes: Commande[] = []
  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandes = this.commandeService.getCommandes();
  }

}
