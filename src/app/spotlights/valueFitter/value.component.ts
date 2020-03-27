
import {Component, Input , OnChanges} from '@angular/core';
import {ValueService} from './value.component.service';
import { ValueModel  } from '../spotlights';

@Component({
    selector: "value",
    templateUrl: "./value.component.html",
}) 

export class ValueComponent implements OnChanges {
    @Input() value: ValueModel;
    constructor(public service: ValueService) {

    }

    ngOnChanges() {

    }

    changeValue() {
        this.service.changeValue(this.value);
    }
}