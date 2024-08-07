import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {

  notificationObject:any;

  constructor(@Inject(MAT_DIALOG_DATA ) public data:any){
    this.notificationObject = data.notificationObject;
  }

}
