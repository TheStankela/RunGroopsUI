import { Component} from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: User[] = [];

  searchTerm: string = "";

  pageSize: number = 5;
  pageNumber: number = 0;
  hasPreviousPage: boolean = false;
  hasNextPage: boolean = false;
  searchedByName: boolean = false;

  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.getUsers(this.pageNumber, this.pageSize);
  }

  getUsers(page: number, pageSize: number){
    if(page < 0){
      this.pageNumber = 0;
      return;
    }
    this.userService.getUsers(page, pageSize).subscribe({
      next: (res: any) => {
        this.users = res.list;
        this.hasPreviousPage = res.hasPreviousPage;
        this.hasNextPage = res.hasNextPage;
        }
    })
  }

  searchByName(formData: any){
    this.users = [];
    this.userService.getUsersByName(formData, this.pageNumber, this.pageSize).subscribe({
      next: (res: any) => {
        this.users = res.list;
        this.hasPreviousPage = res.hasPreviousPage;
        this.hasNextPage = res.hasNextPage;
        this.searchTerm = formData;
        this.searchedByName = true;
      }
    })
  }

  nextPage(){
    if(!this.hasNextPage){
      return;
    }
    this.pageNumber++;

    if(this.searchedByName){
      this.searchByName(this.searchTerm)
    }
    else{
      this.getUsers(this.pageNumber, this.pageSize);
    }
  }
  prevPage(){
    if(!this.hasPreviousPage){
      return;
    }
    this.pageNumber--;
    if(this.searchedByName){
      this.searchByName(this.searchTerm)
    }
    else{
      this.getUsers(this.pageNumber, this.pageSize);
    }
  }
}
