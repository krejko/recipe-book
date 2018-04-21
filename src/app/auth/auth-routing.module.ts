import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'


import { AuthComponent } from './auth/auth.component'

const authRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AuthRoutingModule { }
