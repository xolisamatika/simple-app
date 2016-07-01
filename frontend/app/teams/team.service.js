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
var Observable_1 = require('rxjs/Observable');
var app_settings_1 = require('../app.settings');
var TeamService = (function () {
    function TeamService(http) {
        this.http = http;
        this.getTeamsUrl = app_settings_1.AppSettings.API_ENDPOINT + "get=teams";
        this.addTeamsUrl = app_settings_1.AppSettings.API_ENDPOINT + "get=addteam";
    }
    TeamService.prototype.getTeams = function () {
        return this.http.get(this.getTeamsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TeamService.prototype.addTeam = function (name, iso_code) {
        var body = JSON.stringify({ name: name, iso_code: iso_code });
        //	let headers = new Headers({'Content-Type':'application/json'});
        //	let options = new RequestOptions({headers:headers});
        this.addTeamsUrl = (app_settings_1.AppSettings.API_ENDPOINT + "get=addteam&name=") + name + "&iso_code=" + iso_code;
        console.log(this.addTeamsUrl);
        return this.http.get(this.addTeamsUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TeamService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    TeamService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return Observable_1.Observable.throw(errMsg);
    };
    TeamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TeamService);
    return TeamService;
}());
exports.TeamService = TeamService;
//# sourceMappingURL=team.service.js.map