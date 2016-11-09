export class Path {

    title:string;
    d:string;
    found:boolean;

    constructor(title:string, d:string) {
        this.title = title;
        this.d = d;
    }

    setFound(found:boolean) {
        this.found = found;
    }


}