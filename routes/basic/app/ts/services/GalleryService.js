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
var http_1 = require('@angular/http');
require('rxjs/Rx');
var GalleryService = (function () {
    function GalleryService(http) {
        this.http = http;
    }
    GalleryService.prototype.query = function (URL, params) {
        var queryURL = "" + GalleryService.BASE_URL + URL;
        if (params) {
            queryURL = queryURL + "?" + params;
        }
        else {
            queryURL = "" + queryURL;
        }
        return this.http.request(queryURL).map(function (res) { return res.json(); });
    };
    GalleryService.prototype.getDefaultData = function () {
        return this.query("photos");
    };
    GalleryService.prototype.getSingleData = function (id) {
        return this.query("photos/" + id);
    };
    GalleryService.prototype.getUsers = function () {
        return this.query("users");
    };
    GalleryService.prototype.getSingleUser = function (id) {
        return this.query("users/" + id);
    };
    GalleryService.BASE_URL = 'http://jsonplaceholder.typicode.com/';
    GalleryService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GalleryService);
    return GalleryService;
}());
exports.GalleryService = GalleryService;
exports.GALLERY_PROVIDERS = [
    core_1.provide(GalleryService, { useClass: GalleryService })
];
