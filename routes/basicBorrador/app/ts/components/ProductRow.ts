import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, EventEmitter } from '@angular/core';
import { Product } from 'components/Product';
import { ProductDepartment } from 'components/ProductDepartment';

@Component({
  selector: 'product-row',
  directives: [ProductDepartment],
  inputs: ['product'],
  host: {'class': 'item'},
  template: `
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <product-department [productArea]="product" (onNombreEscucha)="escucha($event)" [currentComponent]="nameComponent"></product-department>
    </div>
  </div>
  <hr>
  `
})

export class ProductRow {
  product: Product;
  nameComponent: String;

  constructor () {
    this.nameComponent = this.constructor.name;
  }

  escucha (): void {
    console.log('nameComponent', this.nameComponent);
  }
}