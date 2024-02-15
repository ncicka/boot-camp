import { Component } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HdWalletMultiButtonComponent } from '@heavy-duty/wallet-adapter-material';

@Component({
  standalone: true,
  imports: [RouterModule, HdWalletMultiButtonComponent, MatAnchor],
  selector: 'reto1-root',
  template: `
    <header class="px-16 pt-20 pb-4 relative">
      <h1 class="text-center text-5xl mb-4">My Bank</h1>

      <div class="flex justify-center mb-4">
        <hd-wallet-multi-button></hd-wallet-multi-button>
      </div>
    </header>

    <nav>
      <ul class="flex justify-center items-center gap-4">
        <li>
          <a [routerLink]="['']" mat-raised-button>Home</a>
        </li>
        <li>
          <a [routerLink]="['balance']" mat-raised-button>Balance</a>
        </li>
        <li>
          <a [routerLink]="['settings']" mat-raised-button>Settings</a>
        </li>
      </ul>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class AppComponent {}
