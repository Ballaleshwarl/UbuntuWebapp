import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor(private http:HttpClient) { }

  saveModel(obj:any,form:any):Observable<any>{
    const formData =  new FormData;
    formData.append("entity",obj.entity);
    formData.append("resource",obj.resource);
    formData.append("modelName",form.modelName);
    formData.append("riskScore",form.riskscore);
    formData.append("resourceAttribute",form.entityAttribute);
    formData.append("eventDesc",form.eventdesc);
  return this.http.post("http://localhost:8080/api/model/saveModel",formData);
  }

  runIndividualModel(id:number){
    return this.http.post("http://localhost:8080/api/model/runModel",id);
  }
}
