import { ManagerServiceService } from './manager/manager-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { EmployeeViewReimbComponent } from './employee/employee-view-reimb/employee-view-reimb.component';
import { EmployeeCreateReimbComponent } from './employee/employee-create-reimb/employee-create-reimb.component';
import { ManagerViewEmployeesComponent } from './manager/manager-view-employees/manager-view-employees.component';
import { ManagerHeaderComponent } from './manager/manager-header/manager-header.component';

import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './user-login/login/login.component';
import { ManagerViewReimbComponent } from './manager/manager-view-reimb/manager-view-reimb.component';


import { FormsModule } from '@angular/forms';
import { EmployeeServiceService } from './employee/employee-service.service';
import { MainLoginComponent } from './login/main-login/main-login.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    EmployeeHeaderComponent,
    EmployeeViewReimbComponent,
    EmployeeCreateReimbComponent,
    ManagerViewEmployeesComponent,

    ManagerViewPendingReimbComponent,
    ManagerHeaderComponent,
    MainLoginComponent,
    

    ManagerViewReimbComponent,
    ManagerHeaderComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ManagerServiceService,EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
