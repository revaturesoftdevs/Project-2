import { Injectable } from '@angular/core';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  isManager:boolean=false;
  isEmployee:boolean=false;
  constructor() { }

  storeEmpDetails(empdetails: EmpDetails): void{
    sessionStorage.setItem("emp", JSON.stringify(empdetails));
  }

  retrieveEmpDetails(){
   let userData:any= JSON.parse(sessionStorage.getItem("emp")!);
   if(userData!==null){
    return JSON.parse(userData);
   }   

  }

  removeEmpDetails(): void{
    sessionStorage.removeItem("emp");
  }
  
  storeMgrDetails(mgrdetails: MgrDetails): void{
    sessionStorage.setItem("mgr", JSON.stringify(mgrdetails));
  }

  retrieveMgrDetails(){
    let mgrData:any=JSON.parse(sessionStorage.getItem("mgr")!);
    if(mgrData!==null){
      return JSON.parse(mgrData);
    }
  }
  removeMgrDetails(): void{
    sessionStorage.removeItem("mgr");
  }
}
