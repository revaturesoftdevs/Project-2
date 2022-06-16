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

const routes: Routes = [
  { path: "manager-view", component: ManagerViewEmployeesComponent },
  { path: "employee-view-reimb", component: EmployeeViewReimbComponent },
  { path: "manager-view-employees", component: ManagerViewEmployeesComponent },
  { path: "view-pending-reimb", component: ViewPendingReimbComponent },
  { path: "manager-view-reimb", component: ManagerViewReimbComponent },
  { path: "login",component:LoginComponent},
  { path: "update-profile", component: EmployeeProfileComponent},
  { path: "employee-profile",component:EmployeeProfileComponent},
  { path: "logout", component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
