import { provideRouter, RouterConfig }  from '@angular/router';
import { CalendarEventsComponent } from './calendar-events.component';
import { DashboardComponent} from './dashboard.component';
import {InteractiveMapComponent} from './interactive-map.component'
import {InteractiveDistrictComponent} from './interactive-district.component'


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard ',
        terminal: true
    },
    {
        path: 'calendarEvents',
        component: CalendarEventsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'interactiveMap',
        component: InteractiveMapComponent
    },
    {
        path: 'district/:title',
        component: InteractiveDistrictComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];