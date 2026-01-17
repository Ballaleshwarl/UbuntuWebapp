import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent {
  showFlyout = false;
  myList:any=[];

  constructor(private router:Router){}
  onClick(data:any){
    this.myList["first"] = 10
    this.router.navigate(['resource']);
  }

  toggleFlyout() {
    this.showFlyout = !this.showFlyout;
  }

}
