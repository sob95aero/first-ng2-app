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
var calendar_event_1 = require('./calendar-event');
var core_2 = require('angular2-google-maps/core');
var CalendarEventDetailComponent = (function () {
    function CalendarEventDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', calendar_event_1.CalendarEvent)
    ], CalendarEventDetailComponent.prototype, "event", void 0);
    CalendarEventDetailComponent = __decorate([
        core_1.Component({
            selector: 'calendar-event-detail',
            templateUrl: 'app/calendar-event-detail.component.html',
            styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
            directives: [core_2.GOOGLE_MAPS_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], CalendarEventDetailComponent);
    return CalendarEventDetailComponent;
}());
exports.CalendarEventDetailComponent = CalendarEventDetailComponent;
//# sourceMappingURL=calendar-event-detail.component.js.map