import { Injectable } from '@angular/core';
import { IUser } from './user';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  currentUser: IUser = null;
  redirectUrl: string;

  constructor(private messageService: MessageService) {}

  get isLoggedIn(): boolean {
    console.log('Current User ' + this.currentUser);
    return !!this.currentUser;
  }

  logout(): void{
    this.currentUser = null;
  }

  login(userName: string, password: string): void{
    if (!userName || !password){
      this.messageService.addMessage('Veuillez saisir un login et un mot de passe');
      return;
    }

    if (userName === 'admin'){
      this.currentUser = {
        id: 1,
        name: userName,
        isAdmin: true
      };
      this.messageService.addMessage('Connection avec le compte administrateur');
      return;
    }

    this.currentUser = {
      id: 2,
      name: userName,
      isAdmin: false
    };

    this.messageService.addMessage(`L'utilisateur : ${this.currentUser.name} s'est connecté`);
  }

}
