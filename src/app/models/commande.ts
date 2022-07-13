import { Produit } from "./produit"
export class Commande {

    constructor(
        public id: string,
        public date: string,
        public produits: Produit[],
    ) {

    }
}
