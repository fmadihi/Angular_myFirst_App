import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class LoggerService{
    constructor(){}

    LogMassage(){
        console.log('this is used in another services')
    }
}