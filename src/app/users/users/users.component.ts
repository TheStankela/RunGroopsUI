import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [];

  pageNumber: number = 0;
  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.getUsers(this.pageNumber);
  }

  getUsers(page: number){
    if(page < 0){
      this.pageNumber = 0;
      return;
    }

    this.userService.getUsers(page).subscribe({
      next: (res) => {
        this.users = res;
        if(!this.users.length){
          this.pageNumber = 0;
          this.getUsers(this.pageNumber);
        }}
    })
  }

  searchByName(formData: any){
    this.users = [];
    this.userService.getUsersByName(formData.userName).subscribe({
      next: (res) => {
        this.users = res;
      }
    })
  }

  nextPage(){
    this.pageNumber++;
    this.getUsers(this.pageNumber);
  }
  prevPage(){
    this.pageNumber--;
    this.getUsers(this.pageNumber);
  }
}
