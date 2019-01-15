"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var InventoryRowComponent_1 = require('components/InventoryRowComponent');
var InventoryService_1 = require('../services/InventoryService');
var InventoryShoppingCartComponent = (function () {
    function InventoryShoppingCartComponent(inventory) {
        this.inventory = inventory;
        this.isBought = true;
        this.productsBought = inventory.productsCart;
    }
    InventoryShoppingCartComponent = __decorate([
        core_1.Component({
            selector: 'inventory-shopping',
            directives: [InventoryRowComponent_1.InventoryRowComponent],
            inputs: ['productsBought', 'isBought'],
            template: "\n  <h1>SHOPPING {{ bought }}</h1>\n  <product-row\n      *ngFor=\"let product of productsBought\"\n      [product]=\"product\" [isBought]=\"isBought\">\n  </product-row>\n  "
        }), 
        __metadata('design:paramtypes', [InventoryService_1.InventoryService])
    ], InventoryShoppingCartComponent);
    return InventoryShoppingCartComponent;
}());
exports.InventoryShoppingCartComponent = InventoryShoppingCartComponent;
