import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { IRecipe } from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  pageTitle = 'Liste des recettes';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  _listFilter = '';
  filteredRecipes = [];
  recipes: IRecipe[] = [];

  constructor(private recipeService: RecipeService) { }

  get listFilter(){
    return this._listFilter;
  }

  set listFilter(value : string){
    this._listFilter = value;
    this.filteredRecipes = this.listFilter ? this.onFiltered(this.listFilter) : this.recipes;
  }


  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: recipes => {
        this.recipes = recipes;
        this.filteredRecipes = this.onFiltered(this.listFilter);
      },
      error: err => this.errorMessage = err
    })
  }

  onFiltered(filterBy: string): IRecipe[]{
    filterBy = filterBy.toLowerCase();
    return this.recipes.filter((recipe: IRecipe) => recipe.recipeName.toLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }
}
