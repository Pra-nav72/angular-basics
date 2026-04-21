import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // creating parameters to send
  user = [{
    id: 101,
    name: "pranav",
    gender: "male"
  },
  {
    id: 103,
    name: "Tatal",
    gender: "other"
  }]

  //constructor for generating parameter
  constructor(public route: Router){}
  goToAbout(){
    this.route.navigate(['profile'], {
      queryParams: this.user[1]
    });
  }
}
