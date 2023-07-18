import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { Club } from 'src/app/models/club';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit{
  @Output()
  user: User = new User();

  @Output()
  userClubs: Club[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
  }
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id != null){
      this.userService.getUserById(id).subscribe({
        next: (res) => {
          this.user = res;
        },
        error: (err) => 
        this.router.navigate(['/'])
      })
      this.getUserClubs(id);
    }
  }

  getUserClubs(userId: string){
    this.userService.getUserClubs(userId).subscribe({
      next: (res) => this.userClubs = res,
      error: (err) => console.log(err)
    })
  }
}
