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

  getUsers(pageNumber: number){
    this.userService.getUsers(pageNumber).subscribe({
      next: (res) => this.users = res,
      error: (err) => console.log(err)
    })
  }

  searchByName(formData: any){
    this.users = [];
    this.userService.getUsersByName(formData.userName).subscribe({
      next: (res) => this.users = res,
      error: (err) => console.log(err)
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
