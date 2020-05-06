import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  errorMessage: string;
  pageTitle = 'Connexion';

  constructor(private authService: AuthService, private router: Router){}

  login(loginForm: NgForm){
    if (loginForm && loginForm.valid){
      const name = loginForm.form.value.username;
      const password = loginForm.form.value.password;
      this.authService.login(name, password);
      if (this.authService.redirectUrl){
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else{
        this.router.navigate(['/recipes']);
      }
    } else{
      this.errorMessage = 'Veuillez saisir un login et un mot de passe';
    }
  }

}
