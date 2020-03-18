import { Component } from '@angular/core';
import { SpotlightService } from './spotlight.service';

@Component({
    selector: 'spotlight',
    templateUrl: `<div>Spotlight</div><spotlight-header />`,
    styleUrls: ['./visualizationHeader.component.less']
})

export class Spotlight {
    constructor(private svc: SpotlightService) {
        
    }
}