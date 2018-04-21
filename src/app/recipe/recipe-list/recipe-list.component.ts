import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from "../recipe.model"
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = []; 

  constructor(private recipeService: RecipeService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => { 
        this.navigateToDetail(recipe);
      }
    );
    this.recipeService.editRecipeSelected.subscribe(
      (recipe: Recipe) => { 
        let index = this.recipes.indexOf(recipe);
        this.router.navigate([index, "edit"], {relativeTo: this.activeRoute})
      }
    );
    this.recipeService.recipieUpdated.subscribe(
      (recipe: Recipe) => {
        console.log("updated sub")

        this.recipes = this.recipeService.getRecipes();
        this.navigateToDetail(recipe);
      }
    );
    this.recipeService.editRecipeCancelled.subscribe(
      (recipe: Recipe) => {
        this.navigateToDetail(recipe);
      }
    )
  }

  navigateToDetail(recipe){
    let index = this.recipes.indexOf(recipe);
    console.log("Details")

    if (index == -1){
      this.router.navigate(["recipes"])
    }else{
      this.router.navigate([index], {relativeTo: this.activeRoute})
    }
  }

  onNewRecipe(){
    this.router.navigate(["recipes", "new"])
  }


}
