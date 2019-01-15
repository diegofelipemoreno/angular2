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
var Message = (function () {
    function Message() {
    }
    Message.prototype.ngOnInit = function () {
        console.log('header', this.header);
    };
    Message = __decorate([
        core_1.Component({
            selector: '[message]',
            inputs: ['header'],
            host: {
                'class': 'ui message'
            },
            template: "\n  <div>\n    <div class=\"header\">\n      Im the {{ header }}\n    </div>\n    <p>\n      <ng-content></ng-content>\n    </p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Message);
    return Message;
}());
var TransclusionComponent = (function () {
    function TransclusionComponent() {
    }
    TransclusionComponent = __decorate([
        core_1.Component({
            selector: 'transclusion-component',
            directives: [Message],
            template: "\n  <div message header=\"My Message\">\n    This is the content of the message\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TransclusionComponent);
    return TransclusionComponent;
}());
exports.TransclusionComponent = TransclusionComponent;
