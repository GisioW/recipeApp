import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent{
  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService){}

  login(loginForm: NgForm){
    if(loginForm && loginForm.valid){
      const name = loginForm.form.value.username;
      const password = loginForm.form.value.password;
      this.authService.login(name, password);
    } else{
      this.errorMessage = 'Veuillez saisir un login et un mot de passe';
    }
  }

}
