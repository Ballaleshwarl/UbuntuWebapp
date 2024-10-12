import { Component, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResourceService } from 'src/app/resource.service';

@Component({
  selector: 'app-load-model',
  templateUrl: './load-model.component.html',
  styleUrls: ['./load-model.component.css']
})
export class LoadModelComponent {
  showFlyout: boolean = false;
  showModelForm: boolean = false;
  items: any = [];
  selectedOptionForBox !: String;
  boxValue !: String;
  entityValue: any;
  resourceValue :any;
  showEntityBox: boolean = false;
  showResourceBox: boolean = false;
  showModelBox : boolean = false;
  modelType:any;
  modelForm !: FormGroup;


  constructor(private resourceService: ResourceService, private fb:FormBuilder) {
    this.modelForm =  fb.group({
      modelName :[''],
      eventdesc : [''],
      riskscore : [''],
      entityAttribute : ['']
    })
   }


  onSelect(e: any) {
    const eleRef = e.target as HTMLElement;
    if (eleRef.tagName == "LI") {
      switch (eleRef.textContent) {
        case "Entity":
          this.showEntityBox = true;
          break;
        case "Resource":
          this.showResourceBox = true;
          break;
        case "Model":
          this.showModelBox = true;
          break;
      }
    }
  }

  onSelectedItem(e: any) {
    const eleRef = e.target as HTMLElement;

    if (eleRef.tagName == "LI") {
      switch (this.boxValue) {
        case "Entity":
          this.entityValue = eleRef.textContent;
          this.showFlyout = false;
          break;
        case "Resource":
          this.resourceValue = eleRef.textContent;
          this.showFlyout = false;
          break;
        case "Model":
          this.showModelForm = true;
          this.modelType = eleRef.textContent;
          this.showFlyout = false;
          break;
      }
    }
  }

  OnEntityBoxClick(e: any) {
    let tempSet =  new Set();
    this.showFlyout = true;
      tempSet.add("USER");
      tempSet.add("ENTITY");
      this.items = Array.from(tempSet); 
    this.boxValue = "Entity";


  }

  OnResourceBoxClick() {
    this.showModelForm = false;
    this.boxValue = "Resource";
    this.showFlyout = true;
    this.items = [];
    this.resourceService.loadResources().subscribe((res) => {
      if (res) {
        res.forEach((element: String) => {
          this.items.push(element);
        });
      }
    })
  }

  OnModelBoxClick(){
    this.boxValue = "Model";
    this.showFlyout = true;
    let tempSet = new Set();
    tempSet.add("USER MODEL");
    tempSet.add("ENTITY MODEL");
    this.items = Array.from(tempSet);

  }
  submitForm(){
    let obj = {
      "form" : this.modelForm.value, 
      "Entity" :this.entityValue ,
      "resource": this.resourceValue 
    }
     

  }

  closeForm(){
    this.showModelForm = false;
  }

}



