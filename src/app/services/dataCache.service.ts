import { Injectable } from '@angular/core';
@Injectable()
export class CarePrismCache {

    private firstNumberCache: number;

    constructor() {
        this.initCache();
    }

    private initCache() {
        this.firstNumberCache = 1;
    }

    getFirstNumCache() {
        return this.firstNumberCache;
    }

    setFirstNumCache(val: number) {
        this.firstNumberCache = val;
    }
}