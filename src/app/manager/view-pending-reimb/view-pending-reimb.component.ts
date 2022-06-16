import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/employee/employee-view-reimb/reimbursement.model';
import { ManagerServiceService } from '../manager-service.service';

@Component({
  selector: 'view-pending-reimb',
  templateUrl: './view-pending-reimb.component.html',
  styleUrls: ['./view-pending-reimb.component.css']
})
export class ViewPendingReimbComponent implements OnInit {

  // newStatus: Reimbursement={
  //   reimbursementId: 9,
  //   empId:2,
  //   mgrId:2,
  //   reimbursementDesc:"zoom",
  //   reimbursementStatus:"",
  //   reimbursementAmt: 100.0
  // }
  pendingReimbu: Reimbursement[];

  constructor(private router:Router,private mgrService: ManagerServiceService) { 
    this.pendingReimbu=[];
  }

  ngOnInit(): void {
    this.viewPendingReim();
  }

  viewPendingReim(){
    this.mgrService.pendingReim().subscribe(response=>{
      this.pendingReimbu=response;
    })
  }
//approved(empId: number, reimbursementId: number){}
approved(){
  this.mgrService.approvePending().subscribe(response=>{
    console.log(response);
  })
}
//denied(empId: number, reimbursementId: number){}
denied(){
this.mgrService.deniedPending().subscribe(response=>{
  console.log(response);

})

}
}
