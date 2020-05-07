import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';
import {PageNotFountComponent} from './page-not-found.component';
import {AuthGuard} from './user/auth.guard';
import {SelectiveStrategyService} from './selective-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'recipes', canActivate: [AuthGuard],
        data : {preload: false},
        loadChildren: () => import('./recipes/recipe.module')
            .then(module => module.RecipeModule)
        },
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', component: PageNotFountComponent}
    ], {preloadingStrategy : SelectiveStrategyService})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
