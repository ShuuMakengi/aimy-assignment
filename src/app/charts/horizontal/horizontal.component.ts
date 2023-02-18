import { Component } from '@angular/core';
import { BarChartDirective } from '../bar-chart.directive';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss']
})
export class HorizontalComponent extends BarChartDirective {}
