import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';
import { PaginationProps } from '../spotlight';

@Component({
    selector: 'pagination-container',
    templateUrl: './pagination.component.html'
})

export class PaginationComponent implements OnChanges {// OnChange接口   shouldUpdateConponent--RN

    @Input() data: PaginationProps;//prop   将Prop 和State 包在一块 合在一起?  依然很干净
    @Output() selectPage: EventEmitter<any> = new EventEmitter<any>();

    constructor(public svc: PaginationService) {
        
    }

    ngOnChanges(chg: SimpleChanges) {   // 包着数据
        console.log(chg);
    }
}