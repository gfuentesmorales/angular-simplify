import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-input',
  templateUrl: './messages-input.component.html',
  styleUrls: ['./messages-input.component.scss']
})
export class MessagesInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  add() {
    console.log('add');
  }


}
