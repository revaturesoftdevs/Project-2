import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmpDetails, MgrDetails } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  invalidMessage: string = '';
  invalidMessage2: string = '';

  empDetails: EmpDetails = {
    empId: 0,
    mgrId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empPassword: '',
  };

  mgrDetails: MgrDetails = {
    mgrId: 0,
    mgrFirstName: '',
    mgrLastName: '',
    mgrUserName: '',
    mgrPassword: '',
  };

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  empLoginValidation() {
    this.userService.validateEmp(this.empDetails).subscribe((response) => {
      if (response.empId != 0) {
        this.authService.storeEmpDetails(response);
        // let data = this.authService.getEmpDetails();
        // let employeeId = data.empId;
        // console.log(employeeId)
        this.authService.isLoggedIn = true;
        this.authService.isEmployee = true;
        this.router.navigate(['employee-profile']);
      } else {
        this.invalidMessage = 'Invalid Username/Password';
      }
    });
  }

  mgrLoginValidation() {
    this.userService.validateMgr(this.mgrDetails).subscribe((response) => {
      if (response.mgrId != 0) {
        this.authService.storeMgrDetails(response);
        this.authService.isLoggedIn = true;
        this.authService.isManager=true;
        this.router.navigate(['manager-view-employees'])
      }else{
        this.invalidMessage2 = "Invalid Username/Password";
      }
    });
  }

}
