import { Injectable } from '@angular/core';
import { SpotlightHeaderProps } from '../spotlight';

@Injectable()  //当前模块作用于

export class SpotlightHeaderService {
    constructor() {
        
    }

    changeHeaderName(model: SpotlightHeaderProps) {
        model.name = "SpotlightHeaderService.changeHeaderName" + model.name;
    }
}