import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './employee-view-reimb/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  baseUrl: string = "http://localhost:1111/";

  constructor(private http: HttpClient) { }

  getAllPendingReimbursements(): Observable<Reimbursement[]> {

    return this.http.get<Reimbursement[]>(this.baseUrl + "EmpPendingReimbursements/1");
  }

  createReimbursement(newReimbursement: Reimbursement) {
    return this.http.post<Reimbursement>(this.baseUrl + "addReimbursement", newReimbursement);
  }
}
