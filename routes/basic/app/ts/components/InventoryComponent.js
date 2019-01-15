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
var router_deprecated_1 = require('@angular/router-deprecated');
var InventoryService_1 = require('../services/InventoryService');
var InventoryFormComponent_1 = require('components/InventoryFormComponent');
var InventoryListComponent_1 = require('components/InventoryListComponent');
var InventoryShoppingCartComponent_1 = require('components/InventoryShoppingCartComponent');
var InventoryComponent = (function () {
    function InventoryComponent(inventory, router) {
        this.inventory = inventory;
        this.router = router;
    }
    InventoryComponent = __decorate([
        core_1.Component({
            selector: 'inventory',
            directives: [InventoryFormComponent_1.InventoryFormComponent, InventoryListComponent_1.InventoryListComponent, InventoryShoppingCartComponent_1.InventoryShoppingCartComponent],
            template: "\n  <h1>INVENTORY APP</h1>\n  <inventory-form></inventory-form>\n  <inventory-list></inventory-list>\n  <inventory-shopping></inventory-shopping>\n  "
        }), 
        __metadata('design:paramtypes', [InventoryService_1.InventoryService, router_deprecated_1.Router])
    ], InventoryComponent);
    return InventoryComponent;
}());
exports.InventoryComponent = InventoryComponent;
