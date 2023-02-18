import { Component } from '@angular/core';
import { BarChartDirective } from '../bar-chart.directive';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss']
})
export class VerticalComponent extends BarChartDirective {
  constructor() {
    super();
    if (this.barChartOptions) {
      this.barChartOptions.indexAxis = 'y';
      this.barChartOptions.aspectRatio = 1.5;
    }
    if (this.chartData?.datasets?.length) {
      this.chartData.datasets[0].maxBarThickness = 40;
    }
  }
}
