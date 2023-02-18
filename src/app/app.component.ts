import { Component } from '@angular/core';
import { ChartLabelsModel } from './charts/model/chart-labels.model';
import { PaymentService } from './payment/payment.service';
import { PaymentMethod, PaymentModel, PaymentStatus } from './payment/model/payment.model';

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

  employees: Set<string>;

  employeeFilter: string | undefined;

  sort = 'Euro (€)';

  payments: PaymentModel[];

  filteredPayments: PaymentModel[];

  constructor(private paymentService: PaymentService) {
    this.payments = this.paymentService.getPayments();
    this.filteredPayments = [...this.payments];
    this.employees = new Set(this.filteredPayments.map(payment => payment.employee));
    this.parseChartOneData();
    this.parseChartTwoData();
  }

  parseChartOneData(): void {
    const dataByMethod = new Map<string, number>();

    for (const status of Object.values(PaymentMethod)) {
      dataByMethod.set(status, 0);
    }

    for(const payment of this.filteredPayments) {
      const toAdd = this.sort == 'Euro (€)' ? payment.amount : 1;
      // @ts-ignore
      dataByMethod.set(payment.method, dataByMethod.get(payment.method.toString()) + toAdd);
    }

    this.chartOneLabels.chartLabels = Object.values(PaymentMethod);

    this.chartOneData = [...dataByMethod.values()];
  }

  parseChartTwoData(): void {
    const dataByStatus = new Map<string, number>();
    for (const status of Object.values(PaymentStatus)) {
      dataByStatus.set(status, 0);
    }

    for(const payment of this.filteredPayments) {
      // @ts-ignore
      dataByStatus.set(payment.status, dataByStatus.get(payment.status.toString()) + 1);
    }

    this.chartTwoLabels.chartLabels = Object.values(PaymentStatus);

    this.chartTwoData = [...dataByStatus.values()];
  }

  employeeFilterChanged(): void {
    if (this.employeeFilter) {
      this.filteredPayments = this.payments.filter(payment => payment.employee == this.employeeFilter);
    } else {
      this.filteredPayments = [...this.payments];
    }

    this.parseChartOneData();
    this.parseChartTwoData();
  }
}
