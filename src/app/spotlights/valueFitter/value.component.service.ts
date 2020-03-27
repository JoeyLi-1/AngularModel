
import { ValueModel } from '../spotlights';

export class ValueService {
    constructor() {

    }
    changeValue(value: ValueModel) {
        value.name = value.name + value.add + "-- ";
    }
}