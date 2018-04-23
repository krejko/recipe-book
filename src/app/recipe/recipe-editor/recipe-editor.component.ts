import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Store } from '@ngrx/store';
import { AddRecipe } from '../recipe.action';
import * as RecipeActions from '../recipe.action'
import * as RecipeReducer from '../recipe.reducer'

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.css']
})
export class RecipeEditorComponent implements OnInit {
  id: number;
  editMode = false;
  form: FormGroup;

  constructor(private activeRoute: ActivatedRoute,
              private recipeService: RecipeService,
              private store: Store <RecipeReducer.AppState>) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        let exists = params['id'] != null;
        let id = +params['id']
        if (exists && (this.recipeService.getRecipes()[id] != null)){
          this.id = id;
          this.editMode = exists;
        }else if (exists){
          this.recipeService.emitCancelUpdate(null);
        }
        this.initForm();
      }
    )
  }

  initForm(){
    let name = '';
    let imageURL = '';
    let description = '';
    let ingredients = new FormArray([]);

    if (this.editMode === true){
      const recipe = this.recipeService.getRecipes()[this.id];
      name = recipe.name;
      imageURL = recipe.imagePath;
      description = recipe.description;
      if (recipe["ingredients"]){
        for(let ingredient of recipe.ingredients){
          ingredients.push( this.newIngredientFormGroup(ingredient.name, ingredient.amount));
        }
      }
    }

    this.form = new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'imageURL': new FormControl(imageURL, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'ingredients': ingredients
    });
  }

  onSubmit(){
    let recipe = new Recipe(
      this.form.value.name,
      this.form.value.description,
      this.form.value.imageURL,
      this.form.value.ingredients
    )

    if(this.editMode == true && this.id != undefined){
      let index = this.id;
      this.store.dispatch(new RecipeActions.UpdateRecipe({recipe, index}))
    }else{
      this.store.dispatch(new RecipeActions.AddRecipe(recipe))
    }
  }

  onCancel(){
    let recipe = null;
    if (this.editMode == true){
      recipe = this.recipeService.getRecipes()[this.id];
    }
    this.recipeService.emitCancelUpdate(recipe);
  }

  onAddIngredient() {
    let formGroup = this.newIngredientFormGroup(null, null);
    this.getIngredientsFormArray().push(formGroup);
  }

  getIngredientsFormArray() : FormArray {
    return (<FormArray>this.form.get('ingredients'));
  }

  newIngredientFormGroup(name: string, amount: number){
    return new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'amount': new FormControl(amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }

  onRemoveIngredient(i: number){
    this.getIngredientsFormArray().removeAt(i);
  }

}
