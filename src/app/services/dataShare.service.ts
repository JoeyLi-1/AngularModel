import { Injectable } from '@angular/core';

import { DataCache } from './dataCache.service';

@Injectable()
export class DataShare {
    private sharedData: {firstNumberCache: number};
    constructor(private cache: DataCache) {

    }

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