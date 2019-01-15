/*
 * Angular
 */
import {Component, EventEmitter, OnInit} from '@angular/core'
import {Product} from '../services/InventoryService';
import {InventoryService} from '../services/InventoryService';

 @Component({
   selector: 'product-row',
   inputs: ['product','isBought'],
   outputs: ['notify'],
   template: `
     <img alt="" src="{{ product?.imageUrl }}"/>
     <div class="content">
       <div class="header">{{ product?.name }}</div>
       <div class="meta">
         <div class="post-sku">SKU #{{ product?.sku }}</div>
       </div>
       <div class="description">
        <div>{{ product?.department }}</div>
       </div>
     </div>
     <div>{{ product?.price }}</div>
     <div *ngIf="!isBought">
        <button (click)='onClick(product)'>Comprar</button>
     </div>
     <div *ngIf="isBought">
        <h6>{{ product?.amount }}</h6>
     </div>
     <hr>
   `
 })

 export class InventoryRowComponent implements OnInit {
    product: Product;
    notify: EventEmitter<{}>;
    isRepeated: boolean = false;
    allProductsClone;

    constructor (public inventory: InventoryService) {
      this.notify = new EventEmitter();
    }

    ngOnInit(): void {

    }

    onClick(product): void {
      var currentProduct = this.product;
      var isRepeated = false;
      var self = this;
      var currentProduct: Product;

      this.notify.emit(product);
      this.inventory.productsCart.forEach(function (elem, index) {

          if (elem === self.product) {
             isRepeated = true;
          }
      });

      if (isRepeated) {
        this.product.amount ++;
        isRepeated = false;
      } else {
        this.inventory.productsCart.push(this.product);
      }
    }
  }
