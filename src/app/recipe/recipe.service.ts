import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model"
import { Ingredient } from '../shared/ingredient.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  editRecipeSelected = new EventEmitter<Recipe>();
  editRecipeCancelled = new EventEmitter<Recipe>();
  recipieUpdated = new EventEmitter<Recipe>();

  private recipes: Observable <{recipes:Recipe[]}> ;

  constructor(private store: Store<{recipeList: {recipes:Recipe[]}}>) { }

  getRecipes() {
    return this.recipes.slice(); // Returns copy of array
  }

  setRecipies(recipes: Recipe[]){
    this.recipes = recipes;
    this.emitRecipieUpdated(null);
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
