import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrimTextsPipe } from './custom-pipe/trim-texts-pipe';
import { CurrencyConverterPipe } from './custom-pipe/currency-converter-pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TrimTextsPipe, CurrencyConverterPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app-6');

  name = signal("pranav kumar");
  date = new Date();
  amount = signal(1234);

  data = {
    name: "Pranav",
    roll: 168,
    email: "abc@xyz.com"
  };

  // for custom pipe
  address = signal("Pune, Maharshtra")
}
