import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/employee/employee-view-reimb/reimbursement.model';
import { AuthService } from 'src/app/user-login/auth.service';
import { ManagerServiceService } from '../manager-service.service';

@Component({
  selector: 'view-pending-reimb',
  templateUrl: './view-pending-reimb.component.html',
  styleUrls: ['./view-pending-reimb.component.css'],
})
export class ViewPendingReimbComponent implements OnInit {
  pendingReimb: Reimbursement[];
  storeMessage: string = "";

  constructor(
    private router: Router,
    private mgrService: ManagerServiceService,
    private authService: AuthService
  ) {
    this.pendingReimb = [];
  }

  ngOnInit(): void {
    this.viewPendingReim();
  }

  viewPendingReim() {
    let mgr = this.authService.getMgrDetails();
    this.mgrService.pendingReim(mgr.mgrId).subscribe(
      {
       next:  (response) => {
        this.pendingReimb = response;
                            },
        error: (error) => {
          this.storeMessage = error.error.errorMessage;
      }
    });
  }
  //approved(empId: number, reimbursementId: number){}
  approved(empId: number, reimbursmentId: number) {
    this.mgrService
      .approvePending(empId, reimbursmentId)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }
  //denied(empId: number, reimbursementId: number){}
  denied(empId: number, reimbursmentId: number) {
    this.mgrService
      .deniedPending(empId, reimbursmentId)
      .subscribe((response) => {
        this.ngOnInit();
      });
  }
}
