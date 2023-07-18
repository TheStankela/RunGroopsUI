import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  
  selectedFile!: File;

  onFileSelected(event : any){
    this.selectedFile = <File>event.target.files[0];
  }

  constructor(private authService: AuthService, private router: Router, private toastrService: ToastrService){

  }

  handleRegister(info: any){
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('NickName', info.NickName);
    fd.append('Email', info.Email);
    fd.append('Password', info.Password);
    fd.append('Mileage', info.Mileage);
    fd.append('Pace', info.Pace);
    fd.append('UserCategory', info.UserCategory);

    this.authService.register(fd).subscribe({
      next: (res: any) => {
        this.toastrService.success("Welcome to RunGroops!","Registration successful");
        this.router.navigate(['/auth/login']);
      },
      error: (err: any) => {
        this.toastrService.error(err?.error.errors[0].description, "Registration failed");
      }
    })
  }
  
  
  tailwindConfig = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
        }
      },
      fontFamily: {
        'body': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ],
        'sans': [
      'Inter', 
      'ui-sans-serif', 
      'system-ui', 
      '-apple-system', 
      'system-ui', 
      'Segoe UI', 
      'Roboto', 
      'Helvetica Neue', 
      'Arial', 
      'Noto Sans', 
      'sans-serif', 
      'Apple Color Emoji', 
      'Segoe UI Emoji', 
      'Segoe UI Symbol', 
      'Noto Color Emoji'
    ]
      }
    }
  }
}
