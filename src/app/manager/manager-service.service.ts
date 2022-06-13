import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager.model';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { Reimbursement } from '../employee/employee-view-reimb/reimbursment-model';
@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {



  baseUrl: string = "http://localhost:7474";
  constructor(private http: HttpClient) { }

  currentAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "/AllEmployees/3");
  }

  //view individual employee

  goToViewEmployee(): Observable<Reimbursement> {

    return this.http.get<Reimbursement>(this.baseUrl + "/IndividualReimbursements/1/5");
    // return this.http.get<Reimbursement[]>(this.baseUrl+"/IndividualReimbursements/"+mgrId+'/'+empId);
  }
  resolvedReim(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl + "/ResolvedReimbursements/1");
  }
  // resolvedReim(mgrId: number){

  //   return this.http.get<Reimbursement[]>(this.baseUrl+'/ResolvedReimbursements'+mgrId);
  // }

  // getPendingReimMgr(mgrId: number){

  //   return this.http.get<Reimbursement[]>(this.baseUrl+'/PendingReimbursements'+mgrId);
  // }
  pendingReim(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/PendingReimbursements/2");
  }

approvePending(): Observable<boolean>{
  return this.http.put<boolean>(this.baseUrl+"/approveReimbursement/1/19","");
}

deniedPending():Observable<boolean>{
  return this.http.put<boolean>(this.baseUrl+"/denyReimbursement/2/22","");
}

}
