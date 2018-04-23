import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown/dropdown.directive';
import { MaterialImportModuleModule } from '../material-import-module/material-import-module.module';

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    MaterialImportModuleModule
  ],
  imports:[
    MaterialImportModuleModule
  ]
})
export class SharedModule { }
