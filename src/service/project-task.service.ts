import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable,throwError}  from 'rxjs';
import { Projecttaskdetail } from 'src/model/projecttaskdetail'; 
import { StorageService } from 'src/service/storage.service';
import { environment } from 'src/environments/environment'; 


const baseUrl  = 'http://localhost:29155/ProjectTask/api/v1/manager/';
@Injectable({
  providedIn: 'root'
})
export class ProjectTaskService {
  private headers: HttpHeaders;
 
  todoListEndpoint: string = environment.todoListApi.endpoint;
  storageService: StorageService;

  constructor(private httpClient:HttpClient) {
    this.headers= new HttpHeaders({ 'Content-Type': 'application/json' })
  }

 GetAllProjectTaskDetails():Observable<Projecttaskdetail[]>
  {  
    let headers = new HttpHeaders().
   // this.loadToken();
   // headers.
   //set('Authorization', localStorage.getItem("Token Info") ||'{}');
    append('Content-Type', 'application/json');
    return this.httpClient.get<Projecttaskdetail[]>(this.todoListEndpoint + 'List', {headers: headers});
  }

  
}
