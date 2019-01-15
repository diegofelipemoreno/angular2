import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import {EventEmitter} from "@angular/core";


@Component({
  selector: 'product-image',
  inputs: ['product'],
  template: `
    <img class="product-image" src="{{ product.imageUrl }}"/>
  `
})
class ProductImage {
  product: Product;
}

//---------------------------------------------------------------

@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
    <div class="product-department">
      <span *ngFor="let name of product.department; let i=index">
        <a href="#">{{ name }}</a>
        <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
      </span>
    </div>
  `
})
class ProductDepartment {
  product: Product;
}

//---------------------------------------------------------------

@Component({
  selector: 'price-display',
  inputs: ['price'],
  template: `
  <div>\${{ price }}</div>
  `
})

class PriceDisplay {
  price: number;
}


//---------------------------------------------------------------

@Component({
  selector: 'button-addcar',
  inputs: ['product'],
  outputs: ['notify'],
  template: `
    <button (click)="onClick(product)">Add to cart</button>
  `
})

export class ButtonAddCar {
  product: Product;
  notify: EventEmitter<string>;

  constructor() {
    this.notify = new EventEmitter();
  }

  onClick(product): void {
    this.notify.emit(product);
  }

}

//---------------------------------------------------------------

@Component({
  selector: 'product-row',
  host: {'class': 'item'},
  inputs: ['product'],
  outputs: ['productAdded'],
  directives: [ProductImage, ProductDepartment, PriceDisplay,ButtonAddCar],
  template: `
       <product-image [product]="product"></product-image>
       <div class="content">
         <div class="header">{{ product.name }}</div>
         <div class="meta">
           <div class="product-sku">SKU #{{ product.sku }}</div>
         </div>
         <div class="description">
          <product-department [product]="product"></product-department>
         </div>
       </div>
       <price-display [price]="product.price"></price-display>
       <button-addcar [product]="product" (notify)='onNotify($event)'>Add to car </button-addcar>
  `
})
class ProductRow {
  product: Product;
  productAdded: EventEmitter<string>;

  constructor () {
    this.productAdded = new EventEmitter();
  }

  onNotify(message):void {
    this.productAdded.emit(message);
  }
}

//---------------------------------------------------------------

@Component({
  selector: 'productBought-row',
  host: {'class': 'item'},
  inputs: ['product'],
  directives: [ProductImage, ProductDepartment, PriceDisplay],
  template: `
       <product-image [product]="product"></product-image>
       <div class="content">
         <div class="header">{{ product.name }}</div>
         <div class="meta">
           <div class="product-sku">SKU #{{ product.sku }}</div>
         </div>
         <div class="description">
          <product-department [product]="product"></product-department>
         </div>
       </div>
       <h4>AMOUNT {{ (product.amount) ? product.amount : 1 }}</h4>
       <div>$ {{  product.price * product.amount }}</div>
  `
})
class ProductBoughtRow {
  product: Product;
}


//---------------------------------------------------------------

@Component({
selector: 'shopping-cart',
directives: [ProductBoughtRow],
inputs: ['productsBought'],
template: `
    <div class="ui items">
       <productBought-row
          *ngFor="let myproduct of productsBought"
          [product]="myproduct">
        </productBought-row>
    </div>
`
})

class ShoppingCart {
  productsBought: Product[];
}

//---------------------------------------------------------------

@Component({
selector: 'products-list',
directives: [ProductRow],
inputs: ['productsList'],
outputs: ['productAddedToCart'],
template: `
    <div class="ui items">
        <product-row
          *ngFor="let productRow of productsList"
          [product]="productRow"
          (click)="productWasSelected(productRow)"
          [class.selected]="isSelected(productRow)"
          (productAdded)='onNotify($event)'>
        </product-row>
    </div>
`
})

class ProductsList {
    productsList : Product[];
    currentProduct: Product;
    productAddedToCart: EventEmitter<string>;

    constructor () {
      this.productAddedToCart = new EventEmitter();
    }

    productWasSelected(product: Product): void {
        this.currentProduct = product;
    }

    isSelected(product: Product): boolean {
      if (product !== this.currentProduct) {
        return false;
      }
      return true;
    }

    onNotify(message):void {
      this.productAddedToCart.emit(message);
    }
}


//---------------------------------------------------------------

@Component({
selector: 'inventory-app',
directives: [ProductsList, ShoppingCart],
template: `
    <div class="inventory-app">
        <products-list [productsList]="products" (productAddedToCart)='onNotify($event)'></products-list>
    </div>
    <div>
        <hr>
        <h3>SHOPPING CART</h3>
        <shopping-cart [productsBought]="productsBought"></shopping-cart>
    </div>
`
})

class InventoryApp {
    products : Product[];
    productsBought : Product[];
    currentProduct: Product;
    allProductsClone: [];

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

        this.productsBought = [];
        this.currentProduct;

       this.allProductsClone = this.products.reduce(function(previous, current) {
            return previous.concat(current);
        },[]);

       this.products.forEach(function (elem, index) {
          elem.amount = 1;
       });
    }

    onNotify(message):void {
      var self = this;
      var isRepeated;
      var indexRepeated;

      this.currentProduct = message;

      if (this.productsBought.length > this.products.length) {

          isRepeated = false;
          this.productsBought.forEach(function (elem, index) {

              if (elem === self.currentProduct) {
                 self.currentProduct.amount ++;
              }
          });
      } else {
        isRepeated = false;
        this.allProductsClone.forEach(function (elem, index) {

            if (message === elem) {
                self.allProductsClone.splice(index,1);
                isRepeated = true;
            }
        });

        if (isRepeated) {
          this.productsBought.push(message);
          isRepeated = false;
        } else {
          this.productsBought.forEach(function (elem, index) {

              if (message === elem) {
                 elem.amount++;
              }
          });
        }
      }
    }
}

class Product {
  constructor(
    public sku: string,
    public name: string,
    public imageUrl: string,
    public department: string[],
    public price: number) {
  }

}

bootstrap(InventoryApp);





// EJEMPLO PASAR DATA ENTRE COMPONENTES
// @Component({
//   selector: 'child-selector',
//   inputs: ['title'],
//   outputs: ['notify'],
//   template: `
//   <h2>{{title}}</h2>
//   <span (click)='onClick(title)'>Click me please!</span>
//   `

// })
// export class ChildComponent {
//    title: string;
//    title = 'I\'m a nested component';
//    notify: EventEmitter<string>;

//    constructor () {
//     this.notify = new EventEmitter();
//    }

//    onClick(title): void {
//     this.notify.emit(title);
//   }
// }


// @Component({
//   selector: 'inventory-app',
//   directives: [ChildComponent],
//   template: `
//     <div>
//       <h1>Im a container component</h1>
//       <child-selector (notify)='onNotify($event)'></child-selector>
//     </div>
//   `
// })

// class InventoryApp {

//     onNotify(message:string):void {
//       alert(message);
//     }
// }


// bootstrap(InventoryApp);