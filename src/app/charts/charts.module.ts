import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { ChartsComponent } from './charts.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { BarChartDirective } from './bar-chart.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    VerticalComponent,
    HorizontalComponent,
    ChartsComponent,
    BarChartDirective
  ],
  exports: [
    ChartsComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    FlexLayoutModule,
    MatButtonToggleModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: false }}
  ]
})
export class ChartsModule { }
