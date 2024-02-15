import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { WalletStore } from '@heavy-duty/wallet-adapter';
import { computedAsync } from 'ngxtension/computed-async';
import { ShyftApiService } from './shyft-api.service';

@Component({
  selector: 'reto1-balance-section',
  template: `
    <section class="px-16 py-4">
      <h2 class="text-center text-3xl">Balance</h2>
      <p class="text-center">balance- section</p>
    </section>
    @if (account()) {
      <div class="py-4 flex justify-center  items-center gap-2">
        <img [src]="account()?.info?.image" class="w-8 h8" />
        <p class="text-2xl font-bold">
          {{ account()?.balance }}
        </p>
      </div>
    }
  `,
  standalone: true,
})
export class BalanceSectionComponent {
  private readonly _shyftApiService = inject(ShyftApiService);
  private readonly _walletStore = inject(WalletStore);
  private readonly _publicKey = toSignal(this._walletStore.publicKey$);
  readonly account = computedAsync(
    () => this._shyftApiService.getAccount(this._publicKey()?.toBase58()),
    { requireSync: false },
  );
}
