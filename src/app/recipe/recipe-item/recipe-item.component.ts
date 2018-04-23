// import { Component, OnInit, Input } from '@angular/core';
// import { Recipe } from '../recipe.model'
// import { RecipeService } from '../recipe.service';

// @Component({
//   selector: 'app-recipe-item',
//   templateUrl: './recipe-item.component.html',
//   styleUrls: ['./recipe-item.component.css']
// })
// export class RecipeItemComponent implements OnInit {
//   @Input() recipe: Recipe;

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit() {
//   }

//   onSelect() {
//     this.recipeService.recipeSelected.emit(this.recipe);
//   }
// }
 

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store'
import { Router, ActivatedRoute } from '@angular/router'
import * as RecipeReducer from '../recipe.reducer'
import * as RecipeActions from '../recipe.action'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
 
export class RecipeItemComponent implements OnInit {
  @Input() index: number;
  @Input() recipe: Recipe;

  constructor(private store: Store<RecipeReducer.AppState>,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelect() {
    this.router.navigate([this.index], {relativeTo: this.activeRoute})
    this.store.dispatch(new RecipeActions.SelectedRecipe(this.index))
  }
}
 