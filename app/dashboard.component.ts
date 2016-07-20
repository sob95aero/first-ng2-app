import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Schedule, Dialog,Button} from 'primeng/primeng';


import {CalendarEvent} from './calendar-event'
import {CalendarEventService} from './calendar-event.service'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard.component.html',
    directives: [Schedule,Dialog, Button]
})
export class DashboardComponent {

    events: CalendarEvent[] = [];
    event: CalendarEvent;

    headerConfig:any;

    dialogVisible:boolean = false;

    idGen: number = 100;


    constructor(private calendarEventService: CalendarEventService,private cd: ChangeDetectorRef) {}

    ngOnInit() {

        this.getCalendarEvents();

        this.headerConfig = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
    }

    handleDayClick(event) {
        this.event = new CalendarEvent();
        this.event.start = event.date.format();
        this.dialogVisible = true;

        //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
        this.cd.detectChanges();
    }

    handleEventClick(e) {
        this.event = new CalendarEvent();
        this.event.title = e.calEvent.title;

        let start = e.calEvent.start;
        let end = e.calEvent.end;
        if (e.view.name === 'month') {
            start.stripTime();
        }

        if (end) {
            end.stripTime();
            this.event.end = end.format();
        }

        this.event.id = e.calEvent.id;
        this.event.lat = e.calEvent.lat;
        this.event.lng = e.calEvent.lng;
        this.event.start = start.format();
        this.event.allDay = e.calEvent.allDay;
        this.dialogVisible = true;
    }

    saveEvent() {
        //update
        if(this.event.id) {
            let index: number = this.findEventIndexById(this.event.id);
            if(index >= 0) {
                this.events[index] = this.event;
            }
        }
        //new
        else {
            this.event.id = this.idGen;
            this.events.push(this.event);
            this.event = null;
        }

        this.dialogVisible = false;
    }

    deleteEvent() {
        let index: number = this.findEventIndexById(this.event.id);
        if(index >= 0) {
            this.events.splice(index, 1);
        }
        this.dialogVisible = false;
    }

    findEventIndexById(id: number) {
        let index = -1;
        for(let i = 0; i < this.events.length; i++) {
            if(id == this.events[i].id) {
                index = i;
                break;
            }
        }

        return index;
    }

    getCalendarEvents() {
        this.calendarEventService.getEvents().then(events => this.events = events);
    }

}