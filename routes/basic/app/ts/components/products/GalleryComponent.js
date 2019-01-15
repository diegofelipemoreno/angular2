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
var ImageHomeComponent_1 = require('components/products/ImageHomeComponent');
var ImageComponent_1 = require('components/products/ImageComponent');
var ImageEachComponent_1 = require('components/products/ImageEachComponent');
var UsersComponent_1 = require('components/products/UsersComponent');
var UserSingleComponent_1 = require('components/products/UserSingleComponent');
var GalleryComponent = (function () {
    function GalleryComponent(router) {
        this.router = router;
    }
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'gallery',
            directives: [router_deprecated_1.RouterOutlet, router_deprecated_1.RouterLink],
            template: "\n  <hr>\n  <div class=\"navLinks\">\n    <a [routerLink]=\"['./Image']\">Image</a> |\n    <a [routerLink]=\"['./Users']\">Users</a> |\n  </div>\n\n  <hr>\n  <router-outlet></router-outlet>\n"
        }),
        router_deprecated_1.RouteConfig([
            { path: '/imagehome', name: 'ImageHome', component: ImageHomeComponent_1.ImageHomeComponent, useAsDefault: true },
            { path: '/image', name: 'Image', component: ImageComponent_1.ImageComponent },
            { path: '/imageeach', name: 'ImageEach', component: ImageEachComponent_1.ImageEachComponent },
            { path: '/users', name: 'Users', component: UsersComponent_1.UsersComponent },
            { path: '/usersingle', name: 'UserSingle', component: UserSingleComponent_1.UserSingleComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;
