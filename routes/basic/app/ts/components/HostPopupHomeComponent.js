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
var HostPopupComponent_1 = require('components/HostPopupComponent');
var TransclusionComponent_1 = require('components/TransclusionComponent');
var HostPopupHomeComponent = (function () {
    function HostPopupHomeComponent(router) {
        this.router = router;
    }
    HostPopupHomeComponent = __decorate([
        core_1.Component({
            selector: 'popup-home',
            directives: [router_deprecated_1.RouterOutlet, router_deprecated_1.RouterLink],
            template: "\n  <h2>Popup home</h2>\n\n  <div class=\"navLinks\">\n    <a [routerLink]=\"['./Transclusion']\">Transclusion</a> |\n  </div>\n  <router-outlet></router-outlet>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/hostpopup', name: 'HostPopup', component: HostPopupComponent_1.HostPopupComponent, useAsDefault: true },
            { path: '/transclusion', name: 'Transclusion', component: TransclusionComponent_1.TransclusionComponent },
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], HostPopupHomeComponent);
    return HostPopupHomeComponent;
}());
exports.HostPopupHomeComponent = HostPopupHomeComponent;
