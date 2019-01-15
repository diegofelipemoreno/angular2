import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import { Product } from "product";

@Component({
  selector: 'inventory-app',
  template: `
  <div>
    <h1>{{ product.name }}</h1>
    <span>{{ product.sku }}</span>
  </div>
  `
})

class InventoryApp {
	product: Product;

	constructor () {
		this.product = new Product (
			'nicehat', 
			'a nice blakc hat',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZA8hNRUoHpPuqZvOyf9DZ8TsH3eSVAuHkoTd_Mle9mzDgC-MZ8hqReg',
			['men', 'accesories', 'hats'],
			'50'
		)
	}
}

bootstrap(InventoryApp);
