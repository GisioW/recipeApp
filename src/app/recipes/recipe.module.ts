import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'recipes', component: RecipesListComponent},
      {path: 'recipes/:id', component: RecipesDetailComponent},
      {path: 'recipes/:id/edit', component: RecipesEditComponent}
    ])
  ],
  declarations: [
    RecipesDetailComponent,
    RecipesEditComponent,
    RecipesListComponent
  ]
})
export class RecipeModule{}
