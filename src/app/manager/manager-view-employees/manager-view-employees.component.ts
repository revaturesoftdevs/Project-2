import { AuthService } from './../../user-login/auth.service';
import { MgrDetails } from './../../user-login/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { EmployeeServiceService } from 'src/app/employee/employee-service.service';
import { Reimbursement } from 'src/app/employee/employee-view-reimb/reimbursement.model';
import { Employee } from 'src/app/employee/employee.model';
import { ManagerServiceService } from '../manager-service.service';
import { EmployeeHttpService } from 'src/app/employee/employee-http.service';

@Component({
  selector: 'manager-view-employees',
  templateUrl: './manager-view-employees.component.html',
  styleUrls: ['./manager-view-employees.component.css']
})
export class ManagerViewEmployeesComponent implements OnInit {
  currentAllEmployees: Employee[];
  employeenow: Reimbursement;
  constructor(private router:Router, private mgrService: ManagerServiceService,
    private authService:AuthService, private employeeService:EmployeeHttpService ) { 
    
    this.currentAllEmployees= [];
    this.employeenow={
      reimbursementId: 0,
      empId:0,
      mgrId:0,
      reimbursementDesc:"",
      reimbursementStatus:"",
      reimbursementAmt: 0
    }
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    // from session storage, manager Id
    let mgr = this.authService.getMgrDetails();
    this.mgrService.currentAllEmployees(mgr.mgrId).subscribe(response=>{

      this.currentAllEmployees=response;
    })
  }
  
  goToViewEmployee(){    
     this.mgrService.goToViewEmployee().subscribe(response=>{
      this.employeenow=response;
    })
    //this.router.navigate(['app-employee-profile',empId]);

  }

}
