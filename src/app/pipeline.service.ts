import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {

  constructor(private http:HttpClient) { }

  ingestData(data:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post("http://localhost:8080/pipeline/ingestData",JSON.stringify(data),{headers:headers});
  }

  ingestActivity(data:any,selectedResource:string):Observable<any>{
  const formData =  new FormData();
  formData.set("data",data);
  formData.set("selectedResource",selectedResource);
  return this.http.post("http://localhost:8080/pipeline/ingestActivity",formData);
  }
}
