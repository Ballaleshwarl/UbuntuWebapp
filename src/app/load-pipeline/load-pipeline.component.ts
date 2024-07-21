import { Component, Input, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import * as Papa from 'papaparse';
import { PipelineService } from '../pipeline.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../notification/notification.component';


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

  constructor(private pipelineService: PipelineService, private dialogRef: MatDialog) {

  }

  ngOnInit(): void {
    this.loadIngestionTypecomponets(this.IngestionType)
  }

  loadIngestionTypecomponets(ingestionType: String) {
    if (this.IngestionType) {
      switch (this.IngestionType) {
        case 'USER':
          this.uploadClicked = 'USER';

          break;
        case 'ACTIVITY':

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
            this.ingestUsers(this.csvJsonData); // JSON data

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
          console.log("not ingesting");
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

}
