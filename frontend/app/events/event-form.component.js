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
var event_1 = require('./event');
var EventFormComponent = (function () {
    function EventFormComponent() {
        this.submitted = false;
        this.event = new event_1.Event('PSL');
        this.active = true;
    }
    EventFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    EventFormComponent.prototype.newEvent = function () {
        var _this = this;
        this.event = new event_1.Event('');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    EventFormComponent = __decorate([
        core_1.Component({
            selector: 'event-form',
            templateUrl: 'app/events/event-form.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EventFormComponent);
    return EventFormComponent;
}());
exports.EventFormComponent = EventFormComponent;
//# sourceMappingURL=event-form.component.js.map