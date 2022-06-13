import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../employee-view-reimb/reimbursement.model';

@Component({
  selector: 'employee-create-reimb',
  templateUrl: './employee-create-reimb.component.html',
  styleUrls: ['./employee-create-reimb.component.css']
})
export class EmployeeCreateReimbComponent implements OnInit {
  newReimbursement: Reimbursement={
    reimbursementId: 0,
    empId:0,
    mgrId:0,
    reimbursementDesc:'',
    reimbursementStatus:'',
    reimbursementAmt:0

  }
  constructor() { }

  ngOnInit(): void {
  }

}
