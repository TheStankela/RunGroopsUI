import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Club } from 'src/app/models/club';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club-single',
  templateUrl: './club-single.component.html',
  styleUrls: ['./club-single.component.scss']
})
export default class ClubSingleComponent implements OnInit{

  @Output()
  club: Club = new Club();

  constructor(private route: ActivatedRoute, private clubService: ClubService, private router: Router) {
    this.club.address = new Address();
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null){
      let parsedId = parseInt(id);
      this.clubService.getClubById(parsedId).subscribe({
        next: (res) => this.club = res,
        error: (err) => 
        this.router.navigate(['/'])
      })
    }
  }
  

}
