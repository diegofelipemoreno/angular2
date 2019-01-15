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
var GalleryService_1 = require('../../services/GalleryService');
var ImageComponent = (function () {
    function ImageComponent(gallery, router) {
        this.gallery = gallery;
        this.router = router;
    }
    ImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.gallery
            .getDefaultData()
            .subscribe(function (res) { return _this.renderResults(res); });
    };
    ImageComponent.prototype.renderResults = function (res) {
        this.results = null;
        this.results = res;
        this.loading = false;
    };
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'interest',
            template: "\n  \t<h3>Image component</h3>\n  \t \t<div *ngIf=\"loading\">loading...</div>\n  \t \t<div *ngFor=\"let post of results; let i=index\">\n  \t \t\t<div *ngIf=\"i < 10\">\n\t \t\t\t<img alt=\"\" src=\"{{ post.thumbnailUrl }}\"/>\n  \t \t\t</div>\n  \t \t</div>\n  "
        }), 
        __metadata('design:paramtypes', [GalleryService_1.GalleryService, router_deprecated_1.Router])
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
