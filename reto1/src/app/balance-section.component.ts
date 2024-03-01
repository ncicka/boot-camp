import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';
import { TransferModalComponent } from './transfer-modal.components';

@Component({
  selector: 'reto1-balance-section',
  imports: [MatButton],
  template: `
    <section class="px-16 py-24 bg-white bg-opacity-5">
      <h2 class="text-center text-3xl">Balance</h2>
      @if (account()) {
        <div class="py-4 flex justify-center  items-center gap-2 mb-4">
          <img [src]="account()?.info?.image" class="w-8 h8" />
          <p class="text-2xl font-bold">
            {{ account()?.balance }}
          </p>
        </div>
        <footer class="flex justify-center">
          <button mat-raised-button color="primary" (click)="onTransfer()">
            Transferir
          </button>
        </footer>
      }
    </section>
  `,
  standalone: true,
})
export class BalanceSectionComponent {
  private readonly _matDialog = inject(MatDialog);
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);

  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: false },
  );

  onTransfer() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = { balance: this.account()?.balance };
    this._matDialog.open(TransferModalComponent, dialogConfig);
  }
}
