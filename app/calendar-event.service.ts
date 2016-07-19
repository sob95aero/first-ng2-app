import { Injectable } from '@angular/core';
import {CALENDAR_EVENTS} from "./mock-calendar-events";

@Injectable()
export class CalendarEventService {
    getEvents() {
        return Promise.resolve(CALENDAR_EVENTS);
    }
}