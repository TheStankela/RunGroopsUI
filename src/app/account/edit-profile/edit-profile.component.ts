import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit{

  @Input()
  user: User = new User();

  selectedFile!: File;

onFileSelected(event : any){
  this.selectedFile = <File>event.target.files[0];
}

  constructor(private accountService: AccountService, private authService: AuthService, private toastrService: ToastrService, private router: Router){
    this.user.address = new Address();
  }

  ngOnInit(): void {
    this.getUserDetails(this.authService.currentUser.id);
  }

  getUserDetails(userId: string){
    this.accountService.getUserAccountById(userId).subscribe({
      next: (res) => this.user = res,
      error: (err) => console.log(err)
    })
  }

  handleUpdate(info: any){
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('NickName', info.Username);
    fd.append('Email', info.Description);
    fd.append('Password', info.Pace);
    fd.append('Mileage', info.Mileage);
    fd.append('UserCategory', info.UserCategory);

    this.accountService.updateAccount(fd, this.authService.currentUser.id, this.authService.getHttpOptions()).subscribe({
      next: (res: any) => {
        this.toastrService.success("Updated successfully!");
        this.router.navigate(['/users/' + this.authService.currentUser.id]);
      },
      error: (err: any) => {
        this.toastrService.error(err?.error.errors[0].description, "Registration failed");
      }
    })
  }
}
