/*
 * Angular
 */
import {Component, EventEmitter,} from '@angular/core';
import {InventoryRowComponent} from 'components/InventoryRowComponent';
import {InventoryService} from '../services/InventoryService';
import {Product} from '../services/InventoryService';

@Component({
  selector: 'inventory-list',
  directives: [InventoryRowComponent],
  inputs: ['productsList'],
  template: `
  <h1>INVENTORY List</h1>
  <product-row
      *ngFor="let productRow of productsList"
      [product]="productRow">
  </product-row>
  `
})

export class InventoryListComponent {
  productsList : Product[];

  constructor(public inventory: InventoryService) {
    this.productsList = inventory.products;
  }
}