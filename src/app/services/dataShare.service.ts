import { Injectable, inject } from '@angular/core';

import { DataCache } from './dataCache.service';

@Injectable()
export class DataShare {
    private cache = inject(DataCache);

    private sharedData: {firstNumberCache: number};

    getData(fromCache: boolean): number {
        if (fromCache) {
            return this.cache.getFirstNumCache();
        } else {
            if (this.sharedData === undefined) {
                this.sharedData = {
                    firstNumberCache: 1
                };
            }
            return this.sharedData.firstNumberCache; 
        }
    }
}