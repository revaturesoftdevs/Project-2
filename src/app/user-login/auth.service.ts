import { Injectable } from '@angular/core';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;


  constructor() { }

  storeEmpDetails(empdetails: EmpDetails): void{
    sessionStorage.setItem("emp", JSON.stringify(empdetails));
  }

  removeEmpDetails(): void{
    sessionStorage.removeItem("emp");
  }

  storeMgrDetails(mgrdetails: MgrDetails): void{
    sessionStorage.setItem("mgr", JSON.stringify(mgrdetails));
  }

  removeMgrDetails(): void{
    sessionStorage.removeItem("mgr");
  }
}
