import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService{
  private _messages: string[] = [];

  get messages(){
    return this._messages;
  }

  addMessage(message: string): void{
    const currentDate = new Date();
    this.messages.unshift(message + ' at '+ currentDate.toDateString());
  }
}
