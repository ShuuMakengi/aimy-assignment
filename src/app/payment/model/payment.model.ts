export interface PaymentModel {
  employee: string;
  date: Date;
  amount: number;
  status: 'Betaald' | 'Open' | 'In proces' | 'Verzoek gestuurd' | 'Terugstorting';
  method: 'Pin' | 'Credit-Card' | 'Betaalverzoek' | 'iDeal' | 'Apple Pay' | 'Abonnement';
}
