import { LogoutComponent } from './user-login/logout/logout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerViewEmployeesComponent } from './manager/manager-view-employees/manager-view-employees.component';
import { ManagerViewReimbComponent } from './manager/manager-view-reimb/manager-view-reimb.component';
import { ViewPendingReimbComponent } from './manager/view-pending-reimb/view-pending-reimb.component';
import { EmployeeViewReimbComponent } from './employee/employee-view-reimb/employee-view-reimb.component';
import { EmployeeCreateReimbComponent } from './employee/employee-create-reimb/employee-create-reimb.component';
import { LoginComponent } from './user-login/login/login.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { UpdateProfileComponent } from './employee/update-profile/update-profile.component';
import { AuthenticationGuard } from './user-login/authentication.guard';

const routes: Routes = [

  { path: "manager-view", component: ManagerViewEmployeesComponent, canActivate:[AuthenticationGuard]},
  { path: "employee-view-reimb", component: EmployeeViewReimbComponent, canActivate:[AuthenticationGuard] },
  { path: "manager-view-employees", component: ManagerViewEmployeesComponent, canActivate:[AuthenticationGuard] },
  { path: "view-pending-reimb", component: ViewPendingReimbComponent, canActivate:[AuthenticationGuard] },
  { path: "manager-view-reimb", component: ManagerViewReimbComponent, canActivate:[AuthenticationGuard] },
  { path: "login",component:LoginComponent},
  { path: "update-profile", component: UpdateProfileComponent, canActivate:[AuthenticationGuard]},
  { path: "employee-profile",component:EmployeeProfileComponent, canActivate:[AuthenticationGuard]},
  { path: "logout", component:LogoutComponent},
  { path: "employee-create-reimb", component:EmployeeCreateReimbComponent, canActivate:[AuthenticationGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
