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
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
    }
    SpotifyService.prototype.query = function (URL, params) {
        var queryURL = "" + SpotifyService.BASE_URL + URL;
        if (params) {
            queryURL = queryURL + "?" + params.join('&');
        }
        return this.http.request(queryURL).map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.search = function (query, type) {
        return this.query("/search", [
            ("q=" + query),
            ("type=" + type)
        ]);
    };
    SpotifyService.prototype.searchTrack = function (query) {
        return this.search(query, 'track');
    };
    SpotifyService.prototype.getTrack = function (id) {
        return this.query("/tracks/" + id);
    };
    SpotifyService.prototype.getArtist = function (id) {
        return this.query("/artists/" + id);
    };
    SpotifyService.prototype.getAlbum = function (id) {
        return this.query("/albums/" + id);
    };
    SpotifyService.BASE_URL = 'https://api.spotify.com/v1';
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
exports.SPOTIFY_PROVIDERS = [
    core_1.provide(SpotifyService, { useClass: SpotifyService })
];
