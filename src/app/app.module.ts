import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditorComponent } from './shopping/shopping-list-editor/shopping-list-editor.component';
import { RecipeListEditorComponent } from './recipe/recipe-list-editor/recipe-list-editor.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';
import { RecipeContainerComponent } from './recipe/recipe-container/recipe-container.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipeContainerComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent,
    RecipeListEditorComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeContainerComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
