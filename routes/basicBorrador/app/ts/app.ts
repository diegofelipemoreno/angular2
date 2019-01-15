import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { Product } from 'components/Product';
import { ProductList } from 'components/ProductList';

@Component({
  selector: 'inventory-app',
  directives: [ProductList],
  template: `
  <div>
    <ul>
    <product-list [productList]="products" (onProductSelected)="productWasSelected($event)"></product-list>
    </ul>
  </div>
  `
})

class InventoryApp {
  product: Product;
  products: Product[];

  constructor () {
     this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected (product: Product): void {
    //console.log('Product clicked', product);
  }
}

bootstrap(InventoryApp);
