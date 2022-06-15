import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails } from '../user-login/user.model';
import { Reimbursement } from './employee-view-reimb/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl: string = "http://localhost:7474/";

  constructor(private http: HttpClient) { }

  employeeProfile(): Observable<EmpDetails[]>{
    return this.http.get<EmpDetails[]>(this.baseUrl+"/profile/3");
  }

  getAllPendingReimbursements(): Observable<Reimbursement[]> {

    return this.http.get<Reimbursement[]>(this.baseUrl + "/EmpPendingReimbursements/1");
  }

  createReimbursement(newReimbursement: Reimbursement) {
    return this.http.post<Reimbursement>(this.baseUrl + "/addReimbursement", newReimbursement);
  }

}
