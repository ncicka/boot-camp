import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'reto1-root',
  template: `
    <header class="px-16 pt-24 pb-8">
      <h1 class="text-center text-5xl mb-4">My Bank</h1>

    </header>

    <main></main>
  `,
})
export class AppComponent {
}
