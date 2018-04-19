import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingService {

  @Output() ingredientAdded = new EventEmitter<Ingredient[]>();

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
    this.ingredientAdded.emit(ingredients);
  }
}
