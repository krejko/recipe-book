import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule} from '@angular/http'

import { RoutesModule } from './routes/routes.module';

import { HeaderComponent } from './header/header.component';

import { AppComponent } from './app.component';

import { ShoppingListEditorComponent } from './shopping/shopping-list-editor/shopping-list-editor.component';

import { ShoppingService } from './shopping/shopping.service';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';




import { HttpService } from './shared/http.service';
import { RecipeService } from './recipe/recipe.service'

import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeModule } from './recipe/recipe.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditorComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RoutesModule,
    HttpModule,
    RecipeModule
  ],
  providers: [ 
    ShoppingService,
    RecipeService, 
    HttpService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
