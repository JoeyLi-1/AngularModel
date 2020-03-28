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
            analysis: [{name: 'analysis - 1'}, {name: 'analysis - 2'}, {name: 'analysis - 3'}],
            header: { name: 'spotlightHeader' },
            valueFilter: { name: 'ValueFilter' },
            pagination: { count: ['1', '2', '3'], currentIndex: 0, whichPage:1},
        };
    }

    selectPageChanged(index: number) {
        this.svc.selectedPageChanged(index, this.model);
    }

    nextOrPreviousPageChanged(pNumber: number) {
        this.svc.nextOrPreviousPageChanged(pNumber, this.model); 
    }
}