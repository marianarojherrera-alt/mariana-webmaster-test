import { Component, OnInit, signal } from '@angular/core';
import { Content } from '../../services/content';
import { AnalyticsService } from '../../services/analytics';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {

  hero = signal<any>(null);

  constructor(
    private contentService: Content,
    private analytics: AnalyticsService
  ) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe({
      next: (data) => {
        this.hero.set(data.hero);
      },

      error: (error) => {
        console.error('Error cargando content.json:', error);
      }
    });
  }

  trackCta(): void {


    this.analytics.pushEvent({
      event: 'cta_click',
      component: 'hero',
      cta_name: 'contact'
    });
  }

}