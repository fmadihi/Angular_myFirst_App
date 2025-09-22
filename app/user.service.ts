import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(){
    console.log("user service from getdata");
    
  }
}
