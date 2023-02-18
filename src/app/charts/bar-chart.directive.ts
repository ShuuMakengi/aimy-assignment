import { Directive, Input, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Directive({
  selector: '[appBarChart]'
})
export class BarChartDirective {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {}
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    indexAxis: 'x',
    aspectRatio: 4,
  };
  barChartType: ChartType = 'bar';
  barChartPlugins = [];

  @Input('chartData')
  set chartData(chartData: ChartData<'bar'> | undefined) {
    if (!chartData) {
      return;
    }
    this._chartData = chartData;
    this.updateChart();
  }

  _chartData: ChartData<'bar'> | undefined;

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public updateChart(): void {
    this.chart?.update();
  }

}
