import { Component } from '@angular/core';
import { BalanceSectionComponent } from './balance-section.component';
import { TransactionsSectionComponent } from './transactions-section.component';

@Component({
  selector: 'reto1-balance-page',
  template: `
    <reto1-balance-section></reto1-balance-section>
    <reto1-transactions-section></reto1-transactions-section>
  `,

  standalone: true,
  imports: [BalanceSectionComponent, TransactionsSectionComponent],
})
export class BalancePageComponent {}
