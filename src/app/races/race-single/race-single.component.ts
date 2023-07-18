import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Race } from 'src/app/models/race';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race-single',
  templateUrl: './race-single.component.html',
  styleUrls: ['./race-single.component.scss']
})
export class RaceSingleComponent implements OnInit{
  @Output()
  race: Race = new Race();

  constructor(private route: ActivatedRoute, private raceService: RaceService, private router: Router) {
    this.race.address = new Address();
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null){
      let parsedId = parseInt(id);
      this.raceService.getRaceById(parsedId).subscribe({
        next: (res) => this.race = res,
        error: (err) => 
        this.router.navigate(['/'])
      })
    }
  }
}
