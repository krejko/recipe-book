import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';
import { RecipeContainerComponent } from '../recipe/recipe-container/recipe-container.component';
import { RecipeDetailPlaceholderComponent } from '../recipe/recipe-detail-placeholder/recipe-detail-placeholder.component'
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeEditorComponent } from '../recipe/recipe-editor/recipe-editor.component';
import { AuthComponent } from '../auth/auth/auth.component'
import { AuthGuardService } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeContainerComponent, children: [
    { path: '', component: RecipeDetailPlaceholderComponent },
    { path: 'new', component: RecipeEditorComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditorComponent, canActivate: [AuthGuardService] }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent },
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
