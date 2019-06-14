import { Component, OnInit } from '@angular/core';

// interface MessageInterface {
//   [index: number]: any;
// }

interface MessageInterface {
  id?: number;
  text: string;
  time: string;
  date: string;
  user: {
    id: number,
    name: string,
  };
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {
  private messages: MessageInterface[];
  constructor() {
    this.messages = [
      // {
      //   text: 'Hello',
      //   time: '10:00',
      //   date: 'June 9',
      //   user: {
      //     id: 100,
      //     name: 'Juan',
      //   },
      // },
      // {
      //   text: 'Good Bye',
      //   time: '10:00',
      //   date: 'June 9',
      //   user: {
      //     id: 100,
      //     name: 'Juan',
      //   },
      // }
    ];
  }

  ngOnInit() {
    console.log(this.messages);
  }

}
