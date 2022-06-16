import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../user-login/auth.service';
import { EmpDetails } from '../user-login/user.model';
import { Reimbursement } from './employee-view-reimb/reimbursement.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeHttpService {

  baseUrl: string = "http://localhost:7474/";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getEmployee(empId: any): Observable<EmpDetails> {
    let empData = this.authService.getEmpDetails();
    return this.http.get<EmpDetails>(this.baseUrl + "profile/" + empData.empId);
  }

  updateEmployee(updatedEmployee: EmpDetails): Observable<EmpDetails> {
    let empData = this.authService.getEmpDetails();
    return this.http.put<EmpDetails>(this.baseUrl + "UpdateEmp" + empData.empId, updatedEmployee);
  }

  addReimb(newReimbursement: Reimbursement): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.baseUrl + "addReimbursement", newReimbursement);
  }

  getPendReimb(): Observable<Reimbursement[]> {
    let empData = this.authService.getEmpDetails();
    return this.http.get<Reimbursement[]>(this.baseUrl + 'EmpPendingReimbursements/' + empData.empId);
  }

  getResolvedReimb(): Observable<Reimbursement[]> {
    let empData = this.authService.getEmpDetails();
    return this.http.get<Reimbursement[]>(this.baseUrl + 'EmpResolvedReimbursements/' + empData.empId);
  }
}

