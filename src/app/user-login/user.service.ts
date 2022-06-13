import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrlEmp: string = "http://localhost:7474/loginEmp";
  baseUrlMgr: string = "http://localhost:7474/loginManager";

  constructor(private http: HttpClient) { }

  validateEmp(empDetails: EmpDetails): Observable<EmpDetails> {
    return this.http.post<EmpDetails>(this.baseUrlEmp, empDetails);
  }

  validateMgr(mgrDetails: MgrDetails): Observable<MgrDetails> {
    return this.http.post<MgrDetails>(this.baseUrlMgr, mgrDetails);
  }
}
