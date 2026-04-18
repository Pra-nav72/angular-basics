import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  tasks = signal([{
    id:1,
    title: "study",
    isCompleted: false
  },]);

  title = signal("");

  addTask(){
    if(this.title()){
      this.tasks.update((item)=>(
        [...item, {id: this.tasks().length+1, title: this.title(), isCompleted:false}]
      ));
    }
    
    this.title.set("");
  }
  addTask1(event: String){
    // console.log(event);
    if(event === 'Enter'){
      this.addTask();
    }
  }

  deleteTasks(val:number){
    this.tasks().splice(val, 1);
  }

}
