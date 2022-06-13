import { MainLoginComponent } from './login/main-login/main-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewReimbComponent } from './employee/employee-view-reimb/employee-view-reimb.component';

import { ManagerViewEmployeesComponent } from './manager/manager-view-employees/manager-view-employees.component';

const routes: Routes = [{path:"manager-view",component: ManagerViewEmployeesComponent},
{path:"manager-view",component: ManagerViewEmployeesComponent},
{path:"employee-view-reimb",component: EmployeeViewReimbComponent },
{path: "main-login",component:MainLoginComponent}


              ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
