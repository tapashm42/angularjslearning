import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-childcomponent2',
  templateUrl: './childcomponent2.component.html',
  styleUrls: ['./childcomponent2.component.css']
})
export class Childcomponent2Component implements OnInit {
  recivedSharedMessage = ""
@Input()
 data2!: string;
 
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.recivedSharedMessage = this.sharedService.getMessage() as string
  }

}
