import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent {
  @ViewChild('ulComponent',{static: false}) ulComponent !:ElementRef
  private MODEL :String = "Create Model";
  showFlyout = false;
 loadModel:boolean = false;

  toggleFlyout() {
    this.showFlyout = !this.showFlyout;
  }

  onSelectCanvas(e:any){
    this.showFlyout = !this.showFlyout;
    const nativeEle =  e.target as HTMLElement;

    if(nativeEle.tagName == "LI" && nativeEle.textContent == this.MODEL){
      this.loadModel = true;
    }

  }
}
