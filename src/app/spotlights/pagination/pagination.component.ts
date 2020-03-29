import { Component, Input, Output,EventEmitter, OnChanges } from '@angular/core'
import { PaginationProps } from 'src/app/spotlights/spotlights'
import {PaginationsService} from './pagination.component.service'

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.less'],
})

export class Pagination implements OnChanges{

    @Input() analysis: PaginationProps;
    @Output() selectedPageFuncation: EventEmitter<any> = new EventEmitter<any>();

    constructor(public service: PaginationsService) {

    }

    ngOnChanges() {

    }
}