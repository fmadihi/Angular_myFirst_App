import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  nameList = ['mohammad'];
  constructor() {}
  getData() {
    console.log('user service from getdata');
  }
  // نحوه گت کردن از api
  async getFetchApi() {
    let result = await (
      await fetch('https://jsonplaceholder.typicode.com/todos/1')
    ).json();
    console.log(result);
  }

  setData(name: string) {
    this.nameList.push(name);
  }
  showNameList(){
    console.log(this.nameList)
  }
}
