import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { from } from 'rxjs';
import { ProjecttaskListComponent } from './projecttask-list/projecttask-list.component';

const routes: Routes = [
 
  {path:'projecttask-list', component: ProjecttaskListComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
   exports: [RouterModule]
  
})
export class AppRoutingModule { }
