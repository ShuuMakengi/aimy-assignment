import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ChartsComponent } from './charts.component';



@NgModule({
  declarations: [
    VerticalComponent,
    HorizontalComponent,
    ChartsComponent
  ],
  exports: [
    ChartsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChartsModule { }
