import { Injectable } from '@angular/core';
<<<<<<< Updated upstream

=======
import { HttpClient } from '@angular/common/http';
import { Manager } from './manager.model';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee.model';
import { Reimbursement } from '../employee/employee-view-reimb/reimbursment-model';
import { AuthService } from '../user-login/auth.service';
>>>>>>> Stashed changes
@Injectable({
  providedIn: 'root'
})
export class ManagerServiceService {

<<<<<<< Updated upstream
  constructor() { }
=======


  baseUrl: string = "http://localhost:7474";
  constructor(private http: HttpClient, private authService: AuthService) { }

  currentAllEmployees(mgrId:number): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + "/AllEmployees/"+mgrId);
  }

  //view individual employee

  goToViewEmployee(): Observable<Reimbursement> {
    let mgrData = this.authService.getMgrDetails();
    // mgrData.mgrId, etc...

    
    return this.http.get<Reimbursement>(this.baseUrl + "/IndividualReimbursements/");
    // return this.http.get<Reimbursement[]>(this.baseUrl+"/IndividualReimbursements/"+mgrId+'/'+empId);
  }
  resolvedReim(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl + "/ResolvedReimbursements/");
  }
  // resolvedReim(mgrId: number){

  //   return this.http.get<Reimbursement[]>(this.baseUrl+'/ResolvedReimbursements'+mgrId);
  // }

  // getPendingReimMgr(mgrId: number){

  //   return this.http.get<Reimbursement[]>(this.baseUrl+'/PendingReimbursements'+mgrId);
  // }
  pendingReim(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/PendingReimbursements/");
  }

approvePending(): Observable<boolean>{
  return this.http.put<boolean>(this.baseUrl+"/approveReimbursement/","");
}

deniedPending():Observable<boolean>{
  return this.http.put<boolean>(this.baseUrl+"/denyReimbursement/","");
}

>>>>>>> Stashed changes
}
