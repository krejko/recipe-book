import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { RecipeContainerComponent } from '../recipe/recipe-container/recipe-container.component';
import { RecipeDetailPlaceholderComponent } from '../recipe/recipe-detail-placeholder/recipe-detail-placeholder.component'
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeEditorComponent } from '../recipe/recipe-editor/recipe-editor.component';

import { AuthGuardService } from '../auth/auth-guard.service';

const recipeRoutes: Routes = [
  { path: '', component: RecipeContainerComponent, children: [
    { path: '', component: RecipeDetailPlaceholderComponent },
    { path: 'new', component: RecipeEditorComponent, canActivate: [AuthGuardService] },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditorComponent, canActivate: [AuthGuardService] }
  ] },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RecipeRoutingModule { }
