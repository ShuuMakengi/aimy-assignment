import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor() { }

  public getChartColours(): string[] {
    return [
      'rgba(135, 137, 171, 1)',
      'rgba(254, 209, 207, 1)',
      'rgba(253, 215, 131, 1)',
      'rgba(128, 207, 207, 1)',
      'rgba(128, 191, 167, 1)',
      'rgba(238, 129, 129, 1)'
    ];
  }
}
