import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'], 
  providers: []
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientListUpdated.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = this.shoppingService.getIngredients();
      }
    )
  }

  onSelect(index: number) {
    this.shoppingService.editIngredient.emit(index);
  }
}
