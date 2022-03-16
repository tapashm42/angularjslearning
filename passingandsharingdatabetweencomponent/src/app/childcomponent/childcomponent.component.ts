import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {
 @Input() data!: string;
  @Input() data3!: string;

  @Output() event = new EventEmitter<string>()
  message = "this is form child to parent component"
  sharedMessage = "my shared message to child2"

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.event.emit("Child says")
    this.sharedService.setMessage(this.sharedMessage);
  }

  sendMessage(): void {
    this.event.emit(this.message)
  }

}
