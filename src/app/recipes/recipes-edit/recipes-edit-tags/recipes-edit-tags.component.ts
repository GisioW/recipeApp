import { Component, OnInit } from '@angular/core';
import {IRecipe} from '../../recipe';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipes-edit-tags',
  templateUrl: './recipes-edit-tags.component.html',
  styleUrls: ['./recipes-edit-tags.component.css']
})
export class RecipesEditTagsComponent implements OnInit {
  recipe: IRecipe;
  errorMessage: string;
  newTags = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe( data => {
      this.recipe = data.recipeData.recipe;
    });
  }

  addTags(): void {
    if (!this.newTags){
      this.errorMessage = 'Entrez les mots clés séparés par un virgule et cliquez sur le bouton Ajouter';
    } else {
      const tagsArray = this.newTags.split(',');
      this.recipe.tags = this.recipe.tags ? this.recipe.tags.concat(tagsArray) : tagsArray;
      this.newTags = '';
      this.errorMessage = '';
    }
  }

  removeTag(idx: number): void {
    this.recipe.tags.splice(idx, 1);
  }

}
