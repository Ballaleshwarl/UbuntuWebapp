import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestigateService {

  constructor(private http:HttpClient) { }

  getGridData(gridType:String):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {gridType:gridType};
    return this.http.post("http://localhost:8080/datalist/fetchDatalist",body,{headers: headers});
  }
}
  