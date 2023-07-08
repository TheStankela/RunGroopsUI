import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateAddress } from 'src/app/models/createAddress';
import { CreateClub } from 'src/app/models/createClub';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent implements OnInit{

  @Input()
  club = new CreateClub();
  
  selectedFile!: File;
  baseUrl = environment.apiURL;

  constructor(private clubService: ClubService, private authService: AuthService, private router: Router, private toastrService: ToastrService){
    this.club.address = new CreateAddress();
  }

  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      this.toastrService.warning("You must be logged in to create new clubs.");
      this.router.navigate(['auth/login']);
    }
  }

  onFileSelected(event : any){
    this.selectedFile = <File>event.target.files[0];
  }
  handleCreate(){
    const fd =new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('name', this.club.name);
    fd.append('description', this.club.description);
    fd.append('clubCategory', this.club.clubCategory.toString());
    fd.append('address.country', this.club.address.country);
    fd.append('address.city', this.club.address.city);
    fd.append('address.street', this.club.address.street);
    fd.append('address.zip', this.club.address.zip.toString());
    this.clubService.createClub(fd).subscribe({
      next: (res) => {
        this.toastrService.success("Club created successfully!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.toastrService.error("Something went wrong.");
        console.log(err);
      }
    })
  }
}
