import { Injectable } from '@angular/core';
import { SpotlightModel, Analysis } from './spotlight';

@Injectable({providedIn: 'root'})

export class SpotlightService {
    constructor() {
        
    }

    changeSpotlightName(model: SpotlightModel) {
        model.name = "SpotlightService.changeSpotlightName";
        model.header.name = "Header changed by Spotlight service";
    }

    changeAnalysisName(analysis: Analysis) {
        analysis.name = "SpotlightService.changeAnalysisName" + analysis.name;
    }

    selectedPageChanged(index: number, model: SpotlightModel) {
        alert(`Current select analysis is: ${model.analysis[index].name}`);
    }
}