import { Injectable } from '@angular/core';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;


<<<<<<< Updated upstream
  constructor() { }

  storeEmpDetails(empdetails: EmpDetails): void{
    sessionStorage.setItem("emp", JSON.stringify(empdetails));
  }

  removeEmpDetails(): void{
    sessionStorage.removeItem("emp");
=======
  retrieveEmpDetails(){
   let userData:any= JSON.parse(sessionStorage.getItem("emp")!);
   if(userData!==null){
    return JSON.parse(userData);
   }   
  }


  constructor() {
    this.getEmpDetails();
  }

  getEmpDetails() {
    let empData: any = sessionStorage.getItem('emp');
    if(empData != null){
      return JSON.parse(empData);
    }
  }

  getMgrDetails() {
    let mgrData: any = sessionStorage.getItem('mgr');
    if(mgrData != null){
      return JSON.parse(mgrData);
    }
  }

  storeEmpDetails(empDetails: EmpDetails) {
    sessionStorage.setItem('emp', JSON.stringify(empDetails))
  }

  removeEmpDetails(): void{
    sessionStorage.removeItem('emp');
  }
  
  storeMgrDetails(mgrdetails: MgrDetails) {
    sessionStorage.setItem('mgr', JSON.stringify(mgrdetails))
>>>>>>> Stashed changes
  }

  storeMgrDetails(mgrdetails: MgrDetails): void{
    sessionStorage.setItem("mgr", JSON.stringify(mgrdetails));
  }

  removeMgrDetails(): void{
    sessionStorage.removeItem("mgr");
  }
}
