import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http:HttpClient) { }

  createResource(data:any):Observable<any>{
    // const headers = new HttpHeaders({'Content-Type':'application/json'});
    const formData = new FormData();
    formData.append('resource',data);
    return this.http.post("http://localhost:8080/resource/saveOrUpdateResource",formData);
  }

  loadResources():Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.get("http://localhost:8080/resource/loadResources",{headers:headers});
  }
}
