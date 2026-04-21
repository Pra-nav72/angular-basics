import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { filter, single } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  //storing the user data to show on html
  userData:any = signal("");

  // importing the userService, other to work with params
  constructor(public userService:UserService, public route:ActivatedRoute){}

  // getting data after page load
  ngOnInit(){
    const data = this.userService.userList();
    this.route.params.subscribe((params)=>{
      const filterData = data.filter((item)=>item.id==params['id']);
      console.log(filterData);
            
      this.userData.set(filterData[0]);
    });
  }
}
