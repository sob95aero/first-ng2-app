import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Map} from "./map";
import {MapService} from './map.service';

@Component({
    selector: 'interactiveMap',
    template: `
    <div *ngIf="map">
        <svg [attr.viewBox]="map.viewBox"
             preserveAspectRatio="xMidYMid meet" xmlns:svg="http://www.w3.org/1999/html">

          <svg:g *ngFor="let district of map.districts" [attr.title]="district.title" >

              <svg:path *ngFor="let path of district.paths"
                        [attr.d]="path.d"
                        [attr.title]="path.title">
              </svg:path>

          </svg:g>

        </svg>
    </div>
    `,
    providers:[MapService]

})
export class InteractiveMapComponent {

    map: Map;

    constructor(private mapService: MapService) {}

    ngOnInit() {

        this.getMap();

    }

    getMap() {
        this.mapService.getMap().then(map => this.map = map);
    }

}