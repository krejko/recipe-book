import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { RoutesModule } from '../routes/routes.module';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule, 
    SharedModule,
    RoutesModule
  ],
  exports:[
    RoutesModule, 
    HeaderComponent
  ]
})
export class CoreModule { }
