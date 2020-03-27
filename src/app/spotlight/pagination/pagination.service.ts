import { Injectable } from '@angular/core';
import { PaginationProps } from '../spotlight';
import { SpotlightModel } from '../spotlight';
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

    previousPageChanged(index: string,model: SpotlightModel) {
        model.analysis = [{name: 'analysis - 1'}, {name: 'analysis - 2'}, {name: 'analysis - 3'}];
        model.pagination.count=['1', '2', '3'];
    }
    nextPageChanged(index: string,model: SpotlightModel) {
        model.analysis = [{name: 'analysis - 4'}, {name: 'analysis - 5'}, {name: 'analysis - 6'}];
        model.pagination.count=['4', '5', '6'];
    }
}