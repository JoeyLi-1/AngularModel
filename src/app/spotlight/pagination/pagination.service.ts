import { Injectable } from '@angular/core';
import { PaginationProps } from '../spotlight';
import { EventEmitter } from '@angular/core';

@Injectable()

export class PaginationService {
    constructor() {
        
    }

    selectedPageChanged(index: string, cb: EventEmitter<any>, data: PaginationProps) {
        const indexId = data.count.indexOf(index);
        cb.emit(indexId);
        data.currentIndex = indexId;
    }
}