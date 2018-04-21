import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipe/recipe.service';
import 'rxjs/Rx'
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable()
export class HttpService {

  baseURL = 'https://udemy-ng-http-2b8e2.firebaseio.com/';
  recipeUrl = this.baseURL+'recipes.json';

  constructor(private http: Http,
              private recipeService: RecipeService) { }

  saveRecipies(){
     return this.http.put(this.recipeUrl, this.recipeService.getRecipes());
  }

  loadRecipies(){
    return this.http.get(this.recipeUrl).map(
      (response: Response) => {
        let recipes: Recipe[] = [];

        for (let recipeJson of response.json()){
          let ingredients: Ingredient[] = [] 
          if (recipeJson['ingredients']){
            ingredients = recipeJson.ingredient;
          }

          let recipe = new Recipe(
            recipeJson['name'],
            recipeJson['description'],
            recipeJson['imagePath'],
            ingredients
          );
          recipes.push(recipe);
        }

        this.recipeService.setRecipies(recipes);
        return response;
    })
  }
}    
