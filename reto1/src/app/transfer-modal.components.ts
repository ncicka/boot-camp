import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createTransferInstructions } from '@heavy-duty/spl-utils';
import { injectTransactionSender } from '@heavy-duty/wallet-adapter';
import {
  TransferFormComponent,
  TransferFormPayload,
} from './transfer-form.component';

@Component({
  selector: 'reto1-transfer-modal',
  template: `
    <div class="px-8 pt-16 pb-8">
      <h2 class="text-3xl text-center mb-8">Transferir fondos</h2>
      <reto1-transfer-form
        (submitFrom)="onTransfer($event)"
        [balance]="data.balance"
      ></reto1-transfer-form>
    </div>
  `,
  standalone: true,
  imports: [TransferFormComponent],
})
export class TransferModalComponent {
  private readonly _transactionSender = injectTransactionSender();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onTransfer(payload: TransferFormPayload) {
    console.log(payload);
    this._transactionSender
      .send(({ publicKey }) =>
        createTransferInstructions({
          amount: payload.amount,
          mintAddress: '7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs',
          receiverAddress: payload.receiverAddress,
          senderAddress: publicKey.toBase58(),
          fundReceiver: true,
        }),
      )
      .subscribe({
        next: (signature) => console.log(`Firma: ${signature}`),
        error: (error) => console.error(error),
        complete: () => console.log('Transaccion lista'),
      });
  }
}
