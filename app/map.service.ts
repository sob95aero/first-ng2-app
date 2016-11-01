import { Injectable } from '@angular/core';
import {MAP} from "./mock-maps";

@Injectable()
export class MapService {
    getMap() {
        return Promise.resolve(MAP);
    }
}