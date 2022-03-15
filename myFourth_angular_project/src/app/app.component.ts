
import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{title}}</a>
  <ul class="nav nav-pills">
    <li><a class="nav-link" routerLink= '/welcome'>Home</a></li>
    <li><a class="nav-link" routerLink= '/products'>Product list</a></li>
  </ul>
  </nav>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
})

export class AppComponent {
  title: string = 'Begin with the end in mind';
}
