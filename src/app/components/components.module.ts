import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pipes1Component } from './pipes1/pipes1.component';
import { Pipes2Component } from './pipes2/pipes2.component';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { MonedasPipe } from './monedas.pipe';
import { EurosPipe } from './euros.pipe';


@NgModule({
  declarations: [
    Pipes1Component,
    Pipes2Component,
    IndexComponent,
    MonedasPipe,
    EurosPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Pipes1Component,
    Pipes2Component,
    IndexComponent,
    MonedasPipe,
    EurosPipe
  ],
})
export class ComponentsModule { }
