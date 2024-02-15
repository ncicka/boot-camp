import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';

@Component({
  selector: 'reto1-balance-page',
  template: ` <reto1-balance-section></reto1-balance-section>`,

  standalone: true,
  imports: [BalanceSectionComponent],
})
export class BalancePageComponent {}
