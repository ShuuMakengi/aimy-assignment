import { Directive, Input, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
      tooltip: {
        enabled: false,
      }
    },
    indexAxis: 'x',
    aspectRatio: 4,
  };
  barChartType: ChartType = 'bar';
  barChartPlugins = [ChartDataLabels];

  @Input('chartData')
  set chartData(chartData: ChartData<'bar'> | undefined) {
    if (!chartData) {
      return;
    }
    this.chartDataHorizontal = JSON.parse(JSON.stringify(chartData));
    this.chartDataVertical = JSON.parse(JSON.stringify(chartData));

    if (this.chartDataHorizontal?.datasets?.length) {
      this.chartDataHorizontal.datasets[0].maxBarThickness = 40;
      this.chartDataHorizontal.datasets[0].datalabels = {
        anchor: 'end',
        align: 'top'
      };

    }

    if (this.chartDataVertical?.datasets?.length) {
      this.chartDataVertical.datasets[0].maxBarThickness = 40;
      this.chartDataVertical.datasets[0].datalabels = {
        anchor: 'end',
        align: 'right'
      };

    }
    this.updateChart();
  }

  chartDataHorizontal: ChartData<'bar'> | undefined;

  chartDataVertical: ChartData<'bar'> | undefined;


  constructor() {
    Chart.register(ChartDataLabels);
  }

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
