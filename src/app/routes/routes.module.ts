import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent }  from '../home/home.component'
import { AuthGuardService } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shopping-list', loadChildren: '../shopping/shopping-list.module#ShoppingListModule' },
  { path: 'recipes', loadChildren: '../recipe/recipe.module#RecipeModule' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class RoutesModule { }
 