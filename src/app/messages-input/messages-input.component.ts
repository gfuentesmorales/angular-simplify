import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-messages-input',
  templateUrl: './messages-input.component.html',
  styleUrls: ['./messages-input.component.scss']
})
export class MessagesInputComponent implements OnInit {
  
  message: string;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  add() {
    const { message = '' } = this;
    this.chatService.addMessage({
      text: message,
      time: '10:00',
      date: 'June 9',
      user: {
        id: 100,
        name: 'Juan',
      },
    });
    this.message = '';
  }


}
