export interface PaymentModel {
  employee: string;
  date: Date;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
}

export enum PaymentStatus {
  BETAALD = 'Betaald',
  OPEN = 'Open',
  IN_PROCES = 'In proces',
  VERZOEK_GESTUURD = 'Verzoek gestuurd',
  TERUGSTORTING = 'Terugstorting'
}

export enum PaymentMethod {
  PIN = 'Pin',
  CREDITCARD = 'Credit-Card',
  BETAALVERZOEK = 'Betaalverzoek',
  IDEAL = 'iDeal',
  APPLE_PAY = 'Apple Pay',
  ABONNEMENT = 'Abonnement'
}
