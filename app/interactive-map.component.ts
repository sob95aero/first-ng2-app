import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Map} from "./map";
import {Path} from "./path";
import {MapService} from './map.service';

@Component({
    selector: 'interactiveMap',
    template: `

    <h3 *ngIf="!selectedPath"> Selected district:</h3>
    <h3 *ngIf="selectedPath"> Selected district: {{selectedPath.title}}</h3>

    <div *ngIf="map">
        <svg [attr.viewBox]="map.viewBox"
             preserveAspectRatio="xMidYMid meet" width="800" height="600" xmlns:svg="http://www.w3.org/1999/html">

          <svg:g *ngFor="let district of map.districts" [attr.title]="district.title" >

              <svg:path [attr.d]="district.path.d"
                        [attr.title]="district.path.title"
                        (mouseover)="mouseOver(district)"
                        (click)="onclick(district.path)">
              </svg:path>

          </svg:g>

        </svg>
    </div>
    `,
    providers:[MapService]

})
export class InteractiveMapComponent {

    map: Map;
    selectedPath: Path;

    constructor(private router: Router, private mapService: MapService) {}

    ngOnInit() {

        this.getMap();

    }

    getMap() {
        this.mapService.getMap().then(map => this.map = map);
    }

    mouseOver(path) {
        this.selectedPath = path;
    }

    onclick(path) {
        let link = ['/district', path.title];
        this.router.navigate(link);
    }

}