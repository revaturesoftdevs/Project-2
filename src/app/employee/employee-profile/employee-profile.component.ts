import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpDetails } from 'src/app/user-login/user.model';
import { EmployeeHttpService } from '../employee-http.service';
import { UserService } from 'src/app/user-login/user.service';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  newEmployees: Employee[];
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
              private router: Router,
              private userService: UserService, private empService: EmployeeServiceService) {
                this.newEmployees= [];
               }

  ngOnInit(): void {
    this.displayProfile(3);
  }

  displayProfile(empId: any){
    this.employeeHttpService.employeeProfile(empId).subscribe(response=>{
      this.empModel=response;
    })
  }
  // set response to update empModel, use it in HTML 
  empData() {
    this.employeeHttpService.employeeProfile(this.empModel).subscribe(response => {
      console.log(this.empModel)
    });
  }


}
