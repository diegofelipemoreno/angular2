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
var InventoryService = (function () {
    function InventoryService() {
        this.productsCart = [];
        this.products = [
            new Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99, 1),
            new Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99, 1),
            new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99, 1)
        ];
        this.productsCart = [];
    }
    InventoryService.prototype.getDefaultBoughtData = function () {
        return this.productsCart;
    };
    InventoryService.prototype.getDefaultData = function () {
        return this.products;
    };
    InventoryService.prototype.postNewData = function (message) {
        return message;
    };
    InventoryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InventoryService);
    return InventoryService;
}());
exports.InventoryService = InventoryService;
var Product = (function () {
    function Product(sku, name, imageUrl, department, price, amount) {
        this.sku = sku;
        this.name = name;
        this.imageUrl = imageUrl;
        this.department = department;
        this.price = price;
        this.amount = amount;
    }
    return Product;
}());
exports.Product = Product;
exports.INVENTORY_PROVIDERS = [
    core_1.provide(InventoryService, { useClass: InventoryService })
];
