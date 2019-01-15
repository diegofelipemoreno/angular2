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
var common_2 = require('@angular/common');
var GalleryService_1 = require('services/GalleryService');
var ImageEachComponent = (function () {
    function ImageEachComponent(routeParams, gallery, locationStrategy) {
        this.routeParams = routeParams;
        this.gallery = gallery;
        this.locationStrategy = locationStrategy;
        this.id = routeParams.get('id');
    }
    ImageEachComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gallery
            .getSingleData(this.id)
            .subscribe(function (res) { return _this.renderTrack(res); });
    };
    ImageEachComponent.prototype.back = function () {
        this.locationStrategy.back();
    };
    ImageEachComponent.prototype.renderTrack = function (res) {
        this.result = res;
    };
    ImageEachComponent = __decorate([
        core_1.Component({
            selector: 'theTrack',
            directives: [common_1.CORE_DIRECTIVES],
            template: "\n  <div *ngIf=\"result\">\n      <h4>{{ result.title }}</h4>\n      <img src=\"{{ result.thumbnailUrl }}\">\n    <p><a href (click)=\"back()\">Back</a></p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams, (typeof (_a = typeof GalleryService_1.GalleryService !== 'undefined' && GalleryService_1.GalleryService) === 'function' && _a) || Object, common_2.LocationStrategy])
    ], ImageEachComponent);
    return ImageEachComponent;
    var _a;
}());
exports.ImageEachComponent = ImageEachComponent;
