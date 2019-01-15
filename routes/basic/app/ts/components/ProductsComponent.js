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
var MainComponent_1 = require('components/products/MainComponent');
var InterestComponent_1 = require('components/products/InterestComponent');
var GalleryComponent_1 = require('components/products/GalleryComponent');
var ByIdComponent_1 = require('components/products/ByIdComponent');
var ProductsComponent = (function () {
    function ProductsComponent(router) {
        this.router = router;
    }
    ProductsComponent.prototype.goToProduct = function (id) {
        this.router.navigate(['./ById', { id: id }]);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'products',
            directives: [router_deprecated_1.RouterOutlet, router_deprecated_1.RouterLink],
            template: "\n  <h1>{{ title }}</h1>\n\n  <h2>Products</h2>\n\n  <div class=\"navLinks\">\n    <a [routerLink]=\"['./Main']\">Main</a> |\n    <a [routerLink]=\"['Products', 'Interest']\">Interest</a> |\n    <a [routerLink]=\"['./Gallery']\">Gallery</a> |\n    Enter id: <input #id size=\"6\">\n    <button (click)=\"goToProduct(id.value)\">Go</button>\n  </div>\n\n  <div class=\"products-area\">\n    <router-outlet></router-outlet>\n  </div>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/main', name: 'Main', component: MainComponent_1.MainComponent, useAsDefault: true },
            { path: '/:id', name: 'ById', component: ByIdComponent_1.ByIdComponent },
            { path: '/interest', name: 'Interest', component: InterestComponent_1.InterestComponent },
            { path: '/gallery/...', name: 'Gallery', component: GalleryComponent_1.GalleryComponent },
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
