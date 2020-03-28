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
    nextOrPreviousPageChanged(pNumber: number, model: SpotlightModel) {
        switch (pNumber){
            case 1:
                model.analysis = [{name: 'analysis - 1'}, {name: 'analysis - 2'}, {name: 'analysis - 3'}];
                model.pagination.count=['1', '2', '3'];
                break;
            case 2:
                model.analysis = [{name: 'analysis - 4'}, {name: 'analysis - 5'}, {name: 'analysis - 6'}];
                model.pagination.count=['4', '5', '6'];
                break;
        }
    }
        
}