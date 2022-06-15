import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails } from '../user-login/user.model';
import { Reimbursement } from './employee-view-reimb/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

<<<<<<< Updated upstream
  baseUrl: string = "http://localhost:7474/user";

  constructor(private http: HttpClient) { }

  getEmployee(empId: any): Observable<EmpDetails>{
    return this.http.get<EmpDetails>(this.baseUrl + '/' + empId);
  }

  updateEmployee(updatedEmployee: EmpDetails): Observable<EmpDetails>{
=======
  baseUrl: string = "http://localhost:7474/";

  constructor(private http: HttpClient) { }

  getEmployee(empId: any): Observable<EmpDetails> {
    return this.http.get<EmpDetails>(this.baseUrl + "profile/" + empId);
  }

  updateEmployee(updatedEmployee: EmpDetails): Observable<EmpDetails> {
>>>>>>> Stashed changes
    return this.http.put<EmpDetails>(this.baseUrl, updatedEmployee);
  }

  addReimb(newReimbursement: Reimbursement): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.baseUrl + "addReimbursement", newReimbursement);
  }

  getPendReimb(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl + 'PendingReimbursements/1');
  }

  getResolvedReimb(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl + 'EmpResolvedReimbursements/1');
  }
}

