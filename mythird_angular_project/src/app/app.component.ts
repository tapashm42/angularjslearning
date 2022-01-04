
import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
template: `
<div><h1 style="color: indigo;"><i>{{ pageTitle }}</i></h1>
<div style="color: cornflowerblue;">My first component</div>
</div>
<div><h1 style="color: maroon;">Product Title</h1>
<pm-products></pm-products>
</div>
`,
})

export class AppComponent {
  title: string = 'Begin with the end in mind';
  pageTitle: string = 'Build a good character';
}
