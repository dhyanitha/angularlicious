import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'angularlicious-event-source',
  templateUrl: './event-source.component.html',
  styleUrls: ['./event-source.component.css']
})
export class EventSourceComponent implements OnInit {

  @Output() onEventSourceComponentClick = new EventEmitter<boolean>();
  isClicked: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleButtonClick() {
    console.log(`Preparing to handle the button click in the child component.`)
    this.isClicked = true;

    console.log(`Preparing to emit the value from the child component.`);
    this.onEventSourceComponentClick.emit(this.isClicked);
  }
}
