import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule} from '@angular/http'

import { StoreModule } from '@ngrx/store';
import { recipeReducer } from './recipe/recipe.reducer'

import { AppComponent } from './app.component';

import { HttpService } from './shared/http.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeService } from './recipe/recipe.service'
import { ShoppingService } from './shopping/shopping.service';

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RoutesModule,
    HttpModule,
    AuthModule, 
    CoreModule,
    StoreModule.forRoot({recipeList: recipeReducer})
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
