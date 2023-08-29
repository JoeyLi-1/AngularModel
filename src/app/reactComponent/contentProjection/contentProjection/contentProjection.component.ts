import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { IContentProjectionProps, IContentProjectionStates, IContentProjectionOutput } from './contentProjection.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { ContentProjectionService } from './contentProjection.component.service';

@Component({
    selector: 'app-contentProjection',
    templateUrl: './contentProjection.component.html',
    styleUrls: ['./contentProjection.component.less'],
    providers: [ContentProjectionService]
})

export class ContentProjectionComponent extends ReactComponentBase<IContentProjectionProps, IContentProjectionStates, IContentProjectionOutput> implements OnInit, OnChanges {
    constructor(private svc: ContentProjectionService) {
        super();
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }
}
