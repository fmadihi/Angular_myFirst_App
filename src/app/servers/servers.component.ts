import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
// selector: 'app-servers',
// را میتوان به 3 روش صدا زد
// 1-----selector: 'app-servers', --------- <app-servers></app-servers>
// 2------- selector: '[app-servers]'   ----------   <div app-servers></div>
// 3------- selector: '.app-servers',  ----------  <div class='app-servers'></div>

/************ */
// نحوه استایل دهی
// با استتفاده از  styleUrl & styleUrls
// styleUrl: './servers.component.css'
// styleUrls: ['./servers.component.css']
// میتوانید چند تا فایل css بدیم
// و مورد آخر به صورتز زیر است که برای مواقعی است که استایل هامو.ن خیلی کم باشن
// styles: [
//     `
//       p {
//         color: red;
//       }
//     `,
//   ],
@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  imports: [ServerComponent],
  templateUrl: './servers.component.html',
  // styleUrl: './servers.component.css'
  // styleUrls: ['./servers.component.css']
  styles: [
    `
      p {
        color: red;
      }
    `,
  ],
})

// دیتا بایندینگ
//  در اینجا اتریبیوت های تگ ها داخل []
// قرار میگیره و متغیری که در کلاس تعریف کردیم درون
// ""
// قرار میگیره

export class ServersComponent {
    accountImg = 'images/account.png';
    isAllowed = false

    constructor(){
      setTimeout(() => {
        return this.isAllowed=true
      }, 2000);
    }
}
