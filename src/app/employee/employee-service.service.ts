import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './employee-view-reimb/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseUrl:string = 'http://localhost:7474/';
  
  
  constructor(private http: HttpClient) { }


  getPendReimb():Observable<Reimbursement[]>{

    return this.http.get<Reimbursement[]>(this.baseUrl + 'PendingReimbursements/1');

  }

  addReimb(newReimbursement:Reimbursement):Observable<Reimbursement>{

    return this.http.post<Reimbursement>(this.baseUrl + "addReimbursement",newReimbursement);
  }
}
