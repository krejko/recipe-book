import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingService {

  @Output() ingredientListUpdated = new EventEmitter<Ingredient[]>();
  editIngredient = new EventEmitter<number>();

  private ingredients: Ingredient[] = [
    new Ingredient ("Bacon", 50),
    new Ingredient ("Salmon", 200)
  ]
  
  constructor() { }

  getIngredients () {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients = this.ingredients.concat(ingredients);
    this.emitEngredientsUpdated();
    }

  replaceIngredient(ingredient: Ingredient, index: number){
    if (index !== -1) {
      this.ingredients[index] = ingredient;
      this.emitEngredientsUpdated();
    }  
  }

  removeIngredient(index: number){
    if (index > -1) {
      console.log(this.ingredients.length);
      this.ingredients.splice(index, 1);
      console.log(this.ingredients.length);

      this.emitEngredientsUpdated();
   }
  }

  emitEngredientsUpdated(){
    this.ingredientListUpdated.emit(this.ingredients);
  }
}
