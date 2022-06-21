import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeHttpService } from '../employee-http.service';
import { Reimbursement } from '../employee-view-reimb/reimbursement.model';
import { EmpDetails } from 'src/app/user-login/user.model';
import { AuthService } from 'src/app/user-login/auth.service';

@Component({
  selector: 'employee-create-reimb',
  templateUrl: './employee-create-reimb.component.html',
  styleUrls: ['./employee-create-reimb.component.css']
})
export class EmployeeCreateReimbComponent implements OnInit {

  newReimbursement: Reimbursement = {
    reimbursementId: 0,
    empId: 0,
    mgrId: 0,
    reimbursementDesc: '',
    reimbursementStatus: '',
    reimbursementAmt: 0
  }

  currentEmp: EmpDetails = {
    empId: 0,
    mgrId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empPassword: ''
  }

  constructor(private employeeService: EmployeeHttpService, 
              private router: Router,
              private authService: AuthService,
              private employeeHttpService: EmployeeHttpService) { }

  ngOnInit(): void {
  }

  displayProfile(empId: any){
    let empData = this.authService.getEmpDetails();
    this.employeeHttpService.getEmployee(empData.empId).subscribe(response=>{
      this.currentEmp=response;
    });
  }

  createANewReimbursement() {
    this.employeeService.addReimb(this.newReimbursement).subscribe((response) => {
      //this response is not of much use
      console.log(response);
      // we need a fresh fetch of all books from the database
      this.router.navigate(['employee-view-reimb']);

      // clear the Add Form
      this.newReimbursement = {
        reimbursementId: 0,
        empId: 0,
        mgrId: 0,
        reimbursementDesc: '',
        reimbursementStatus: '',
        reimbursementAmt: 0
      };

      // toggle/hide the Add Form
      // this.shouldDisplay = false;
    })

  }
}
}
