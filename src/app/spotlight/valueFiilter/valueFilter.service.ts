import { Injectable } from '@angular/core';
import { ValueFilterProps } from '../spotlight';

@Injectable()

export class ValueFilterService {
    constructor() {
        
    }

    changeFilterName(model: ValueFilterProps) {
        model.name = "ValueFilterService.changeFilterName" + model.name;
    }
}