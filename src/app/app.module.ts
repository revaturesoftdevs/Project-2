import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { EmployeeViewReimbComponent } from './employee/employee-view-reimb/employee-view-reimb.component';
import { EmployeeCreateReimbComponent } from './employee/employee-create-reimb/employee-create-reimb.component';
import { ManagerViewEmployeesComponent } from './manager/manager-view-employees/manager-view-employees.component';
import { LoginComponent } from './user-login/login/login.component';
import { ManagerViewReimbComponent } from './manager/manager-view-reimb/manager-view-reimb.component';
import { ViewPendingReimbComponent } from './manager/view-pending-reimb/view-pending-reimb.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './user-login/logout/logout.component';
import { UpdateProfileComponent } from './employee/update-profile/update-profile.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeProfileComponent,
    EmployeeViewReimbComponent,
    EmployeeCreateReimbComponent,
    ManagerViewEmployeesComponent,
    ManagerViewReimbComponent,
    LoginComponent,
    ViewPendingReimbComponent,
    LogoutComponent,
    UpdateProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

