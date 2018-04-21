import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-editor',
  templateUrl: './shopping-list-editor.component.html',
  styleUrls: ['./shopping-list-editor.component.css']
})
export class ShoppingListEditorComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  editMode = false;
  addEditButtonTitle: string;
  index: number;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.setEditMode(false);
    this.shoppingService.editIngredient.subscribe(
      (index: number) => {
        this.setEditMode(true);
        this.index = index;
        let ingredient = this.shoppingService.getIngredients()[index]; 
        this.form.setValue({
          name: ingredient.name,
          amount: ingredient.amount
        })
      }
    )
  }

  setEditMode(editMode: boolean){
    this.editMode = editMode;
    this.addEditButtonTitle = editMode ? "Save" : "Add";
  }

  onAddItem(){
    const values = this.form.value;
    const ingredient = new Ingredient(values.name, values.amount); 
    if(this.editMode === false ){
      this.shoppingService.addIngredients([ingredient]);
    } else {
      this.shoppingService.replaceIngredient(ingredient, this.index);
    }
    this.onClear();
  }

  onDelete(){
    this.shoppingService.removeIngredient(this.index);
    this.onClear();
  }

  onClear(){
    this.form.reset();
    this.setEditMode(false);
    this.index = undefined;
  }
}
