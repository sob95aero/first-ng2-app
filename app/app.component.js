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
var calendar_event_detail_component_1 = require('./calendar-event-detail.component');
var primeng_1 = require('primeng/primeng');
var core_2 = require('angular2-google-maps/core');
var calendar_event_service_1 = require('./calendar-event.service');
var AppComponent = (function () {
    function AppComponent(calendarEventService, cd) {
        this.calendarEventService = calendarEventService;
        this.cd = cd;
        this.title = 'Action planner';
        this.dialogVisible = false;
        this.idGen = 100;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCalendarEvents();
        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    };
    AppComponent.prototype.handleDayClick = function (event) {
        this.event = new calendar_event_1.CalendarEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;
        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    };
    AppComponent.prototype.handleEventClick = function (e) {
        this.event = new calendar_event_1.CalendarEvent();
        this.event.title = e.calEvent.title;
        var start = e.calEvent.start;
        var end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }
        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }
        this.event.id = e.calEvent.id;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    };
    AppComponent.prototype.saveEvent = function () {
        //update
        if (this.event.id) {
            var index = this.findEventIndexById(this.event.id);
            if (index >= 0) {
                this.events[index] = this.event;
            }
        }
        else {
            this.event.id = this.idGen;
            this.events.push(this.event);
            this.event = null;
        }
        this.dialogVisible = false;
    };
    AppComponent.prototype.deleteEvent = function () {
        var index = this.findEventIndexById(this.event.id);
        if (index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    };
    AppComponent.prototype.findEventIndexById = function (id) {
        var index = -1;
        for (var i = 0; i < this.events.length; i++) {
            if (id == this.events[i].id) {
                index = i;
                break;
            }
        }
        return index;
    };
    AppComponent.prototype.onSelect = function (event) {
        this.event = event;
    };
    AppComponent.prototype.mapClicked = function ($event) {
        this.event.lat = $event.coords.lat;
        this.event.lng = $event.coords.lng;
    };
    AppComponent.prototype.getCalendarEvents = function () {
        var _this = this;
        this.calendarEventService.getEvents().then(function (events) { return _this.events = events; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
            directives: [primeng_1.Schedule, primeng_1.Dialog, primeng_1.Button, core_2.GOOGLE_MAPS_DIRECTIVES, calendar_event_detail_component_1.CalendarEventDetailComponent],
            providers: [calendar_event_service_1.CalendarEventService, core_2.GOOGLE_MAPS_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [calendar_event_service_1.CalendarEventService, core_1.ChangeDetectorRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map