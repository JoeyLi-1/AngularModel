import { Injectable } from '@angular/core';
import { Spotlight, SpotlightHeaderProps, SpotlightHeaderStates } from '../spotlight';
import { Model } from '../spotlight.model';

@Injectable({providedIn: 'root'})

export class SpotlightHeaderService {
    model: Model<SpotlightHeaderProps, SpotlightHeaderStates>;

    constructor(props: SpotlightHeaderProps, states: SpotlightHeaderStates) {
        this.model = new Model(props, states);
    }
}