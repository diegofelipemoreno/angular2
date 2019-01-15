/*
 * Angular
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
/*
 * Services
 */
import {InventoryService} from '../services/InventoryService';
import {InventoryFormComponent} from 'components/InventoryFormComponent';
import {InventoryListComponent} from 'components/InventoryListComponent';
import {InventoryShoppingCartComponent} from 'components/InventoryShoppingCartComponent';

@Component({
  selector: 'inventory',
  directives: [InventoryFormComponent, InventoryListComponent, InventoryShoppingCartComponent],
  template: `
  <h1>INVENTORY APP</h1>
  <inventory-form></inventory-form>
  <inventory-list></inventory-list>
  <inventory-shopping></inventory-shopping>
  `
})

export class InventoryComponent {

  constructor(public inventory: InventoryService, public router: Router) {
  }
}
