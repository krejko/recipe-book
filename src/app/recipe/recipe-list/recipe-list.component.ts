import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Cruncy Bacon', 'It\'s delicious!', 'https://assets.epicurious.com/photos/57714624e43289453ac28e41/master/pass/diner-bacon-hero-22062016.jpg'),
    new Recipe('Salmon', 'Nice and fishy.', 'https://www.seriouseats.com/recipes/images/2016/08/20160826-sous-vide-salmon-46-1500x1125.jpg')

  ]; 

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  } 

}
