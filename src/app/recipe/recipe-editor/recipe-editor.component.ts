import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';

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
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
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
    console.log(this.form)
  }

  onAddIngredient() {
    let formGroup = this.newIngredientFormGroup(null, null);
    (<FormArray>this.form.get('ingredients')).push(formGroup);
  }

  newIngredientFormGroup(name: string, amount: number){
    return new FormGroup({
      'name': new FormControl(name, [Validators.required]),
      'amount': new FormControl(amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }



}
