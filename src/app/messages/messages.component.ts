import { Component, OnInit } from '@angular/core';
import { ChatService } from './../services/chat.service'; 

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})

export class MessagesComponent implements OnInit {
  private messages: any;
  constructor(private chatService: ChatService) {
   
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe(message => this.messages = message);
  }

}
