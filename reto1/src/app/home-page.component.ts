import { Component } from '@angular/core';
import { FeaturesSectionComponent } from './features-section.component';
import { HeroSectionComponent } from './hero-section.component';

@Component({
  selector: 'reto1-home-page',
  template: `
    <reto1-hero-section></reto1-hero-section>
    <reto1-features-section></reto1-features-section>
  `,
  standalone: true,
  imports: [HeroSectionComponent, FeaturesSectionComponent],
})
export class HomePageComponent {}
