import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CreateAddress } from 'src/app/models/createAddress';
import { CreateRace } from 'src/app/models/createRace';
import { AuthService } from 'src/app/services/auth.service';
import { RaceService } from 'src/app/services/race.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.scss']
})
export class RaceCreateComponent implements OnInit{

  @Input()
  race = new CreateRace();
  
  selectedFile!: File;
  baseUrl = environment.apiURL;

  constructor(private raceService: RaceService, private authService: AuthService, private router: Router, private toastrService: ToastrService){
    this.race.address = new CreateAddress();
  }

  ngOnInit(): void {
    if(!this.authService.loggedIn()){
      this.toastrService.warning("You must be logged in to create new races.");
      this.router.navigate(['auth/login']);
    }
  }

  onFileSelected(event : any){
    this.selectedFile = <File>event.target.files[0];
  }
  handleCreate(){
    const fd =new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('name', this.race.name);
    fd.append('description', this.race.description);
    fd.append('raceCategory', this.race.raceCategory.toString());
    fd.append('address.country', this.race.address.country);
    fd.append('address.city', this.race.address.city);
    fd.append('address.street', this.race.address.street);
    fd.append('address.zip', this.race.address.zip.toString());
    this.raceService.createRace(fd).subscribe({
      next: (res) => {
        this.toastrService.success("Race created successfully!");
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.toastrService.error("Something went wrong.");
        console.log(err);
      }
    })
  }
}
