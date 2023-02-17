import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ChartsComponent } from './charts.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';



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
    CommonModule,
    NgChartsModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class ChartsModule { }
