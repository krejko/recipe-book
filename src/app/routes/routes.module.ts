import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { ShoppingListComponent } from '../shopping/shopping-list/shopping-list.component';
import { AuthComponent } from '../auth/auth/auth.component'
import { AuthGuardService } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
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
