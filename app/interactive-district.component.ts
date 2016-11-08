import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {District} from "./district";
import {Path} from "./path";
import {MapService} from './map.service';

@Component({
    selector: 'interactiveMap',
    template: `
    <h3 *ngIf="district && !selectedPath">Selected subdistrict for {{district.title}}:</h3>
    <h3 *ngIf="selectedPath">Selected subdistrict for {{district.title}}: {{selectedPath.title}}</h3>
    <div *ngIf="district">
        <svg width="800" height="600" viewBox="0 0 744.09449 1052.3622"
             preserveAspectRatio="xMinYMin meet" xmlns:svg="http://www.w3.org/1999/html">

          <svg:g [attr.title]="district.title" [attr.transform]="district.transform" >
               <svg:path *ngFor="let path of district.paths" [attr.d]="path.d"
                        [attr.title]="path.title"
                        (mouseover)="mouseOver(path)" ></svg:path>

          </svg:g>

        </svg>
    </div>
    `,
    providers:[MapService]

})
export class InteractiveDistrictComponent implements OnInit {

    district: District;
    selectedPath: Path;

    constructor(private route: ActivatedRoute, private mapService: MapService) {}


    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let title = params['title'];
            this.mapService.getDistrict(title)
                .then(district => this.district = district);
        });
    }

    mouseOver(path) {
        this.selectedPath = path;
    }

}