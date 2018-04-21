import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model"
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  editRecipeSelected = new EventEmitter<Recipe>();
  editRecipeCancelled = new EventEmitter<Recipe>();
  recipieUpdated = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cruncy Bacon', 
      'It\'s delicious!', 
      'https://assets.epicurious.com/photos/57714624e43289453ac28e41/master/pass/diner-bacon-hero-22062016.jpg', 
      [
        new Ingredient('Package Bacon', 1),
        new Ingredient('Brown Sugar', 3)
      ]
    ),
    new Recipe(
      'Salmon', 
      'Nice and fishy.', 
      'https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46-1500x1125.jpg', 
      [
        new Ingredient('Fresh Salmon', 1),
        new Ingredient('Lemon', 2)
      ]
    )
  ]; 

  constructor() { }

  getRecipes() {
    return this.recipes.slice(); // Returns copy of array
  }

  addRecipe (recipe: Recipe) {
    this.recipes.push(recipe);
    this.emitRecipieUpdated(recipe);
  }

  removeRecipe(index){
    if (index >= 0) {
      this.recipes.splice(index, 1);
      this.emitCancelUpdate(null);
      this.emitRecipieUpdated(null);
    }
  }

  replaceRecipe(recipe: Recipe, index: number){
    if (index >= 0){
      this.recipes[index] = recipe;
      this.emitRecipieUpdated(recipe);
    }
  }

  emitRecipieUpdated(recipe: Recipe){
    this.recipieUpdated.emit(recipe);
  }

  emitCancelUpdate(recipe: Recipe){
    this.editRecipeCancelled.emit(recipe);
  }
}
