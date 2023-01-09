import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipes1Component } from './pipes1/pipes1.component';
import { Pipes2Component } from './pipes2/pipes2.component';



@NgModule({
  declarations: [
    Pipes1Component,
    Pipes2Component
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
