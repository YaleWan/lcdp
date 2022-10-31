import { Observable } from "rxjs";

export class Emiter<Topic extends string | number>{
    constructor(){

    }
    on(){
        return new Observable()
    }

}