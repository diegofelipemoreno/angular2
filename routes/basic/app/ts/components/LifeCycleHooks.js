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
var LifeCycleHooksOnChange_1 = require('components/LifeCycleHooksOnChange');
var LifeCycleHooksDoCheck_1 = require('components/LifeCycleHooksDoCheck');
var LifeCycleHooks = (function () {
    function LifeCycleHooks(router) {
        this.router = router;
    }
    LifeCycleHooks = __decorate([
        core_1.Component({
            selector: 'lifecycle-hooks',
            directives: [router_deprecated_1.RouterOutlet, router_deprecated_1.RouterLink],
            template: "\n  <h2>Lifecycle hooks</h2>\n\n  <div class=\"navLinks\">\n    <a [routerLink]=\"['./LifeCycleHooksOnChange']\">LifeCycleHooksOnChange</a> |\n  \t<a [routerLink]=\"['./LifeCycleHooksDoCheck']\">LifeCycleHooksDoCheck</a> |\n  </div>\n\n  <div class=\"products-area\">\n    <router-outlet></router-outlet>\n  </div>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/life-cycle-hooks-on-change', name: 'LifeCycleHooksOnChange', component: LifeCycleHooksOnChange_1.LifeCycleHooksOnChange, useAsDefault: true },
            { path: '/life-cycle-hooks-do-check', name: 'LifeCycleHooksDoCheck', component: LifeCycleHooksDoCheck_1.LifeCycleHooksDoCheck }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], LifeCycleHooks);
    return LifeCycleHooks;
}());
exports.LifeCycleHooks = LifeCycleHooks;
