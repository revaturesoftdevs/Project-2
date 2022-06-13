import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from '../employee-view-reimb/reimbursement.model';

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

  constructor(private employeeService: EmployeeHttpService, private router: Router) { }

  ngOnInit(): void {
  }

  createANewReimbursement() {
    this.employeeService.createReimbursement(this.newReimbursement).subscribe((response) => {
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
