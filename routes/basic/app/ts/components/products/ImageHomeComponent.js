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
var router_deprecated_1 = require('@angular/router-deprecated');
var GalleryService_1 = require('../../services/GalleryService');
var ImageHomeComponent = (function () {
    function ImageHomeComponent(gallery, router, routeParams) {
        this.gallery = gallery;
        this.router = router;
        this.routeParams = routeParams;
    }
    ImageHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.gallery
            .getDefaultData()
            .subscribe(function (res) { return _this.renderResults(res); });
        console.log(this.query);
    };
    ImageHomeComponent.prototype.renderResults = function (res) {
        this.results = null;
        this.results = res;
        this.loading = false;
    };
    ImageHomeComponent = __decorate([
        core_1.Component({
            selector: 'interest',
            directives: [router_deprecated_1.RouterLink, common_1.CORE_DIRECTIVES],
            template: "\n \t<h3>Image Home component</h3>\n\n \t<h2>Default Request</h2>\n \t<div *ngIf=\"loading\">loading...</div>\n \t<div *ngFor=\"let post of results; let i=index\">\n \t\t<div *ngIf=\"i < 10\">\n\t \t\t<h4>{{ post.title }}</h4>\n\t \t\t<a [routerLink]=\"['ImageEach', {id: post.id}]\">image link</a>\n\t \t\t<img alt=\"\" src=\"{{ post.thumbnailUrl }}\"/>\n \t\t</div>\n \t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [GalleryService_1.GalleryService, router_deprecated_1.Router, router_deprecated_1.RouteParams])
    ], ImageHomeComponent);
    return ImageHomeComponent;
}());
exports.ImageHomeComponent = ImageHomeComponent;
