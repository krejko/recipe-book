import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../shopping/shopping.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as RecipeReducer from '../recipe.reducer'
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as RecipeActions from '../recipe.action';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit, OnDestroy {
  state: RecipeReducer.State;
  recipesState: Observable<RecipeReducer.State>; 
  subscription: Subscription;
  
  constructor(private shoppingService: ShoppingService,
              private router: Router,
              private activeRoute: ActivatedRoute,
              private store: Store<RecipeReducer.AppState>) { }
  ngOnInit() {
    let id = this.activeRoute.snapshot.params['id'];
    if (id != undefined){
      this.store.dispatch(new RecipeActions.SelectedRecipe(id))
    }


    this.recipesState = this.store.select('recipeList');

    let value = this.recipesState.map(
      (state: RecipeReducer.State) => {
        return state.recipes;
    });
    console.log(value);
    

    this.subscription = this.recipesState.subscribe(
      data => {
        this.state = data;
        if (this.state.selectedRecipe == null){
          this.router.navigate(['recipes']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onAddIngredientsToList() {
    this.shoppingService.addIngredients(this.state.selectedRecipe.ingredients);
  }

  onEditRecipe(){
    this.store.dispatch(new RecipeActions.StartEditRecipe(this.state.selectedRecipeIndex))
  }

  onDeleteRecipe(){
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.state.selectedRecipeIndex))
  }
}
