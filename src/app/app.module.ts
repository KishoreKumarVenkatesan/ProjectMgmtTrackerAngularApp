import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectTaskService } from 'src/service/project-task.service';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProjecttaskListComponent } from './projecttask-list/projecttask-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjecttaskListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    //AppRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProjectTaskService,
  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
