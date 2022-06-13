import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reimbursement } from '../employee-view-reimb/reimbursement.model';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

 

  constructor() { }

  ngOnInit(): void {
  }

}
