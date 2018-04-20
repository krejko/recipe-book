import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeContainerComponent } from './recipe/recipe-container/recipe-container.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeContainerComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutesModule { }
