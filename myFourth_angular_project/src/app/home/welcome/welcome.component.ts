import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  constructor() { }

  ngOnInit(): void {
  }

}
