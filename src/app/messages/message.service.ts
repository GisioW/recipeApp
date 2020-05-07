import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService{
  // tslint:disable-next-line:variable-name
  private _messages: string[] = [];

  isDisplayed = false;

  get messages(){
    return this._messages;
  }

  addMessage(message: string): void{
    const currentDate = new Date();
    this.messages.unshift(message + ' : ' + currentDate.toDateString());
  }
}
