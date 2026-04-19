import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  imports: [],
  templateUrl: './child-two.html',
  styleUrl: './child-two.css',
})
export class ChildTwo {
  @Output() mobile= new EventEmitter();

  sendMobile(){
    this.mobile.emit("8877665544");
  }
}
