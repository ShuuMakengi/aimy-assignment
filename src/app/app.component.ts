import { Component } from '@angular/core';
import { ChartLabelsModel } from './charts/model/chart-labels.model';
import { PaymentService } from './payment/payment.service';
import { PaymentModel } from './payment/model/payment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navIcons = ['pregnant_woman', 'pregnant_woman', 'pregnant_woman',
    'pregnant_woman', 'pregnant_woman', 'pregnant_woman', 'pregnant_woman', 'pregnant_woman'];

  chartOneLabels: ChartLabelsModel = {
    bottomText: 'Betaalmethoden',
    title: 'Overzicht per betaalmethode',
    toggleButtons: ['Euro (€)', 'Aantal'],
    chartLabels: []
  };

  chartOneData: number[] = [];

  chartTwoLabels: ChartLabelsModel = {
    bottomText: 'Status',
    title: 'Factuurstatus',
    toggleButtons: [],
    chartLabels: []
  };

  chartTwoData: number[] = [];

  dateFilter = new Date();

  employeeFilter: string | undefined;

  sort = 'Euro (€)';

  payments: PaymentModel[];

  constructor(private paymentService: PaymentService) {
    this.payments = this.paymentService.getPayments();
    this.parseChartOneData();
    this.parseChartTwoData();
  }

  parseChartOneData(): void {
    const dataByMethod = new Map<string, number>();

    for(const payment of this.payments) {
      const toAdd = this.sort == 'Euro (€)' ? payment.amount : 1;
      dataByMethod.set(payment.method, (dataByMethod.get(payment.method) || 0) + toAdd);
    }

    this.chartOneLabels.chartLabels = [...dataByMethod.keys()];

    this.chartOneData = [...dataByMethod.values()];
  }

  parseChartTwoData(): void {
    const dataByStatus = new Map<string, number>();

    for(const payment of this.payments) {
      dataByStatus.set(payment.status, (dataByStatus.get(payment.status) || 0) + 1);
    }

    this.chartTwoLabels.chartLabels = [...dataByStatus.keys()];

    this.chartTwoData = [...dataByStatus.values()];
  }
}
