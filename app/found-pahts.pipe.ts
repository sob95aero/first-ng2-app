import {Pipe, PipeTransform} from '@angular/core';
import {Path} from './path';

@Pipe({name: 'foundPaths', pure: false})
export class FoundPathsPipe implements PipeTransform {
    transform(allPaths:Path[]) {
        return allPaths.filter(path => path.found);
    }
}