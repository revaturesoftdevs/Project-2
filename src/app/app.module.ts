import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeHeaderComponent } from './employee/employee-header/employee-header.component';
import { EmployeeViewReimbComponent } from './employee/employee-view-reimb/employee-view-reimb.component';
import { EmployeeCreateReimbComponent } from './employee/employee-create-reimb/employee-create-reimb.component';
import { ManagerViewEmployeesComponent } from './manager/manager-view-employees/manager-view-employees.component';
import { ManagerViewPendingReimbComponent } from './manager/manager-view-pending-reimb/manager-view-pending-reimb.component';
import { ManagerHeaderComponent } from './manager/manager-header/manager-header.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    EmployeeHeaderComponent,
    EmployeeViewReimbComponent,
    EmployeeCreateReimbComponent,
    ManagerViewEmployeesComponent,
    ManagerViewPendingReimbComponent,
    ManagerHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
