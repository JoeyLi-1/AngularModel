
import { Injectable } from '@angular/core';
import { SpotlightsModel} from './spotlights';

@Injectable({providedIn: 'root'})

export class SpotlightsService {
    constructor() {

    }
    selectedPageChanged(index: number, model: SpotlightsModel) {
        console.log(`Current select analysis is: ${model.analysis[index].name}`);
    }
}