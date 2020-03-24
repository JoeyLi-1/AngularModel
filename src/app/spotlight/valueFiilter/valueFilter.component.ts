import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValueFilterService } from './valueFilter.service';
import { ValueFilterProps } from '../spotlight';

@Component({
    selector: 'value-filter',
    templateUrl: './valuefilter.component.html'
})

export class ValueFilterComponet implements OnChanges {

    @Input() data: ValueFilterProps;

    constructor(public svc: ValueFilterService) {
        
    }

    ngOnChanges(chg: SimpleChanges) {
        console.log(chg);
    }
}