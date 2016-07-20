import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {GOOGLE_MAPS_PROVIDERS, provideLazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

import { appRouterProviders } from './app.routes';
bootstrap(AppComponent, [
    GOOGLE_MAPS_PROVIDERS, appRouterProviders, provideLazyMapsAPILoaderConfig({
        apiKey: 'AIzaSyCL-ew6If2qKce5J11w4mwARJIZH7joxCY'
    })
]);
