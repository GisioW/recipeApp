import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RecipesDetailComponent,
    RecipesEditComponent,
    RecipesListComponent
  ]
})
export class RecipeModule{}
