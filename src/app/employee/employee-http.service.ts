import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpDetails } from '../user-login/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  baseUrl: string = "http://localhost:7474/user";

  constructor(private http: HttpClient) { }

  getEmployee(empId: any): Observable<EmpDetails>{
    return this.http.get<EmpDetails>(this.baseUrl + '/' + empId);
  }

  updateEmployee(updatedEmployee: EmpDetails): Observable<EmpDetails>{
    return this.http.put<EmpDetails>(this.baseUrl, updatedEmployee);
  }
}
