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
  id: number;
  @Input() recipe: Recipe;

  constructor(private shoppingService: ShoppingService,
              private recipeService: RecipeService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.setRecipeFromID(this.activeRoute.snapshot.params['id']);
    this.activeRoute.params.subscribe(
      (params: Params) => {
        let exists = params['id'] != null;
        let id = +params['id']
        if (exists && (this.recipeService.getRecipes()[id] != null)){
          this.setRecipeFromID(params['id'])
        }else if (exists){
          this.recipeService.emitCancelUpdate(null);
        }
      });
  }

  setRecipeFromID(id){
    this.id = id;
    this.recipe = this.recipeService.getRecipes()[id];
  }

  onAddIngredientsToList() {
    this.shoppingService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe(){
    this.recipeService.editRecipeSelected.emit(this.recipe);
  }

  onDeleteRecipe(){
    this.recipeService.removeRecipe(this.id);
  }
}
