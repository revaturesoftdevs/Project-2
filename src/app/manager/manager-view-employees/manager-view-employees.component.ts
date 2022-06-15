import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-view-employees',
  templateUrl: './manager-view-employees.component.html',
  styleUrls: ['./manager-view-employees.component.css']
})
export class ManagerViewEmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
<<<<<<< Updated upstream
=======
    this.loadData();
  }

  loadData(){
    // from session storage, manager Id
    let mgr = this.authService.getMgrDetails();
    this.mgrService.currentAllEmployees(mgr.mgrId).subscribe(response=>{
      this.currentAllEmployees=response;
    })
  }
  
  goToViewEmployee(){    
     this.mgrService.goToViewEmployee().subscribe(response=>{
      this.employeenow=response;
    })
    //this.router.navigate(['app-employee-profile',empId]);
>>>>>>> Stashed changes
  }

}
