import { Component,OnInit } from '@angular/core';
import { Projecttaskdetail } from 'src/model/projecttaskdetail';
import { ProjectTaskService } from 'src/service/project-task.service';
 

@Component({
  selector: 'app-projecttask-list',
  templateUrl: './projecttask-list.component.html',
  styleUrls: ['./projecttask-list.component.css']
})
export class ProjecttaskListComponent implements OnInit{

projecttasks?:Projecttaskdetail[];

title='';

constructor(private projectTaskService:ProjectTaskService){}

ngOnInit():void{
this.retrieveProjectTask();
}

retrieveProjectTask(): void {
  this.projectTaskService.GetAllProjectTaskDetails()
      .subscribe({
        next: (data) => {
          this.projecttasks = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
}
 
}
