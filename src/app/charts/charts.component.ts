import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChartsService } from './charts.service';
import { ChartData } from 'chart.js';
import { ChartLabelsModel } from './model/chart-labels.model';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input()
  labels!: ChartLabelsModel;

  @Input()
  set dataset(dataset: number[]) {
    this._dataset = dataset;
    this.initChartData();
  }

  _dataset!: number[];

  barChartData: ChartData<'bar'> | undefined;

  @Output()
  sortChanged = new EventEmitter<string>();

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    this.initChartData();
  }

  initChartData(): void {
    const backgroundColours = this.chartsService.getChartColours();
    this.barChartData = {
      labels: this.labels.chartLabels,
      datasets: [
        {
          data: this._dataset,
          backgroundColor: backgroundColours,
          maxBarThickness: 125,
        },
      ]
    };
  }
}
