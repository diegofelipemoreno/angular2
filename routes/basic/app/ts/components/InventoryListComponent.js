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
var InventoryListComponent = (function () {
    function InventoryListComponent(inventory) {
        this.inventory = inventory;
        this.productsList = inventory.products;
    }
    InventoryListComponent = __decorate([
        core_1.Component({
            selector: 'inventory-list',
            directives: [InventoryRowComponent_1.InventoryRowComponent],
            inputs: ['productsList'],
            template: "\n  <h1>INVENTORY List</h1>\n  <product-row\n      *ngFor=\"let productRow of productsList\"\n      [product]=\"productRow\">\n  </product-row>\n  "
        }), 
        __metadata('design:paramtypes', [InventoryService_1.InventoryService])
    ], InventoryListComponent);
    return InventoryListComponent;
}());
exports.InventoryListComponent = InventoryListComponent;
