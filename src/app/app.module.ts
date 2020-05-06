import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFountComponent } from './page-not-found.component';
import { MessageModule } from './messages/message.module';
import { UserModule } from './user/user.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { RecipeModule } from './recipes/recipe.module';
import { RouterModule } from '@angular/router';
import {RecipeData} from './recipes/recipe-data';
import {delay} from 'rxjs/operators';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFountComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientInMemoryWebApiModule.forRoot(RecipeData, {delay: 1000}),
    HttpClientModule,
    RecipeModule,
    UserModule,
    MessageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
