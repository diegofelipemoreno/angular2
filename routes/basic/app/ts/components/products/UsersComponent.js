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
var common_1 = require('@angular/common');
var common_2 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var GalleryService_1 = require('services/GalleryService');
var UsersComponent = (function () {
    function UsersComponent(routeParams, gallery, locationStrategy) {
        this.routeParams = routeParams;
        this.gallery = gallery;
        this.locationStrategy = locationStrategy;
        this.id = routeParams.get('id');
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gallery
            .getUsers()
            .subscribe(function (res) { return _this.renderUsers(res); });
    };
    UsersComponent.prototype.back = function () {
        this.locationStrategy.back();
    };
    UsersComponent.prototype.renderUsers = function (res) {
        this.users = res;
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'theUser',
            directives: [router_deprecated_1.RouterLink, common_1.CORE_DIRECTIVES],
            template: "\n    <div *ngFor=\"let user of users; let i=index\">\n      <h4>{{ user.name }}</h4>\n      <h3>{{ user.email }}</h3>\n      <a [routerLink]=\"['UserSingle', {id: user.id}]\">image link</a>\n      <hr>\n    </div>\n    <p><a href (click)=\"back()\">Back</a></p>\n  "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, (typeof (_a = typeof GalleryService_1.GalleryService !== 'undefined' && GalleryService_1.GalleryService) === 'function' && _a) || Object, common_2.LocationStrategy])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());
exports.UsersComponent = UsersComponent;
