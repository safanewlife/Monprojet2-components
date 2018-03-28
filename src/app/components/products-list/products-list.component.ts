import { Component, OnInit } from '@angular/core';
import { Produit } from '../../domain/produit';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  private data: Produit[];
  constructor(private _service : ProductService) { //ingect the service
  }

  ngOnInit() {
    this.data = this._service.getAllProduct();
  }

}
