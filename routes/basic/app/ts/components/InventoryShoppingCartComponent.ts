/*
 * Angular
 */
import {Component} from '@angular/core';
import {InventoryRowComponent} from 'components/InventoryRowComponent';
import {InventoryService} from '../services/InventoryService';
import {Product} from '../services/InventoryService';

@Component({
  selector: 'inventory-shopping',
  directives: [InventoryRowComponent],
  inputs: ['productsBought','isBought'],
  template: `
  <h1>SHOPPING {{ bought }}</h1>
  <product-row
      *ngFor="let product of productsBought"
      [product]="product" [isBought]="isBought">
  </product-row>
  `
})

export class InventoryShoppingCartComponent {
  productsBought : Product[];
  isBought: boolean = true;

  constructor(public inventory: InventoryService) {
    this.productsBought = inventory.productsCart;
  }
}