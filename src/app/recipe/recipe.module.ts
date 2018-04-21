import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { RecipeRoutingModule } from './recipe-routing.module';

import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailPlaceholderComponent } from './recipe-detail-placeholder/recipe-detail-placeholder.component'
import { RecipeContainerComponent } from './recipe-container/recipe-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeEditorComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeContainerComponent,
    RecipeDetailPlaceholderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule
  ],
})
export class RecipeModule { }
