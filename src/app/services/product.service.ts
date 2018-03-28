import { Injectable } from '@angular/core';
import { Produit } from '../domain/produit';

@Injectable()
export class ProductService {

  constructor() { }
  getAllProduct(): Produit[] {
    return [
      {code: 'Fropm service-P100', nom: 'café' , prixUnitaire: 1200},
      {code: 'P200', nom: 'thé' , prixUnitaire: 1300},
      {code: 'P300', nom: 'jus' , prixUnitaire: 1400}

    ];
  }

}
