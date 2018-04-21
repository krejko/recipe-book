import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
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
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    this.form = new FormGroup({
      'name': new FormControl(name),
      'imageURL': new FormControl(imageURL),
      'description': new FormControl(description),
      'ingredients': ingredients
    });
  }

  onSubmit(){
    console.log(this.form)
  }

}
