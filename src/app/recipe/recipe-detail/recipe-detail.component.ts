import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from '../../shopping/shopping.service';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingService: ShoppingService,
              private recipeService: RecipeService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setRecipeFromID(this.activeRoute.snapshot.params['id']);
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.setRecipeFromID(params['id'])
      });
  }

  setRecipeFromID(id){
    this.recipe = this.recipeService.getRecipes()[id];
  }

  onAddIngredientsToList() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.recipeService.editRecipeSelected.emit(this.recipe);
  }
}
