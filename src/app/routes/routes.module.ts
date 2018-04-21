import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AuthGuardService } from '../auth/auth-guard.service';

const appRoutes: Routes = [
  { path: 'shopping-list', loadChildren: '../shopping/shopping-list.module#ShoppingListModule' },
  // { path: '', redirectTo: 'recipes', pathMatch: 'full'},
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
 