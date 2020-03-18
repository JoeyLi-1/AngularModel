import { Component, Input } from '@angular/core';
import { SpotlightHeaderService } from './spotlightHeader.service';

@Component({
    selector: 'spotlight-header',
    templateUrl: `<div>Spotlight Header - {{svc.model.states.name}} - {{svc.model.states.name2}}</div>`,
    styleUrls: ['./visualizationHeader.component.less']
})

export class SpotlightHeader {

    @Input() 
    set data(val: any) {
        this.svc.model.setProps(val);
    }

    constructor(private svc: SpotlightHeaderService) {
        
    }
}