import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myMessage = '*****the message*****';
  myMessage2 = '#######'
  yourmessage = "898898"

  message = ""
  receviedMessage($event: string) {
    this.message = $event
  }
}
