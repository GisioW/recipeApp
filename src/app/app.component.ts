import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ankerako';

  constructor(private authService: AuthService){}

  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  get userName(): string{
    if(this.authService.currentUser){
      return this.authService.currentUser.name;
    }
    return '';
  }

  logout(): void{
    this.authService.logout();
    console.log('Deconnexion')
  }
}
