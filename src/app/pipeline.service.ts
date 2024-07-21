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
}
