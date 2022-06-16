import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/user-login/auth.service';
import { EmpDetails } from 'src/app/user-login/user.model';
import { EmployeeHttpService } from '../employee-http.service';

@Component({
  selector: 'update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  empModel: EmpDetails = {
    empId: 0,
    mgrId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empPassword: ''
  }

  currentEmp: EmpDetails = {
    empId: 0,
    mgrId: 0,
    empFirstName: '',
    empLastName: '',
    empUserName: '',
    empPassword: ''
  }

  constructor(private activatedRoute: ActivatedRoute,
    private employeeHttpService: EmployeeHttpService,
    private authService: AuthService,
    private router: Router) { 
      let currentEmp = this.authService.getEmpDetails();
    }

  ngOnInit(): void{
    this.displayProfile(1);
  }

  displayProfile(empId: any){
    let empData = this.authService.getEmpDetails();
    this.employeeHttpService.getEmployee(empData.empId).subscribe(response=>{
      this.currentEmp=response;
    });
  }
  
  updatedEmployee(){
    this.employeeHttpService.updateEmployee(this.empModel).subscribe((response)=>{
      this.router.navigate(['employee-profile']);
    });
  }

}
