import { TestBed,inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ProjectTaskService } from './project-task.service';
import { Projecttaskdetail } from 'src/model/projecttaskdetail';

describe('ProjectTaskService', () => {
  let httpTestingController:HttpTestingController;
  let prjTaskService: ProjectTaskService;
  let baseUrl = 'http://localhost:29155/ProjectTask/api/v1/manager/List';
  let projectTask:Projecttaskdetail;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    prjTaskService = TestBed.inject(ProjectTaskService);
  });

  httpTestingController=TestBed.get(HttpTestingController);

  projectTask ={
    "id": "2",
    "memberName": "Arul kumar",
    "taskID": 1002,
    "taskName": "Web",
    "deliverables": "Services",
    "yearsOfExperience": "13",
    "skillset": "SQL,DotNet",
    "currentProfileDescription": "Senior Developer",
    "allocationPercentage": 60,
    "projectStartDate": new Date("2023-02-23T10:00:00"),
    "projectEndDate": new Date("2023-03-23T00:00:00"),
    "taskStartDate": new Date("2023-02-23T00:00:00"),
    "taskEndDate": new Date("2023-03-23T00:00:00")
 
  };


beforeEach(inject(
  [ProjectTaskService],
  (service: ProjectTaskService) => {
    prjTaskService   = service;
  }
));
  
let result: Projecttaskdetail[];
  it('should be created', () => {
   
    prjTaskService.GetAllProjectTaskDetails().subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: "GET",
      url: baseUrl
    });
   
    req.flush([projectTask]);
   
    expect(result[0]).toEqual(projectTask);
  });
  let error: string;
  it("should throw error", () => {
    
    prjTaskService.GetAllProjectTaskDetails().subscribe(null, e => {
      error = e;
    });
   
    let req = httpTestingController.expectOne("http://localhost:29155/ProjectTask/api/v1/manager/List");
    req.flush("Something went wrong", {
      status: 404,
      statusText: "Network error"
    });
   
    expect(error.indexOf("Error retrieving travellers data") >= 0).toBeTruthy();
  });
});
