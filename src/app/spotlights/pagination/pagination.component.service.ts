import { Injectable, EventEmitter } from '@angular/core';
import { PaginationProps } from 'src/app/spotlight/spotlight'

@Injectable()

export class PaginationsService {
    constructor() {
    }

    selectedPage(analysis: string, eventEmitter: EventEmitter<any>, data: PaginationProps) {
        let indexId = data.currentIndex;
        if (analysis === "-1") {
            if (indexId - 1 >= 0) {
                indexId = indexId - 1;
            } 
        } else if (analysis === "-100") {
            if (indexId + 1 < data.count.length) {
                indexId = indexId + 1;
            } 
        } else {
          indexId = data.count.indexOf(analysis);
        }
        data.currentIndex = indexId;
        eventEmitter.emit(indexId);
    }
}