import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/employee/employee-view-reimb/reimbursement.model';
import { ManagerServiceService } from '../manager-service.service';

@Component({
  selector: 'manager-view-reimb',
  templateUrl: './manager-view-reimb.component.html',
  styleUrls: ['./manager-view-reimb.component.css']
})
export class ManagerViewReimbComponent implements OnInit {
  
  storeMessage: string = '';
  resolvedReim: Reimbursement[];
  constructor(private router:Router, private mgrService: ManagerServiceService) { 
    this.resolvedReim=[];
  }

  ngOnInit(): void {
    this.viewResolvedReim();
  }

  viewResolvedReim(){
    this.mgrService.resolvedReim().subscribe(
      {
        next: response=>{
        this.resolvedReim=response;
        },
      error: (error) => {
        this.storeMessage = error.error.errorMessage;
      }
    })
  }


}
