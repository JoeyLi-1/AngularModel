import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';
import { PaginationProps } from '../spotlight';
import { SpotlightModel } from '../spotlight';

@Component({
    selector: 'pagination-container',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less']
})

export class PaginationComponent implements OnChanges {

    @Input() data: PaginationProps;
    @Output() selectPage: EventEmitter<any> = new EventEmitter<any>();
    @Output() pageNumber: EventEmitter<any> = new EventEmitter<any>();

    constructor(public svc: PaginationService) {
        
    }

    ngOnChanges(chg: SimpleChanges) {
        console.log(chg);
    }
}