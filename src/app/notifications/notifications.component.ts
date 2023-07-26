import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{

  


  constructor(private friendService: FriendService){}
  ngOnInit(): void {
    this.getPendingRequests();
  }

  getPendingRequests(){
    this.friendService.getPendingFriendRequests().subscribe({
      next: (res) => {

      }
    })
  }
  
}
