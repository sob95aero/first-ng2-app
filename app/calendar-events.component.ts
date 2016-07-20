import { Component, OnInit} from '@angular/core';

import { GOOGLE_MAPS_DIRECTIVES, MouseEvent } from 'angular2-google-maps/core';

import {CalendarEvent} from './calendar-event'
import {CalendarEventService} from './calendar-event.service'
import {CalendarEventDetailComponent} from './calendar-event-detail.component'

@Component({
    selector: 'calendar-events',
    templateUrl: 'app/calendar-events.component.html',
    directives: [GOOGLE_MAPS_DIRECTIVES, CalendarEventDetailComponent],
    providers:[CalendarEventService]

})
export class CalendarEventsComponent {

    events: CalendarEvent[];
    event: CalendarEvent;

    constructor(private calendarEventService: CalendarEventService) {}

    ngOnInit() {

        this.getCalendarEvents();

    }

    onSelect(event) {
        this.event = event
    }

    mapClicked($event: MouseEvent) {
        this.event.lat =  $event.coords.lat;
        this.event.lng = $event.coords.lng;
    }

    getCalendarEvents() {
        this.calendarEventService.getEvents().then(events => this.events = events);
    }

}