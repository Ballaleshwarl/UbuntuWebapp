import { Component, Input, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import * as Papa from 'papaparse';
import { PipelineService } from '../pipeline.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';
import { ResourceService } from '../resource.service';


@Component({
  selector: 'app-load-pipeline',
  templateUrl: './load-pipeline.component.html',
  styleUrls: ['./load-pipeline.component.css']
})
export class LoadPipelineComponent implements OnInit {
  @Input() IngestionType!: String;
  selectedFile: File | null = null;
  uploadClicked: any;
  csvJsonData: any;
  resourceFlyout:boolean = false;
  resources:any;
  selectedResource:string="";
  showUpload:boolean=false;
  enableCsvCard:boolean= false;

  constructor(private pipelineService: PipelineService, private dialogRef: MatDialog,private resourceService:ResourceService) {

  }

  ngOnInit(): void {
    this.loadIngestionTypecomponets(this.IngestionType)
  }

  loadIngestionTypecomponets(ingestionType: String) {
    if (this.IngestionType) {
      switch (this.IngestionType) {
        case 'USER':
          this.uploadClicked = 'USER';
          this.enableCsvCard = true;   
          break;
        case 'ACTIVITY':
          this.uploadClicked = 'ACTIVITY';  
          break;
      }
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const csvData = reader.result as string;
        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            this.csvJsonData = result.data
            if(this.uploadClicked == 'USER'){
              this.ingestUsers(this.csvJsonData); // USER data
            }else if(this.uploadClicked == 'ACTIVITY'){
              this.ingestActivity(this.csvJsonData,this.selectedResource)  //ACTIVITY data
            }
            

          }
        });
      };
      reader.readAsText(this.selectedFile);
    }

  }

  ingestUsers(data: any) {
    this.pipelineService.ingestData(data).subscribe(
      (response: any) => {

        if (response && response["ingested users"] == -1) {
          this.dialogRef.open(NotificationComponent, {
            data: {
              notificationObject: "Some issue Occurred in ingesting !!!"
            }
          });
        } else if (response && response["ingested users"] > 0) {

          this.dialogRef.open(NotificationComponent, {
            data: {
              notificationObject: "Users Ingested -> " + response["ingested users"]
            }
          });
        }

      },
      (error: any) => {
        console.log(Error);
      }

    )

  }


  loadResources(){
    this.resourceFlyout = true;
    this.resourceService.loadResources().subscribe(
      (res)=>{
        this.resources = res;
        this.resources.unshift('select');
      }
    )

  }

  onChange(event:any){

    if( event.target.value){
      this.selectedResource = event.target.value;
    }
    this.resourceFlyout = false;
    this.showUpload = true;
    
  }

  uploadActivity(){
    this.enableCsvCard = true;  
   
  }

  ingestActivity(data:any,selectedResource:string){
    this.pipelineService.ingestActivity(data,selectedResource).subscribe(
      (res)=>{

      }
    );
  }

}
