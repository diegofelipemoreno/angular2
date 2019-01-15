import {provide, Injectable} from '@angular/core';

@Injectable()
export class InventoryService {
  products : Product[];
  productsCart = [];
  product: Product;

  constructor() {

    this.products = [
      new Product(
      'MYSHOES', 'Black Running Shoes',
      '/resources/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      109.99,
      1),
      new Product(
      'NEATOJACKET', 'Blue Jacket',
      '/resources/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99,
      1),
      new Product(
      'NICEHAT', 'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99,
      1)
      ];

     this.productsCart = [];
  }

  getDefaultBoughtData() {
    return this.productsCart;
  }

  getDefaultData() {
    return this.products;
  }

  postNewData(message) {
    return message;
  }
}

export class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number,
    public amount: number
    ) {
  }
}

export var INVENTORY_PROVIDERS: Array<any> = [
  provide(InventoryService, {useClass: InventoryService})
];

