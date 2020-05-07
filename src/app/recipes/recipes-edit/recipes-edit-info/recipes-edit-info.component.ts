import {Component, OnInit, ViewChild} from '@angular/core';
import {IRecipe} from '../../recipe';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-recipes-edit-info',
  templateUrl: './recipes-edit-info.component.html',
  styleUrls: ['./recipes-edit-info.component.css']
})
export class RecipesEditInfoComponent implements OnInit {

  @ViewChild(NgForm) recipeForm: NgForm;
  errorMessage: string;
  recipe: IRecipe;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      if (this.recipeForm){
        this.recipeForm.reset();
      }
      this.recipe = data.recipeData.recipe;
    });
  }

}
