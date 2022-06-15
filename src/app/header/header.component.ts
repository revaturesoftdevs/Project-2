import { AuthService } from './../user-login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authService:AuthService) { }

  ngOnInit(): void {
  }

  hasLoggedIn(){
    return this.authService.isLoggedIn;
  }

  isEmployee(){
    return this.authService.isEmployee;
  }
  isManager(){
    return this.authService.isManager;
  }

}
