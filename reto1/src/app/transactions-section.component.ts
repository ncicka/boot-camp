import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';

@Component({
  selector: 'reto1-transactions-section',
  imports: [MatTableModule, MatPaginatorModule],
  template: `
    <section class="px-16 py-4 bg-white bg-opacity-5">
      <h2 class="text-center text-3xl">Historial</h2>
      <!-- <p class="text-center">transactions - section</p> -->

      @if (!transactions()) {
      } @else if (transactions()?.length === 0) {
        <p class="text-center">There are no items.</p>
      } @else {
        <div class="mat-elevation-z8">
          <table mat-table [dataSource]="transactions() ?? []">
            <!-- Position Column -->
            <ng-container matColumnDef="type">
              <th mat-header-cell *matHeaderCellDef>Type</th>
              <td mat-cell *matCellDef="let element">{{ element.type }}</td>
            </ng-container>

            <!-- Name Column -->
            <ng-container matColumnDef="timestamp">
              <th mat-header-cell *matHeaderCellDef>Timestamp</th>
              <td mat-cell *matCellDef="let element">
                {{ element.timestamp }}
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>
        </div>
      }
    </section>
  `,
  standalone: true,
})
export class TransactionsSectionComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly transactions = computedAsync(
    () => this._shyftApiService.getTransactions(this._publicKey()?.toBase58()),
    { requireSync: false },
  );

  displayedColumns: string[] = ['type', 'timestamp'];
}
