import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager.model';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { Reimbursement } from '../employee/employee-view-reimb/reimbursement.model';
import { AuthService } from '../user-login/auth.service';


@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

  baseUrl: string = "http://localhost:7272/api";
  constructor(private http: HttpClient, private authService: AuthService) { }

  currentAllEmployees(mgrId:number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "/all-employees/"+mgrId);
  }

  //view individual employee

  goToViewEmployee(mgrId:number,empId:number): Observable<Reimbursement[]> {
    let mgrData = this.authService.getMgrDetails();
    return this.http.get<Reimbursement[]>(this.baseUrl + "/IndividualReimbursements/"+mgrId+'/'+empId);
    // return this.http.get<Reimbursement[]>(this.baseUrl+"/IndividualReimbursements/"+mgrId+'/'+empId);
  }
  resolvedReim(): Observable<Reimbursement[]> {
    let mgrData = this.authService.getMgrDetails();
    console.log(mgrData.mgrId);
  
    return this.http.get<Reimbursement[]>(this.baseUrl + "/resolved-reimbursements/"+mgrData.mgrId);
  }
  // resolvedReim(mgrId: number){

  //   return this.http.get<Reimbursement[]>(this.baseUrl+'/ResolvedReimbursements'+mgrId);
  // }

  // getPendingReimMgr(mgrId: number){

  //   return this.http.get<Reimbursement[]>(this.baseUrl+'/PendingReimbursements'+mgrId);
  // }
  pendingReim(mgrId:number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/pending-reimbursements/"+mgrId);
  }

approvePending(empId:number, reimbursmentId: number): Observable<boolean>{
  return this.http.put<boolean>(this.baseUrl+"/approve-reimbursement/"+empId+'/'+reimbursmentId,"");
}

deniedPending(empId:number, reimbursmentId: number):Observable<boolean>{
  return this.http.put<boolean>(this.baseUrl+"/deny-reimbursement/"+empId+'/'+reimbursmentId,"");
}

}
