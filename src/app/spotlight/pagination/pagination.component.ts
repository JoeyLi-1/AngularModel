import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';
import { PaginationProps } from '../spotlight';

@Component({
    selector: 'pagination-container',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnChanges {

    @Input() data: PaginationProps;
    @Output() selectPage: EventEmitter<any> = new EventEmitter<any>();

    constructor(public svc: PaginationService) {
        
    }

    ngOnChanges(chg: SimpleChanges) {  
    }
}