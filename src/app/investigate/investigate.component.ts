import { Component, ViewChild } from '@angular/core';
import { InvestigateService } from '../investigate.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';

interface gridTabs{
  type:String;
}
interface GlobalUser{
  firstName:String;
  lastName:String;
  department:String;
  employeeId:String;
  riskscore:String;
}
@Component({
  selector: 'app-investigate',
  templateUrl: './investigate.component.html',
  styleUrls: ['./investigate.component.css']
})
export class InvestigateComponent {
displayedColumns: string[] = ['firstName', 'lastName', 'department', 'employeeId', 'riskscore'];
options:gridTabs[]=[];
globalUsers !:MatTableDataSource<GlobalUser>;
@ViewChild(MatPaginator) paginator !:MatPaginator;
@ViewChild(MatSort) sorter !:MatSort;

constructor(private investigateService:InvestigateService){
  this.options.push({type:'USERS'});
  this.options.push({type:'ACTIVITES'});
  this.options.push({type:'ANOMALIES'});
  this.options.push({type:'ACCOUNTS'});

}
onClick(option:any){
  if(option){
    switch(option.type){
      case "USERS":
        this.getUsers(option.type);
    }
  }
}

getUsers(gridType:any){
 this.investigateService.getGridData(gridType).subscribe(
  (res)=>{
    console.log(res);
    this.globalUsers = new MatTableDataSource<GlobalUser>(res);
    this.globalUsers.paginator = this.paginator;
    this.globalUsers.sort = this.sorter;
  },
  (error)=>{

  }
 );
}

getRiskScoreClass(riskscore: number): string {
  if (riskscore === 0) {
    return 'low-risk';
  } else if (riskscore > 80) {
    return 'high-risk';
  } else if (riskscore > 50) {
    return 'medium-risk';
  }
  return '';
}

}
