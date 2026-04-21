import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  // to handle incoming parameters
  constructor(public route:ActivatedRoute){}
  
  //for storing parameters
  data = signal<{ id: number | null; name: string; gender: string }[]>([]);

  // in-built method, calls implicitly when page loads
  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data.update((c)=>[ ...c,{
        id: params["id"] ?? null,
        name: params["name"],
        gender: params["gender"]
      }])
    })
  }

}
