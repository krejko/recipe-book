import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.css'],
  providers: [RecipeService]
})
export class RecipeContainerComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => { 
        this.selectedRecipe = recipe; 
      }
    );
  }

}
