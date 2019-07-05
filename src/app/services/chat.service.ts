import { Injectable } from '@angular/core';
import { Observable,  of } from 'rxjs';

class MessageInterface {
  id?: number;
  text: string;
  time: string;
  date: string;
  user: {
    id: number,
    name: string,
  };
}


const MESSAGES: MessageInterface[] =  [
  {
    text: 'Hello',
    time: '10:00',
    date: 'June 9',
    user: {
      id: 100,
      name: 'Juan',
    },
  },
  {
    text: 'Good Bye',
    time: '10:00',
    date: 'June 9',
    user: {
      id: 100,
      name: 'Juan',
    },
  }
];

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  public messages: MessageInterface[] = [];
  constructor() {
    this.messages = MESSAGES;
  }

  getMessages(): Observable<MessageInterface[]> {
    return of(this.messages);
  }

  addMessage(newMessage: MessageInterface): void {
     this.messages.push(newMessage);
  }

}
