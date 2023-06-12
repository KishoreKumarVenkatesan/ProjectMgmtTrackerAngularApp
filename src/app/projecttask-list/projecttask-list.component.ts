import { Component,OnDestroy,OnInit } from '@angular/core';
import { Projecttaskdetail } from 'src/model/projecttaskdetail';
import { ProjectTaskService } from 'src/service/project-task.service';
import { environment } from 'src/environments/environment'; 
import { StorageService } from 'src/service/storage.service';
import { MsalService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';

 

@Component({
  selector: 'app-projecttask-list',
  templateUrl: './projecttask-list.component.html',
  styleUrls: ['./projecttask-list.component.css']
})
export class ProjecttaskListComponent implements OnInit,OnDestroy{
//  todoListEndpoint: string = environment.todoListApi.endpoint;
projecttasks?:Projecttaskdetail[];
apicallSub$:Subscription;
title='';
//authToken: string;
constructor(private projectTaskService:ProjectTaskService,private storageService: MsalService){}

ngOnInit():void{
 // this.authToken = this.storageService.getUser().body.token;
   
this.retrieveProjectTask();
}

retrieveProjectTask(): void {
this.apicallSub$=  this.projectTaskService.GetAllProjectTaskDetails()
      .subscribe({
        next: (data) => {
          this.projecttasks = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
}

 ngOnDestroy(): void {
    this.apicallSub$.unsubscribe();
 }
}
