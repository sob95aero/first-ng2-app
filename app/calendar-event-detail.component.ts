import { Component , Input} from '@angular/core';
import {CalendarEvent} from './calendar-event';
import { GOOGLE_MAPS_DIRECTIVES, MouseEvent} from 'angular2-google-maps/core';


@Component({
    selector: 'calendar-event-detail',
    templateUrl: 'app/calendar-event-detail.component.html',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
    directives: [GOOGLE_MAPS_DIRECTIVES]
})
export class CalendarEventDetailComponent {
    @Input()
    event: CalendarEvent;

}