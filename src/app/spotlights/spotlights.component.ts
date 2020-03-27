import { Component } from '@angular/core';
import { SpotlightsService } from './spotlights.service';
import { SpotlightsModel} from './spotlights';

@Component({
    selector: 'spotlight',
    templateUrl: './spotlights.component.html',
    styleUrls: ['./spotlights.component.less'],
})

export class SpotlightsComponent {
    title = 'Spotlights'
    model: SpotlightsModel;
    constructor(public service: SpotlightsService) {
        this.model = {
            name: 'Spotlights Component',
            value: { name: 'value Flutter', add: "test Value"},
            analysis: [
                {name: 'analysis 1'}, 
                {name: 'analysis 2'}, 
                {name: 'analysis 3'},
                {name: 'analysis 4'},
                {name: 'analysis 5'},
                {name: 'analysis 6'},
                {name: 'analysis 7'}],
            pagination: {
                count: ["1","2","3","4","5","6","7"], 
                currentIndex: 0
            },
        }
    }

    selectPageChanged(index: number) {
        this.service.selectedPageChanged(index, this.model);
    }

}