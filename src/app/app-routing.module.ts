import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerViewEmployeesComponent } from './manager/manager-view-employees/manager-view-employees.component';
import { ManagerViewReimbComponent } from './manager/manager-view-reimb/manager-view-reimb.component';
import { ViewPendingReimbComponent } from './manager/view-pending-reimb/view-pending-reimb.component';
import { EmployeeViewReimbComponent } from './employee/employee-view-reimb/employee-view-reimb.component';

const routes: Routes = [
{path:"manager-view",component: ManagerViewEmployeesComponent},
{path:"employee-view-reimb",component: EmployeeViewReimbComponent },
{path:"manager-view-employees", component:ManagerViewEmployeesComponent},
{path:"view-pending-reimb", component:ViewPendingReimbComponent},
{path:"manager-view-reimb",component:ManagerViewReimbComponent},
              ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
