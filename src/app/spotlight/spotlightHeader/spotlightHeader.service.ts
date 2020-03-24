import { Injectable } from '@angular/core';
import { SpotlightHeaderProps } from '../spotlight';

@Injectable()

export class SpotlightHeaderService {
    constructor() {
        
    }

    changeHeaderName(model: SpotlightHeaderProps) {
        model.name = "SpotlightHeaderService.changeHeaderName" + model.name;
    }
}