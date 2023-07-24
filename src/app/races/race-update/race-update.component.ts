import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Address } from 'src/app/models/address';
import { Club } from 'src/app/models/club';
import { Race } from 'src/app/models/race';
import { AuthService } from 'src/app/services/auth.service';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-update',
  templateUrl: './race-update.component.html',
  styleUrls: ['./race-update.component.scss']
})
export class RaceUpdateComponent {

jwtHelper = new JwtHelperService();

@Input()
race: Race = new Race();

selectedFile!: File;

onFileSelected(event : any){
  this.selectedFile = <File>event.target.files[0];
}

  constructor(private route: ActivatedRoute, private raceService: RaceService, private router: Router, private toastrService: ToastrService, private authService: AuthService){
    this.race.address = new Address();
  }
  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      this.toastrService.error("You must be logged in to update this race!");
      this.router.navigate(['/auth/login']);
    }

    let id = this.route.snapshot.paramMap.get('id');
    
    if(id){
      const token = localStorage.getItem('token');
      if(token != null){
        var decoded = this.jwtHelper.decodeToken(token);
        let parsedId = parseInt(id);
      this.raceService.getRaceById(parsedId).subscribe({
        next: (res) => {
          if(res.appUserId != decoded.nameid){
            this.router.navigate(['/']);
            return;
          };
          this.race = res;
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
    fd.append('name', this.race.name);
    fd.append('description', this.race.description);
    fd.append('clubCategory', this.race.raceCategory.toString());
    fd.append('address.country', this.race.address.country);
    fd.append('address.city', this.race.address.city);
    fd.append('address.street', this.race.address.street);
    fd.append('address.zip', this.race.address.zip.toString());
    this.raceService.updateRace(fd, this.race.id).subscribe({
      next: (res) => {
        this.toastrService.success("Club updated successfully!");
        this.router.navigate(['/clubs/'+ this.race.id]);
      },
      error: (err) => {
        this.toastrService.error("Something went wrong.");
        console.log(err);
      }
    })
  }
}
