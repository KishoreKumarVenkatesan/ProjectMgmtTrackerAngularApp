import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { from } from 'rxjs';
import { ProjecttaskListComponent } from './projecttask-list/projecttask-list.component';
import { LoginComponent } from './login/login.component';
import { MsalGuard } from '@azure/msal-angular'; 
import { UserauthguardGuard } from './userauthguard.guard';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'projecttask-list', component: ProjecttaskListComponent}
// {path:'login',component: LoginComponent, canActivate: [MsalGuard]},
  //{path:'projecttask-list', component: ProjecttaskListComponent, canActivate: [MsalGuard]},
 
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
   exports: [RouterModule]
  
})
export class AppRoutingModule { }
