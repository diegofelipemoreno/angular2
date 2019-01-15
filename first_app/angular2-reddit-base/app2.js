System.register(["@angular/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ArticleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ArticleComponent = (function () {
                function ArticleComponent() {
                    this.tile = 'Angular 2';
                    this.link = 'http:// angular.io';
                    this.vote = 10;
                }
                ArticleComponent.prototype.voteUp = function () {
                    this.votes += 1;
                };
                ArticleComponent.prototype.voteDown = function () {
                    this.votes -= 1;
                };
                ArticleComponent = __decorate([
                    core_1.Component({
                        selector: 'reddit-article',
                        host: {
                            class: 'row'
                        },
                        template: "\n\t<div class=\"four wide column center aligned votes\">\n\t\t<div class=\"ui statistic\">\n\t\t\t<div class=\"value\">\n\t\t\t\t{{ votes }}\n\t\t\t</div>\n\t\t\t<div class=\"label\">\n\t\t\t\tPoints\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"twelve wide column\">\n\t\t<a href=\"{{ link }}\" class=\"ui large header\">\n\t\t\t{{ title }}\n\t\t</a>\n\t\t<ul class=\"ui big horizontal list voters\">\n\t\t\t<li class=\"item\">\n\t\t\t\t<a href (clikc)=\"voteUp()\">\n\t\t\t\t\t<i class=\"arrow up icon\"></i>\n\t\t\t\t\tupvote\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li class=\"item\">\n\t\t\t\t<a href (click)=\"voteDown\">\n\t\t\t\t\t<i class=\"arrow down icon\"></i>\n\t\t\t\t\tdownvote\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ArticleComponent);
                return ArticleComponent;
            }());
            exports_1("ArticleComponent", ArticleComponent);
        }
    }
});
//# sourceMappingURL=app2.js.map