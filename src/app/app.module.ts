import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListEditorComponent } from './shopping/shopping-list-editor/shopping-list-editor.component';
import { RecipeEditorComponent } from './recipe/recipe-editor/recipe-editor.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { ShoppingService } from './shopping/shopping.service';
import { RecipeService } from './recipe/recipe.service'
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeContainerComponent } from './recipe/recipe-container/recipe-container.component';
import { RoutesModule } from './routes/routes.module';
import { RecipeDetailPlaceholderComponent } from './recipe/recipe-detail-placeholder/recipe-detail-placeholder.component'

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent,
    RecipeEditorComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeContainerComponent,
    DropdownDirective,
    RecipeDetailPlaceholderComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule
  ],
  providers: [
    ShoppingService,
    RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
