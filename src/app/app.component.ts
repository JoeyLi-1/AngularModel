import { Component } from '@angular/core';
import { DataCache } from '@app/services/dataCache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';
  cacheNumber = 0;
  constructor(private cache: DataCache) {

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
