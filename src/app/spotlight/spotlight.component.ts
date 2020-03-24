import { Component } from '@angular/core';
import { SpotlightService } from './spotlight.service';
import { SpotlightModel } from './spotlight';

@Component({
    selector: 'spotlight',
    templateUrl: './spotlight.component.html'
})

export class Spotlight {
    model: SpotlightModel;
    constructor(public svc: SpotlightService) {
        this.model = {
            name: 'spotlight',
            analysis: [{name: 'analysis'}, {name: 'analysis1'}],
            header: { name: 'spotlightHeader' },
            valueFilter: { name: 'ValueFilter' },
        };
    }
}