import { Component, OnInit } from '@angular/core';
import { Reimbursement } from './reimbursement.model';
import { EmployeeHttpService } from '../employee-http.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user-login/auth.service';
import { EmpDetails } from 'src/app/user-login/user.model';

@Component({
  selector: 'employee-view-reimb',
  templateUrl: './employee-view-reimb.component.html',
  styleUrls: ['./employee-view-reimb.component.css']
})
export class EmployeeViewReimbComponent implements OnInit {

  pendReimb: Reimbursement[];  
  resolvedReimb: Reimbursement[];

  shouldDisplay:boolean= false;

  newReimb:Reimbursement ={
    reimbursementId: 0,
    empId:0,
    mgrId:0,
    reimbursementDesc:'',
    reimbursementStatus:'',
    reimbursementAmt: 0
  };
  
  constructor(private employeeService: EmployeeHttpService, 
              private router: Router,
              private authService: AuthService,) {
    this.resolvedReimb = [];
    this.pendReimb = [];
  }

  ngOnInit(): void {
    this.employeeService.getPendReimb().subscribe((response) => { this.pendReimb = response });
    this.employeeService.getResolvedReimb().subscribe((response) => { this.resolvedReimb = response });
  }

  displayForm() {
    if (this.shouldDisplay) {
      this.shouldDisplay = false;
    } else {
      this.shouldDisplay = true;
    }
  }

  addReimb() {
    let empSession = this.authService.getEmpDetails();

    let newEmpReimb: Reimbursement = {
      reimbursementId: 0,
      empId: empSession.empId,
      mgrId: empSession.mgrId,
      reimbursementDesc: this.newReimb.reimbursementDesc,
      reimbursementStatus: 'pending',
      reimbursementAmt: this.newReimb.reimbursementAmt
    }

    this.newReimb = {
      reimbursementId: 0,
      empId: 0,
      mgrId: 0,
      reimbursementDesc: '',
      reimbursementStatus: '',
      reimbursementAmt: 0
    }

    this.employeeService.addReimb(newEmpReimb).subscribe((response) => {
      this.ngOnInit();
      this.shouldDisplay = false;
    });
  }
}

