import { Component, Input, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';
import { ChildTwo } from './child-two/child-two';

@Component({
  selector: 'app-root',
  imports: [ Child, ChildTwo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-4');

  userName = signal("pranav Kumar");
  meme = signal("sdfs");
  mobileNo = signal('');

  // reciveing data from child coming as an event
  receiveMobile(data: string){
    console.log(data);
    this.mobileNo.set(data);
  }
}
