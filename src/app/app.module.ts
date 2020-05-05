import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFountComponent } from './page-not-found.component';
import { MessageModule } from './messages/message.module';
import { UserModule } from './user/user.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RecipeModule } from './recipes/recipe.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFountComponent,
  ],
  imports: [
    BrowserModule,
    MessageModule,
    UserModule,
    HttpClientInMemoryWebApiModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
