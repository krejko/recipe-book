import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListRoutesModule } from './shopping-list-routes.module';
import { FormsModule } from '@angular/forms'

import { ShoppingListEditorComponent } from './shopping-list-editor/shopping-list-editor.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListEditorComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ShoppingListRoutesModule
  ],
})
export class ShoppingListModule { }
