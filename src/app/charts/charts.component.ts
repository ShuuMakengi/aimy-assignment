import { Component, Input, OnInit } from '@angular/core';
import { ChartsService } from './charts.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  @Input()
  title: string = '';

  barChartData: ChartData<'bar'> | undefined;

  constructor(private chartsService: ChartsService) {}

  ngOnInit(): void {
    const backgroundColours = this.chartsService.getChartColours();
    this.barChartData = {
      labels: [ '2006', '2007', '2008', '2009', '2010', '2011' ],
      datasets: [
        {
          data: [ 65, 59, 80, 81, 56, 55 ],
          backgroundColor: backgroundColours,
          maxBarThickness: 125,
        },
      ]
    };
  }
}
