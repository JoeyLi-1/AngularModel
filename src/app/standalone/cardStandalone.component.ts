import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataCache } from '@app/services/dataCache.service';

@Component({
  selector: 'card-standalone',
  standalone: true,
  imports: [CommonModule],
  providers: [DataCache],
  template: `
    <div class="corp-card-actions">
      <p>
          This is a standalone component
      </p>
      <div><label>{{cacheNumber}}</label></div>
      <button (click)="increase()">Increase</button>
      <button (click)="decrease()">Decrease</button>
    </div>
  `
})
export class CardStandaloneComponent {
  private cache = inject(DataCache);

  cacheNumber = 0;
  constructor() {
    const cache = this.cache;

    cache.setFirstNumCache(100);            // The DataCache is not shared between standalone component and other component
    this.init();
  }

  init() {
    this.cacheNumber = this.cache.getFirstNumCache();
  }

  increase() {
    this.cache.setFirstNumCache(this.cache.getFirstNumCache() + 1);
    this.cacheNumber = this.cache.getFirstNumCache();
  }

  decrease() {
    this.cache.setFirstNumCache(this.cache.getFirstNumCache() - 1);
    this.cacheNumber = this.cache.getFirstNumCache();
  }
}