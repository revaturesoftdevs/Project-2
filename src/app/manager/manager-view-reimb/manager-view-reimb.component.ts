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
  
  resolvedReim: Reimbursement[];
  constructor(private router:Router, private mgrService: ManagerServiceService) { 
    this.resolvedReim=[];
  }

  ngOnInit(): void {
    this.viewResolvedReim();
  }

  viewResolvedReim(){
    this.mgrService.resolvedReim().subscribe(response=>{
      this.resolvedReim=response;
    })
  }


}
