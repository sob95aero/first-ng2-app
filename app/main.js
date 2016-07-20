"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var core_1 = require('angular2-google-maps/core');
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    core_1.GOOGLE_MAPS_PROVIDERS, app_routes_1.appRouterProviders, core_1.provideLazyMapsAPILoaderConfig({
        apiKey: 'AIzaSyCL-ew6If2qKce5J11w4mwARJIZH7joxCY'
    })
]);
//# sourceMappingURL=main.js.map