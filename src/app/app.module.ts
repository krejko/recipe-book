import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpService } from './shared/http.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipeService } from './recipe/recipe.service'
import { ShoppingService } from './shopping/shopping.service';

import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RoutesModule,
    HttpModule,
    AuthModule
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
