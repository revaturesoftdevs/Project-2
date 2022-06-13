import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeServiceService } from '../employee-service.service';
import { Reimbursement } from './reimbursement.model';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'employee-view-reimb',
  templateUrl: './employee-view-reimb.component.html',
  styleUrls: ['./employee-view-reimb.component.css']
})
export class EmployeeViewReimbComponent implements OnInit {

  
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
  

    
  

  constructor(private employeeService:EmployeeServiceService) {
    this.pendReimb = [];
   }

  getPendReimb(){
    this.employeeService.getPendReimb();
  }
  displayForm(){
    if(this.shouldDisplay){
      this.shouldDisplay = false;
    }else{
      this.shouldDisplay = true;
    }
  }

  addReimb(){
    this.employeeService.addReimb(this.newReimb).subscribe((response)=>{
      console.log(response);
      
      this.newReimb ={
        reimbursementId: 0,
        empId:0,
        mgrId:0,
        reimbursementDesc:'',
        reimbursementStatus:'',
        reimbursementAmt: 0
    
      }

      this.shouldDisplay = false;
    })

  }
  ngOnInit(): void {
    this.employeeService.getPendReimb().subscribe((response)=>{ this.pendReimb = response});
   }
 

 
}
