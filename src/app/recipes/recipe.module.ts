import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import {RouterModule} from '@angular/router';
import {RecipesResolverService} from './recipes-resolver/recipes-resolver.service';
import { RecipesEditInfoComponent } from './recipes-edit/recipes-edit-info/recipes-edit-info.component';
import { RecipesEditTagsComponent } from './recipes-edit/recipes-edit-tags/recipes-edit-tags.component';
import {AuthGuard} from '../user/auth.guard';
import {RecipesEditGuard} from './recipes-edit/recipes-edit.guard';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'recipes',
        canActivate: [AuthGuard],
        children: [
          {path: '', component: RecipesListComponent} ,
          {path: ':id', component: RecipesDetailComponent, resolve: {recipeData: RecipesResolverService}},
          {path: ':id/edit', component: RecipesEditComponent, resolve: {recipeData: RecipesResolverService},
            canDeactivate: [RecipesEditGuard],
            children: [
              {path: '', redirectTo: 'info', pathMatch: 'full'},
              {path: 'info', component: RecipesEditInfoComponent},
              {path: 'tags', component: RecipesEditTagsComponent}
            ]
          }
        ]
      }
    ])
  ],
  declarations: [
    RecipesDetailComponent,
    RecipesEditComponent,
    RecipesListComponent,
    RecipesEditInfoComponent,
    RecipesEditTagsComponent
  ]
})
export class RecipeModule{}
