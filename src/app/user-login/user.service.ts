import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrlEmp: string = "http://localhost:7272/api/login-employee";
  baseUrlMgr: string = "http://localhost:7272/api/login-manager";

  constructor(private http: HttpClient) { }

  validateEmp(empDetails: EmpDetails): Observable<EmpDetails> {
    return this.http.post<EmpDetails>(this.baseUrlEmp, empDetails);
  }

  validateMgr(mgrDetails: MgrDetails): Observable<MgrDetails> {
    return this.http.post<MgrDetails>(this.baseUrlMgr, mgrDetails);
  }
}
