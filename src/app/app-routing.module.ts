import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFountComponent} from './page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PageNotFountComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
