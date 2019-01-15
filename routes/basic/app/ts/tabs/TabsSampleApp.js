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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var externalCSSUrl = require('../../css/external.css');
var Tab = (function () {
    function Tab() {
        this.active = false;
    }
    __decorate([
        core_1.Input('title'), 
        __metadata('design:type', String)
    ], Tab.prototype, "title", void 0);
    Tab = __decorate([
        core_1.Component({
            selector: 'tab',
            inputs: ['title'],
            template: "\n\t<div class=\"ui bottom attached tab segment\"\n\t\t[class.active]=\"active\">\n\t\t<ng-content></ng-content>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Tab);
    return Tab;
}());
var Tabset = (function () {
    function Tabset(tabs) {
        this.tabs = tabs;
    }
    Tabset.prototype.ngAfterContentInit = function () {
        this.tabs.toArray()[0].active = true;
    };
    Tabset.prototype.setActive = function (tab) {
        this.tabs.toArray().forEach(function (t) { return t.active = false; });
        tab.active = true;
    };
    Tabset = __decorate([
        core_1.Component({
            selector: 'tabset',
            template: "\n\t<div class=\"ui top attached tabular menu\">\n\t\t<a *ngFor=\"let tab of tabs\" class=\"item\" [class.active]=\"tab.active\" (click)=\"setActive(tab)\">\n\t\t\t{{ tab.title }}\n\t\t</a>\n\t</div>\n\t<ng-content></ng-content>\n\t"
        }),
        __param(0, core_1.Query(Tab)), 
        __metadata('design:paramtypes', [core_1.QueryList])
    ], Tabset);
    return Tabset;
}());
var TabsSampleApp = (function () {
    function TabsSampleApp() {
        this.tabs = [
            { title: 'About', content: 'This is the About tab' },
            { title: 'Blog', content: 'This is our blog' },
            { title: 'Contact us', content: 'Contact us here' },
        ];
    }
    TabsSampleApp = __decorate([
        core_1.Component({
            selector: 'tabs-sample-app',
            directives: [Tabset, Tab],
            template: "\n\t\t<tabset>\n\t\t\t<tab title=\"First tab\">\n\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam magni quia ut harum facilis, ullam deleniti porro dignissimos quasi at molestiae sapiente natus, neque voluptatum ad consequuntur cupiditate nemo sunt.\n\t\t\t</tab>\n\t\t\t<tab *ngFor=\"let tab of tabs\" [title]=\"tab.title\">\n\t\t\t\t{{ tab.content }}\n\t\t\t</tab>\n\t\t</tabset>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], TabsSampleApp);
    return TabsSampleApp;
}());
exports.TabsSampleApp = TabsSampleApp;
