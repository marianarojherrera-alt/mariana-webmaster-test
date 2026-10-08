import { Injectable } from '@angular/core';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {

  pushEvent(event: any): void {

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push(event);

    console.log('dataLayer event:', event);

  }

}