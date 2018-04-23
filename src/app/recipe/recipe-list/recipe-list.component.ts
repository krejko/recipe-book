import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from "../recipe.model"
import { Router, ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs/Observable'
import { Store } from '@ngrx/store';
import * as RecipeReducer from '../recipe.reducer'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  
  recipesState: Observable<RecipeReducer.State>; 
  subscription: Subscription;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private store: Store<RecipeReducer.AppState>) { }

  ngOnInit() {
    this.recipesState = this.store.select('recipeList');
    this.subscription = this.recipesState.subscribe(
      data => {
        if (data.selectedRecipeIndex != undefined){
            if (data.editMode == false){
              // this.router.navigate([data.selectedRecipeIndex], {relativeTo: this.activeRoute})
            }else{
              
            }

        } 
      }
    );
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => { 
    //     this.navigateToDetail(recipe);
    //   }
    // ); 
    // this.recipeService.editRecipeSelected.subscribe(
    //   (recipe: Recipe) => { 
    //     let index = this.recipesState.indexOf(recipe);
    //     this.router.navigate([index, "edit"], {relativeTo: this.activeRoute})
    //   }
    // );
    // this.recipeService.editRecipeCancelled.subscribe(
    //   (recipe: Recipe) => {
    //     this.navigateToDetail(recipe);
    //   } 
    // )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navigateToDetail(recipe){
    let index = this.recipesState.indexOf(recipe);

    if (index == -1){
      console.log("here");
      
      this.router.navigate(["recipes"])
    }else{
      this.router.navigate([index], {relativeTo: this.activeRoute})
    }
  }

  onNewRecipe(){
    this.router.navigate(["recipes", "new"])
  }


}
