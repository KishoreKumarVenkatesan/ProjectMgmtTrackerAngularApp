import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable,throwError}  from 'rxjs';
import { Projecttaskdetail } from 'src/model/projecttaskdetail'; 



@Injectable({
  providedIn: 'root'
})
export class ProjectTaskService {
  private headers: HttpHeaders;
  private baseUrl:string  = 'http://localhost:29155/ProjectTask/api/v1/manager?PageNumber=1&PageSize=3';

  constructor(private httpClient:HttpClient) {
    this.headers=new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

 GetAllProjectTaskDetails():Observable<any[]>
  {  
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}
