import { Injectable } from '@angular/core';
import { EmpDetails, MgrDetails } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  isManager:boolean=false;
  isEmployee:boolean=false;
  
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
