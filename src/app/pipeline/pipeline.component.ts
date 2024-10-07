import { Component, createComponent, OnInit, ViewChild } from '@angular/core';
import { LoadPipelineComponent } from '../load-pipeline/load-pipeline.component';
import { DynamicHostDirective } from '../dynamic-host.directive';


interface IngestionType{
type:String
}

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.css'],
})
export class PipelineComponent  implements OnInit{

  @ViewChild(DynamicHostDirective, { static: true }) appDynamicHost!: DynamicHostDirective;
  selectedValue:any;
  options :IngestionType[]=[];

constructor(){
  this.options.push({type:'Select Ingestion'})
  this.options.push({type:'USER'});
  this.options.push({type:'ACTIVITY'});
}

ngOnInit(): void {
 
}

checkToDisable(option :any){
  return option.type === 'Select Ingestion';
}

onSelect(event:Event){

  let componentFactory;
  const viewContainerRef = this.appDynamicHost.viewContainerRef;
  viewContainerRef.clear();
  const selectedElement = event.target as HTMLSelectElement;
  this.selectedValue = selectedElement.value; 
  const loadedComponent = viewContainerRef.createComponent(LoadPipelineComponent);
  loadedComponent.instance.IngestionType = this.selectedValue; 
}
}
