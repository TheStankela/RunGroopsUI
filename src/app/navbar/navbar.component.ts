import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   constructor(public authService: AuthService, private toastrService: ToastrService){

   }

   logout(){
    const token = localStorage.getItem('token');
    if(!token){
      this.toastrService.warning("You must be logged in.", "Logout falied.");
      return;
    }
    this.authService.logout();
    this.toastrService.success("Logout successful!")
   }
}
