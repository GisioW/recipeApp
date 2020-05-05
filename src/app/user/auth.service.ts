import { Injectable } from '@angular/core';
import { IUser } from './user';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  currentUser: IUser;

  constructor(private messageService: MessageService) {}

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  logout(): void{
    this.currentUser = null;
  }

  login(userName:string, password: string): void{
    if(!userName || !password){
      this.messageService.addMessage('Veuillez saisir un login et un mot de passe');
      return;
    }

    if(userName === 'admin'){
      this.currentUser = {
        id: 1,
        name: userName,
        isAdmin: true
      };
      this.messageService.addMessage('Admin Log');
      return;
    }

    this.currentUser = {
      id: 2,
      name: userName,
      isAdmin: false
    };
    this.messageService.addMessage(`User: ${this.currentUser.name} logged in`)
  }

}
