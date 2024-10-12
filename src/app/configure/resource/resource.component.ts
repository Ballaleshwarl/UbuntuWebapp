import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceService } from '../../resource.service';
import { MatDialog } from '@angular/material/dialog';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent {
  
resourceForm:FormGroup;
enableResorceForm:boolean = false;
  
  
  constructor(private fb:FormBuilder,private resourceService:ResourceService,private dialogRef:MatDialog){
    this.resourceForm = this.fb.group({
      resource:['', [Validators.required]]
    });
  }

  onSubmit(){
      if(this.resourceForm.valid){
        this.resourceService.createResource(this.resourceForm.value['resource']).subscribe(
          (res)=>{
            if(res['status'] == 'success'){
              this.dialogRef.open(NotificationComponent,{
                data :{
                  notificationObject : "Resource Created Successfully"
                }
              })
              this.enableResorceForm = false;
            }else
            {
              this.dialogRef.open(NotificationComponent,{
                data: {
                  notificationObject: "Some Error Occured !!"
                }
              })
              this.enableResorceForm = false;
            }
          }
        );

      }
  }

  AddResource(){
    this.enableResorceForm =  true;
  }

}
