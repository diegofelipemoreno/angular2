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
var InventoryService_1 = require('../services/InventoryService');
var InventoryRowComponent = (function () {
    function InventoryRowComponent(inventory) {
        this.inventory = inventory;
        this.isRepeated = false;
        this.notify = new core_1.EventEmitter();
    }
    InventoryRowComponent.prototype.ngOnInit = function () {
    };
    InventoryRowComponent.prototype.onClick = function (product) {
        var currentProduct = this.product;
        var isRepeated = false;
        var self = this;
        var currentProduct;
        this.notify.emit(product);
        this.inventory.productsCart.forEach(function (elem, index) {
            if (elem === self.product) {
                isRepeated = true;
            }
        });
        if (isRepeated) {
            this.product.amount++;
            isRepeated = false;
        }
        else {
            this.inventory.productsCart.push(this.product);
        }
    };
    InventoryRowComponent = __decorate([
        core_1.Component({
            selector: 'product-row',
            inputs: ['product', 'isBought'],
            outputs: ['notify'],
            template: "\n     <img alt=\"\" src=\"{{ product?.imageUrl }}\"/>\n     <div class=\"content\">\n       <div class=\"header\">{{ product?.name }}</div>\n       <div class=\"meta\">\n         <div class=\"post-sku\">SKU #{{ product?.sku }}</div>\n       </div>\n       <div class=\"description\">\n        <div>{{ product?.department }}</div>\n       </div>\n     </div>\n     <div>{{ product?.price }}</div>\n     <div *ngIf=\"!isBought\">\n        <button (click)='onClick(product)'>Comprar</button>\n     </div>\n     <div *ngIf=\"isBought\">\n        <h6>{{ product?.amount }}</h6>\n     </div>\n     <hr>\n   "
        }), 
        __metadata('design:paramtypes', [InventoryService_1.InventoryService])
    ], InventoryRowComponent);
    return InventoryRowComponent;
}());
exports.InventoryRowComponent = InventoryRowComponent;
