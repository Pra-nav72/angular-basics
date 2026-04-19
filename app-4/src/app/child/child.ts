import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() user: String | undefined; 
  @Input() meme: string | undefined;

  
}
