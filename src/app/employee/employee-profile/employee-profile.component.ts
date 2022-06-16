import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDetails } from 'src/app/user-login/user.model';
import { EmployeeHttpService } from '../employee-http.service';
import { UserService } from 'src/app/user-login/user.service';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee.model';
import { AuthService } from 'src/app/user-login/auth.service';


@Component({
  selector: 'employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {


  empModel: EmpDetails = {
    empId: 0,
    mgrId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empPassword: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
              private employeeHttpService: EmployeeHttpService,
              private employeeService: EmployeeServiceService,
              private router: Router,
              private userService: UserService, 
              private empService: EmployeeServiceService,
              private authService: AuthService) {
               }

  ngOnInit(): void {
    this.displayProfile(1);
  }

  displayProfile(empId: any){
    let empData = this.authService.getEmpDetails();
    this.employeeHttpService.getEmployee(empData.empId).subscribe(response=>{
      this.empModel=response;
    });
  }
}

