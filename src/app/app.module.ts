import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectTaskService } from 'src/service/project-task.service';
import { AuthService } from 'src/service/auth.service';
import { StorageService } from 'src/service/storage.service';
import { AuthorizationCheck } from 'src/service/authorizationCheck';
import { FormsModule } from '@angular/forms';
import {httpInterceptor} from 'src/app/Interceptor/httpInterceptor';

import { environment } from 'src/environments/environment';  
import {MsalGuard, MsalModule, MsalInterceptor,MsalRedirectComponent, MSAL_INSTANCE } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProjecttaskListComponent } from './projecttask-list/projecttask-list.component';
import { LoginComponent } from './login/login.component';
import { MsalService } from '@azure/msal-angular';  


//export const protectedResourceMap: any =  
  //[  
    //[environment.baseUrl, environment.scopeUri  
    //],
    //[environment.todoListApi.endpoint,environment.todoListApi.scopeUri]  
  //];  
  const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;
  export function MSALInstanceFactory():IPublicClientApplication
  {
    return new PublicClientApplication({
      auth:{
      clientId:"e330de8d-ff8c-480c-9563-9b8d54b1ffe4",
      redirectUri:'http://localhost:29159/projecttask-list',
      postLogoutRedirectUri:"http://localhost:4200/"

    }
  });
}
@NgModule({
  declarations: [
    AppComponent,
    ProjecttaskListComponent,
    LoginComponent
  ],
  imports: [
    

    FormsModule,
    //BrowserModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    //AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    MsalModule
  ],
  providers: [
    
     
    {  
      provide: MSAL_INSTANCE, useFactory : MSALInstanceFactory
    } ,

    //  { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
     
     // AuthorizationCheck, AuthService,
     MsalService,
    ProjectTaskService,
    StorageService,
  HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
