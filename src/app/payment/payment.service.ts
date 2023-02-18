import { Injectable } from '@angular/core';
import { PaymentModel } from './model/payment.model';

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

  private static getRandomStatus(): 'Betaald' | 'Open' | 'In proces' | 'Verzoek gestuurd' | 'Terugstorting' {
    const random = Math.random();
    if (random > 0.6) {
      return 'Betaald';
    }
    if (random > 0.5) {
      return 'Open'
    }
    if (random > 0.4) {
      return 'In proces';
    }
    if (random > 0.3) {
      return 'Verzoek gestuurd'
    }
    return 'Terugstorting';
  }

  private static getRandomMethod(): 'Pin' | 'Credit-Card' | 'Betaalverzoek' | 'iDeal' | 'Apple Pay' | 'Abonnement' {
    const random = Math.random();
    if (random > 0.7) {
      return 'Pin';
    }
    if (random > 0.5) {
      return 'iDeal'
    }
    if (random > 0.4) {
      return 'Abonnement';
    }
    if (random > 0.3) {
      return 'Betaalverzoek'
    }
    if (random > 0.2) {
      return 'Credit-Card';
    }
    return 'Apple Pay';
  }
}
