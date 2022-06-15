import { Injectable } from '@angular/core';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  isManager:boolean=false;
  isEmployee:boolean=false;
  

  

  retrieveEmpDetails(){
   let userData:any= JSON.parse(sessionStorage.getItem("emp")!);
   if(userData!==null){
    return JSON.parse(userData);
   }   
  }
  public empDetails : EmpDetails | null = null;
  public mgrDetails : MgrDetails | null = null;

  constructor() {
    this.getEmpDetails();
  }


  getEmpDetails() {
    const empData = sessionStorage.getItem('emp');
    if(empData){
      this.empDetails = JSON.parse(empData);
    }else{
      this.empDetails = null;
    }
  }

  getMgrDetails() {
    const mgrData = sessionStorage.getItem('mgr')
    if(mgrData){
      this.mgrDetails = JSON.parse(mgrData);
    }else{
      this.mgrDetails = null;
    }
    console.log(mgrData);
  }

  storeEmpDetails(empDetails: EmpDetails) {
    sessionStorage.setItem('emp', JSON.stringify(empDetails))
    console.log(sessionStorage);
    this.getEmpDetails();
  }

  removeEmpDetails(): void{
    sessionStorage.removeItem('emp');
  }
  
  storeMgrDetails(mgrdetails: MgrDetails) {
    sessionStorage.setItem('mgr', JSON.stringify(mgrdetails))
    this.getMgrDetails();
  }

  retrieveMgrDetails(){
    let mgrData:any=JSON.parse(sessionStorage.getItem("mgr")!);
    if(mgrData!==null){
      return JSON.parse(mgrData);
    }
  }
  removeMgrDetails(): void{
    sessionStorage.removeItem('mgr');
  }

  
  
}
