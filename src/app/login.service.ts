import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

  constructor(private http:HttpClient) { }

  saveOrUpdateUser(data:any):Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   return  this.http.post<any>(`http://localhost:8080/login/saveUser`,data,{headers :headers})

  }

  loginUser(data:any):Observable<any>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.post<any>(`http://localhost:8080/login/loginUser`,data,{headers:headers});
  }
}
