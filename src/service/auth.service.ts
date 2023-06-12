import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

const AUTH_API = 'http://localhost:29155/Authenticate/api/v1/manager/';
 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      AUTH_API + 'Login',
      {
        username,
        password,
      }).pipe(map(user=>{
        if(user && user.token){
          localStorage.setItem('Token Info',JSON.stringify(user));
        }
        return user;
      }));
      //{ observe: 'response' }
      //httpOptions
    
   // );
    console.log(AUTH_API+'Login');
  }

  logout(): Observable<any> {
    localStorage.removeItem('Token Info');
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
