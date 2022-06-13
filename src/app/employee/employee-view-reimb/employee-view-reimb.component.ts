import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Reimbursement } from './reimbursement.model';

@Component({
  selector: 'employee-view-reimb',
  templateUrl: './employee-view-reimb.component.html',
  styleUrls: ['./employee-view-reimb.component.css']
})
export class EmployeeViewReimbComponent implements OnInit {

  allReimbursements: Reimbursement[];

  constructor(private employeeService: EmployeeServiceService) {
    this.allReimbursements = [];
  }

  ngOnInit(): void {
    this.employeeService.getAllPendingReimbursements().subscribe(response => {
      console.log(response);
      this.allReimbursements = response;
    })
  }

}
