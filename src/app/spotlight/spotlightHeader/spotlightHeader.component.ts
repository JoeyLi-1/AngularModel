import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SpotlightHeaderService } from './spotlightHeader.service';
import { SpotlightHeaderProps } from '../spotlight';

@Component({
    selector: 'spotlight-header',
    templateUrl: './spotlightHeader.component.html'
})

export class SpotlightHeader implements OnChanges {

    @Input() data: SpotlightHeaderProps;

    constructor(public svc: SpotlightHeaderService) {
        
    }

    ngOnChanges(chg: SimpleChanges) {
        console.log(chg);
    }
}