import { Component, OnInit } from '@angular/core';
import { Reimbursement } from './reimbursement.model';
import { EmployeeHttpService } from '../employee-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-view-reimb',
  templateUrl: './employee-view-reimb.component.html',
  styleUrls: ['./employee-view-reimb.component.css']
})
export class EmployeeViewReimbComponent implements OnInit {

<<<<<<< Updated upstream
  
  pendReimb: Reimbursement[];  
  shouldDisplay:boolean= false;
  testEmp =5;
  newReimb:Reimbursement ={
    reimbursementId: 0,
    empId:0,
    mgrId:0,
    reimbursementDesc:'',
    reimbursementStatus:'',
    reimbursementAmt: 0

    };
  
  constructor(private employeeService:EmployeeHttpService) {
=======
  pendReimb: Reimbursement[];
  resolvedReimb: Reimbursement[];
  shouldDisplay: boolean = false;
  testEmp = 5;
  newReimb: Reimbursement = {
  reimbursementId: 0,
  empId: 0,
  mgrId: 0,
  reimbursementDesc: '',
  reimbursementStatus: '',
  reimbursementAmt: 0

  };

  constructor(private employeeService: EmployeeHttpService, private router: Router) {
>>>>>>> Stashed changes
    this.pendReimb = [];
    this.resolvedReimb = [];
  }
  ngOnInit(): void {
    this.employeeService.getPendReimb().subscribe((response) => { this.pendReimb = response });
    this.employeeService.getResolvedReimb().subscribe((response) => { this.resolvedReimb = response });
  }

  getPendReimb() {
    this.employeeService.getPendReimb();
  }

  getResolvedReimbursement() {
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
    this.employeeService.addReimb(this.newReimb).subscribe((response) => {
      console.log(response);
      this.ngOnInit();
      this.newReimb = {
        reimbursementId: 0,
        empId: 0,
        mgrId: 0,
        reimbursementDesc: '',
        reimbursementStatus: '',
        reimbursementAmt: 0

      }
      this.shouldDisplay = false;
    })

  }
<<<<<<< Updated upstream
  ngOnInit(): void {
    this.employeeService.getPendReimb().subscribe((response)=>{ this.pendReimb = response});
   }
 

 
=======

>>>>>>> Stashed changes
}

