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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var HomeComponent_1 = require('components/HomeComponent');
var AboutComponent_1 = require('components/AboutComponent');
var ProductsComponent_1 = require('components/ProductsComponent');
var ContactComponent_1 = require('components/ContactComponent');
var ExtrasComponent_1 = require('components/ExtrasComponent');
var NotFoundComponent_1 = require('components/NotFoundComponent');
var SearchComponent_1 = require('components/SearchComponent');
var ArtistComponent_1 = require('components/ArtistComponent');
var TrackComponent_1 = require('components/TrackComponent');
var AlbumComponent_1 = require('components/AlbumComponent');
var LoginComponent_1 = require('components/LoginComponent');
var ProtectedComponent_1 = require('components/ProtectedComponent');
var StylingComponent_1 = require('components/StylingComponent');
var HostPopupHomeComponent_1 = require('components/HostPopupHomeComponent');
var InventoryComponent_1 = require('components/InventoryComponent');
var TabsSampleApp_1 = require('tabs/TabsSampleApp');
var LifeCycleHooks_1 = require('components/LifeCycleHooks');
var SpotifyService_1 = require('services/SpotifyService');
var GalleryService_1 = require('services/GalleryService');
var AuthService_1 = require('services/AuthService');
var InventoryService_1 = require('services/InventoryService');
require('css/styles.scss');
var RoutesDemoApp = (function () {
    function RoutesDemoApp(router) {
        this.router = router;
    }
    RoutesDemoApp = __decorate([
        core_1.Component({
            selector: 'router-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, LoginComponent_1.LoginComponent],
            template: "\n  <div>\n    <nav>\n      <a>Navigation:</a>\n      <ul>\n        <li><a [routerLink]=\"['/Home']\">Home</a></li>\n        <li><a [routerLink]=\"['/About']\">About</a></li>\n        <li><a [routerLink]=\"['/Products']\">Products</a></li>\n        <li><a [routerLink]=\"['/Contact']\">Contact us</a></li>\n        <li><a [routerLink]=\"['/Extras']\">Extras</a></li>\n        <li><a [routerLink]=\"['/Search']\">Search</a></li>\n        <li><a [routerLink]=\"['/Protected']\">Protected</a></li>\n        <li><a [routerLink]=\"['/Styling']\">Styling</a></li>\n        <li><a [routerLink]=\"['/HostPopupHome']\">Host popup Home</a></li>\n        <li><a [routerLink]=\"['/Inventory']\">Inventory app</a></li>\n        <li><a [routerLink]=\"['/TabsSampleApp']\">TabsSampleApp</a></li>\n        <li><a [routerLink]=\"['/LifeCycleHooks']\">LifeCycleHooks</a></li>\n      </ul>\n    </nav>\n    <login></login>\n    <hr>\n    <router-outlet></router-outlet>\n  </div>\n  "
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'root', redirectTo: ['/Home'] },
            { path: '/home', name: 'Home', component: HomeComponent_1.HomeComponent },
            { path: '/about', name: 'About', component: AboutComponent_1.AboutComponent },
            { path: '/products/...', name: 'Products', component: ProductsComponent_1.ProductsComponent },
            { path: '/contact', name: 'Contact', component: ContactComponent_1.ContactComponent },
            { path: '/contactus', name: 'ContactUs', redirectTo: ['/Contact'] },
            { path: '/extras', name: 'Extras', component: ExtrasComponent_1.ExtrasComponent },
            { path: '/search', name: 'Search', component: SearchComponent_1.SearchComponent },
            { path: '***', name: 'NotFound', component: NotFoundComponent_1.NotFoundComponent },
            { path: '/artists/:id', name: 'Artists', component: ArtistComponent_1.ArtistComponent },
            { path: '/tracks/:id', name: 'Tracks', component: TrackComponent_1.TrackComponent },
            { path: '/albums/:id', name: 'Albums', component: AlbumComponent_1.AlbumComponent },
            { path: '/protected', name: 'Protected', component: ProtectedComponent_1.ProtectedComponent },
            { path: '/styling', name: 'Styling', component: StylingComponent_1.StylingComponent },
            { path: '/hostpopuphome/...', name: 'HostPopupHome', component: HostPopupHomeComponent_1.HostPopupHomeComponent },
            { path: '/inventory', name: 'Inventory', component: InventoryComponent_1.InventoryComponent },
            { path: '/tabs-sample-app', name: 'TabsSampleApp', component: TabsSampleApp_1.TabsSampleApp },
            { path: '/life-cycle-hooks/...', name: 'LifeCycleHooks', component: LifeCycleHooks_1.LifeCycleHooks }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], RoutesDemoApp);
    return RoutesDemoApp;
}());
platform_browser_dynamic_1.bootstrap(RoutesDemoApp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    SpotifyService_1.SPOTIFY_PROVIDERS,
    GalleryService_1.GALLERY_PROVIDERS,
    InventoryService_1.INVENTORY_PROVIDERS,
    AuthService_1.AUTH_PROVIDERS,
    core_1.provide(router_deprecated_1.ROUTER_PRIMARY_COMPONENT, { useValue: RoutesDemoApp }),
    core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' }),
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]).catch(function (err) { return console.error(err); });
