import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent {
  showFlyout = false;
  constructor(private router:Router){}
  onClick(){
    this.router.navigate(['resource']);
  }

  toggleFlyout() {
    this.showFlyout = !this.showFlyout;
  }

}
