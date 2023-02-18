import { Component } from '@angular/core';
import { ChartLabelsModel } from './charts/model/chart-labels.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navIcons = ['pregnant_woman', 'pregnant_woman', 'pregnant_woman',
    'pregnant_woman', 'pregnant_woman', 'pregnant_woman', 'pregnant_woman', 'pregnant_woman'];

  chartOne: ChartLabelsModel = {
    bottomText: 'Betaalmethoden',
    title: 'Overzicht per betaalmethode',
    toggleButtons: ['Euro (€)', 'Aantal']
  };

  chartTwo: ChartLabelsModel = {
    bottomText: 'Status',
    title: 'Factuurstatus',
    toggleButtons: []
  };
}
