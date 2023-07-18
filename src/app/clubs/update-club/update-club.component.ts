import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';
import { Club } from 'src/app/models/club';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-update-club',
  templateUrl: './update-club.component.html',
  styleUrls: ['./update-club.component.scss']
})
export class UpdateClubComponent {

  jwtHelper = new JwtHelperService();
@Input()
club: Club = new Club();

selectedFile!: File;

onFileSelected(event : any){
  this.selectedFile = <File>event.target.files[0];
}

  constructor(private route: ActivatedRoute, private clubService: ClubService, private router: Router, private toastrService: ToastrService, private authService: AuthService){
    this.club.address = new Address();
  }
  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      this.toastrService.error("You must be logged in to update this club!");
      this.router.navigate(['/auth/login']);
    }

    let id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      const token = localStorage.getItem('token');
      if(token != null){
        var decoded = this.jwtHelper.decodeToken(token);
        let parsedId = parseInt(id);
      this.clubService.getClubById(parsedId).subscribe({
        next: (res) => {
          if(res.appUserId != decoded.nameid){
            this.router.navigate(['/']);
            return;
          };
          this.club = res;
        },
        error: () => 
        this.router.navigate(['/'])
      });
        
      }
      
    }
      }

  handleUpdate(){
    const fd =new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('name', this.club.name);
    fd.append('description', this.club.description);
    fd.append('clubCategory', this.club.clubCategory.toString());
    fd.append('address.country', this.club.address.country);
    fd.append('address.city', this.club.address.city);
    fd.append('address.street', this.club.address.street);
    fd.append('address.zip', this.club.address.zip.toString());
    this.clubService.updateClub(fd, this.club.id).subscribe({
      next: (res) => {
        this.toastrService.success("Club updated successfully!");
        this.router.navigate(['/clubs/'+ this.club.id]);
      },
      error: (err) => {
        this.toastrService.error("Something went wrong.");
        console.log(err);
      }
    })
  }
}
