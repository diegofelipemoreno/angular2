import { bootstrap } from "@angular/platform-browser-dynamic";
import { Component } from "@angular/core";
import { Product } from "product";

@Component({
  selector: 'inventory-app',
  template: `
  <div>
    <h1> product.name</h1>
    <span> product.sku</span>
  </div>
  `
})

class InventoryApp {}

bootstrap(InventoryApp);
