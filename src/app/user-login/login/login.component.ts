import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmpDetails, MgrDetails } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidMessage: string = "";
  invalidMessage2: string = "";

  empDetails: EmpDetails = {
    empId: 0,
    mgrId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empPassword: ''
}

mgrDetails: MgrDetails = {
    mgrId: 0,
    mgrFirstName: '',
    mgrLastName: '',
    mgrUserName: '',
    mgrPassword: ''
}

  constructor(private userService: UserService, 
              private authService: AuthService, 
              private router: Router) { 
              }

  ngOnInit(){
    this.authService.getEmpDetails()
  }

  empLoginValidation(){
    this.userService.validateEmp(this.empDetails).subscribe((response)=>{
      console.log(response);
      if(response.empId != 0 ){
        this.authService.storeEmpDetails(response);           
        this.router.navigate(['employee-header'])
      }else{
        this.invalidMessage = "Invalid Username/Password";
      }
    });
  }

  mgrLoginValidation(){
    this.userService.validateMgr(this.mgrDetails).subscribe((response)=>{
      console.log(response);
      if(response.mgrId != 0 ){
        this.authService.storeMgrDetails(response);
        this.router.navigate(['manager-landingpage'])
      }else{
        this.invalidMessage2 = "Invalid Username/Password";
      }
    });
  }

}
