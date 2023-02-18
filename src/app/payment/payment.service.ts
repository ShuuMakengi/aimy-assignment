import { Injectable } from '@angular/core';
import { PaymentMethod, PaymentModel, PaymentStatus } from './model/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }

  public getPayments(): PaymentModel[] {
    const result: PaymentModel[] = [];
    for (let i = 0; i < 50; i++) {
      result.push(PaymentService.generatePaymentModel());
    }
    return result;
  }

  private static generatePaymentModel(): PaymentModel {
    return {
      amount: Math.random() * 500,
      date: PaymentService.getRandomDate(),
      employee: PaymentService.getRandomEmployee(),
      status: this.getRandomStatus(),
      method: this.getRandomMethod(),
    };
  }

  private static getRandomDate() {
    const start = new Date(2023, 1, 14);
    return new Date(start.getTime() + Math.random() * (new Date().getTime() - start.getTime()));
  }

  private static getRandomEmployee(): string {
    const employees = ['Amy', 'Bella', 'Cecil', 'Diane', 'Esther', 'Fiona', 'Gabriel'];
    const random = Math.floor(Math.random() * employees.length);

    return employees[random];
  }

  private static getRandomStatus(): PaymentStatus {
    const random = Math.random();
    if (random > 0.6) {
      return PaymentStatus.BETAALD;
    }
    if (random > 0.5) {
      return PaymentStatus.OPEN;
    }
    if (random > 0.4) {
      return PaymentStatus.IN_PROCES;
    }
    if (random > 0.3) {
      return PaymentStatus.VERZOEK_GESTUURD;
    }
    return PaymentStatus.TERUGSTORTING;
  }

  private static getRandomMethod(): PaymentMethod {
    const random = Math.random();
    if (random > 0.7) {
      return PaymentMethod.PIN;
    }
    if (random > 0.5) {
      return PaymentMethod.IDEAL;
    }
    if (random > 0.4) {
      return PaymentMethod.ABONNEMENT;
    }
    if (random > 0.3) {
      return PaymentMethod.BETAALVERZOEK;
    }
    if (random > 0.2) {
      return PaymentMethod.CREDITCARD;
    }
    return PaymentMethod.APPLE_PAY;
  }
}
