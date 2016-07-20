import {Component,ChangeDetectorRef} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {CalendarEventService} from './calendar-event.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [CalendarEventService]
})
export class AppComponent  {

    title = 'Action planner';

}










