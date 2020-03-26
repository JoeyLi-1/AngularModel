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
            analysis: [{name: 'analysis 1'}, {name: 'analysis 2'}],
        }
    }

}