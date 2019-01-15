import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, EventEmitter } from '@angular/core';
import { ProductRow } from 'components/ProductRow';
import { Product } from 'components/Product';

@Component({
  selector: 'product-list',
  directives: [ProductRow],
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
	  <product-row *ngFor="let productRow of productList" [product]="productRow" (click)='clicked(productRow)' [class.selected]="isSelected(myProduct)">
	  </product-row>
  `
})

export class ProductList {
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;

  constructor () {
  	this.onProductSelected = new EventEmitter<Product>(false);
  }

  clicked (product: Product) {
  	this.currentProduct = product;
  	this.onProductSelected.emit(product);
  }

  isSelected (product: Product): boolean {

  	if (!product || !this.currentProduct) {
  		return false;
  	}
  	return product.sku === this.currentProduct.sku;
  }
}