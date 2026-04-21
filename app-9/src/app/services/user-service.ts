import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList(){
    return [
      {
        id: 101,
        name: "Pranav",
        email: "abc@xyz.com"
      },
      {
        id: 105,
        name: "Tina",
        email: "tina@72.com"
      },
      {
        id: 102,
        name: "teseract",
        email: "teese@ract.com"
      },
      {
        id: 103,
        name: "chelsea",
        email: "chalo@sea.com"
      },
    ];
  }
}
