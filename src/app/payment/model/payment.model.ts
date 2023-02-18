export interface PaymentModel {
  employee: string;
  date: Date;
  amount: number;
  currency: 'euro' | 'pound' | 'forint';
  status: 'Betaald' | 'Open' | 'In proces' | 'Verzoek gestuurd' | 'Terugstorting';
}
