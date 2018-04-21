import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';

const shoppingRoutes: Routes = [
  { path: '', component: ShoppingListComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingListRoutesModule { }
