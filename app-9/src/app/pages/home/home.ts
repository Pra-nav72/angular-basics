import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // importing the userService
  constructor(public userService:UserService){}

  //storing the user data to show on html
  userData:any = signal("");

  // getting data after page load
  ngOnInit(){
    const data = this.userService.userList();
    this.userData.set(data)
  }
}
