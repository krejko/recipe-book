import { Injectable, Output, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model"

@Injectable()
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Cruncy Bacon', 'It\'s delicious!', 'https://assets.epicurious.com/photos/57714624e43289453ac28e41/master/pass/diner-bacon-hero-22062016.jpg'),
    new Recipe('Salmon', 'Nice and fishy.', 'https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46-1500x1125.jpg')
  ]; 

  constructor() { }

    getRecipes() {
      return this.recipes.slice(); // Returns copy of array
    }
}
