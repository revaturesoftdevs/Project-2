import { Injectable } from '@angular/core';
import { Manager } from '../manager/manager.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  managerLoggedIn:boolean = false;
  employeeLoggedIn:boolean = false;

  storeManagerInfo(user: Manager):void{
    sessionStorage.setItem('userInfo', JSON.stringify(user));
  }

  retreiveUserInfo(): any {
    return JSON.parse(sessionStorage.getItem("userInformation")!);
  }                                                                    

  removeManagerInfo(user: Manager):void{
    sessionStorage.removeItem('userInfo');
  }
}
