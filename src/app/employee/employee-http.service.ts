import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails } from '../user-login/user.model';
import { Reimbursement } from './employee-view-reimb/reimbursement.model';

@Injectable({
  providedIn: 'root'
})

export class EmployeeHttpService {

  baseUrl: string = "http://localhost:7474/user";
  
  constructor(private http: HttpClient) { }

  employeeProfile(empId: any): Observable<EmpDetails>{
    return this.http.get<EmpDetails>(this.baseUrl + 'profile/' + empId)
  }

  updateEmployee(updatedEmployee: EmpDetails): Observable<EmpDetails>{
    return this.http.put<EmpDetails>(this.baseUrl + 'updateEmp',updatedEmployee);
  }

  addReimb(newReimbursement:Reimbursement):Observable<Reimbursement>{
    return this.http.post<Reimbursement>(this.baseUrl + "addReimbursement",newReimbursement);
  }

  getPendReimb():Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl + 'PendingReimbursements/1');
  }
}
