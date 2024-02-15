import { Component } from '@angular/core';

@Component({
  selector: 'reto1-features-section',
  template: `
    <section class="px-16 py-4">
      <ul class="flex justify-center items-center gap-16">
        <li class="text-xl font-bold">Rapido</li>
        <li class="text-xl font-bold">Eficiente</li>
        <li class="text-xl font-bold">Seguro</li>
      </ul>
    </section>
  `,
  standalone: true,
})
export class FeaturesSectionComponent {}
