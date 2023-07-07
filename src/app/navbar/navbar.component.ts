import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   constructor(public authService: AuthService){

   }

   logout(){
    const token = localStorage.getItem('token');
    if(!token){
      alert("You must be logged in.");
      return;
    }
    this.authService.logout();
   }
}
