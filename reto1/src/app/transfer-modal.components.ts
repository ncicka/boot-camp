import { Component } from '@angular/core';
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
      ></reto1-transfer-form>
    </div>
  `,
  standalone: true,
  imports: [TransferFormComponent],
})
export class TransferModalComponent {
  onTransfer(payload: TransferFormPayload) {
    console.log(payload);
  }
}
