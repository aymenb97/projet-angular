import { Produit } from "./produit"
export class Commande {

    constructor(
        public id: string,
        public date: Date,
        public total: Number,
        public produits: string[],
    ) {

    }

}
