import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { MessageService } from 'src/app/messages/message.service';
import {IRecipe, RecipeResolved} from '../recipe';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {

  pageTitle = 'Créer/Modifier une recette';
  errorMessage: string;
  recipe: IRecipe;

  constructor(private recipeService: RecipeService,
              private messageService: MessageService,
              private route: ActivatedRoute,
              private router: Router) {

   }

  deleteRecipe(): void{
    if (this.recipe.id === 0){
      this.onSaveRecipe(`${this.recipe.recipeName} a été déjà supprimé`);
    }else{
      if (confirm(`Voullez-vous supprimer la recette: ${this.recipe.recipeName} ?`)){
        this.recipeService.deleteRecipe(this.recipe.id).subscribe({
          next: () => this.onSaveRecipe(`${this.recipe.recipeName} a été supprimé`),
          error: err => this.errorMessage = err
        });
      }
    }
  }




  onRecipeRetrieved(recipe: IRecipe){
    this.recipe = recipe;
    if (!this.recipe){
      this.pageTitle = 'Aucune recette associée';
    }else{
      if (this.recipe.id === 0){
        this.pageTitle = 'Créer une recette';
      }else{
        this.pageTitle = `Modification du recette: ${this.recipe.recipeName}`;
      }
    }
  }

  onSaveRecipe(message?: string): void{
    if (message){
      this.messageService.addMessage(message);
    }
    this.router.navigate(['/recipes']);
  }


  ngOnInit(): void {
    this.route.data.subscribe(
      data => {
        const recipeData: RecipeResolved = data.recipeData;
        this.errorMessage = recipeData.error;
        this.onRecipeRetrieved(recipeData.recipe);
      }
    );
  }


  saveProduct(): void{
    if (true === true){
      if (this.recipe.id  === 0){
        this.recipeService.createRecipe(this.recipe).subscribe({
          next: () => this.onSaveRecipe(`La recette ${this.recipe.recipeName} a été crée`),
          error: err => this.errorMessage = JSON.stringify(err)
        });
      } else {
        this.recipeService.updateRecipe(this.recipe).subscribe({
          next: () => this.onSaveRecipe(`La recette ${this.recipe.recipeName} a été mis à jour`),
          error: err => this.errorMessage = JSON.stringify(err)
        });
      }
    }else {
      this.errorMessage = 'Erreur inconnue';
    }
  }

}
