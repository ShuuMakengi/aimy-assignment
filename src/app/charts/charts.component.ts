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
  dataset!: number[];

  barChartData: ChartData<'bar'> | undefined;

  @Output()
  sortChanged = new EventEmitter<string>();

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    const backgroundColours = this.chartsService.getChartColours();
    this.barChartData = {
      labels: this.labels.chartLabels,
      datasets: [
        {
          data: this.dataset,
          backgroundColor: backgroundColours,
          maxBarThickness: 125,
        },
      ]
    };
  }
}
