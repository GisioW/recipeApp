import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {RouterModule} from '@angular/router';
import {RecipesResolverService} from './recipes-resolver/recipes-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'recipes', component: RecipesListComponent},
      {path: 'recipes/:id', component: RecipesDetailComponent, resolve: {recipeData: RecipesResolverService}},
      {path: 'recipes/:id/edit', component: RecipesEditComponent, resolve: {recipeData: RecipesResolverService}}
    ])
  ],
  declarations: [
    RecipesDetailComponent,
    RecipesEditComponent,
    RecipesListComponent
  ]
})
export class RecipeModule{}
