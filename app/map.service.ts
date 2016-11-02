import { Injectable } from '@angular/core';
import {MAP} from "./mock-maps";
import {DISTRICTS} from "./mock-maps";

@Injectable()
export class MapService {
    getMap() {
        return Promise.resolve(MAP);
    }

    getDistrict(title: string) {
        var districts = Promise.resolve(DISTRICTS);
        return districts.then(districts => districts.find(district => district.title == title));
    }
}