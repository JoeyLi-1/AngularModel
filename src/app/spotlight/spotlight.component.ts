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
        analysis: [{name: 'analysis - pre page'},
        {name: 'analysis - 1'}, {name: 'analysis - 2'}
        ,{name: 'analysis - 3'}, {name: 'analysis - 4'}
        ,{name: 'analysis - 5'}, {name: 'analysis - 6'}
        ,{name: 'analysis - 7'}, {name: 'analysis - next page'}],
            header: { name: 'spotlightHeader' },
            valueFilter: { name: 'ValueFilter' },
            pagination: { count: ['<<','1', '2','3','4','5','6','7','>>'], currentIndex: 0 }
        };
    }

    selectPageChanged(index: number) {  
        this.svc.selectedPageChanged(index, this.model);
    }
}