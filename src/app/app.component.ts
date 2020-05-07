import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import {Router} from '@angular/router';
import {MessageService} from './messages/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ankerako';
  constructor(private authService: AuthService, private router: Router, private messageService: MessageService){
  }

  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  get isMessageDisplayed(): boolean{
    return this.messageService.isDisplayed;
  }

  get userName(): string{
    if (this.authService.currentUser){
      return this.authService.currentUser.name;
    }
    return '';
  }

  logout(): void{
    this.authService.logout();
    console.log('Déconnexion');
    this.router.navigateByUrl('/welcome');
  }

  displayMessages(): void{
   this.router.navigate([{ outlets: { message: ['messages'] } }]);
   this.messageService.isDisplayed = true;
  }

  hideMessages(): void{
    this.messageService.isDisplayed = false;
  }
}
