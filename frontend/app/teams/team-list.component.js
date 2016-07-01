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
var team_service_1 = require('./team.service');
var TeamListComponent = (function () {
    function TeamListComponent(teamService) {
        this.teamService = teamService;
        this.mode = 'Observable';
        // code...
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this.getTeams();
    };
    TeamListComponent.prototype.getTeams = function () {
        var _this = this;
        this.teamService.getTeams()
            .subscribe(function (teams) { return _this.teams = teams; }, function (error) { return _this.errorMessage = error; });
    };
    TeamListComponent.prototype.addTeam = function (name, iso_code) {
        var _this = this;
        if ((!name) || (!iso_code)) {
            return;
        }
        this.teamService.addTeam(name, iso_code)
            .subscribe(function (team) { return _this.teams.push(team); }, function (error) { return _this.errorMessage = error; });
    };
    TeamListComponent = __decorate([
        core_1.Component({
            selector: 'team-list',
            templateUrl: '/app/teams/team-list.component.html',
            providers: [team_service_1.TeamService]
        }), 
        __metadata('design:paramtypes', [team_service_1.TeamService])
    ], TeamListComponent);
    return TeamListComponent;
}());
exports.TeamListComponent = TeamListComponent;
//# sourceMappingURL=team-list.component.js.map