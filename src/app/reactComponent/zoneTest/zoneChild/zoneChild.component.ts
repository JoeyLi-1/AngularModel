import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { IZoneChildProps, IZoneChildStates, IZoneChildOutput } from './zoneChild.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { ZoneChildService } from './zoneChild.component.service';

@Component({
    selector: 'app-zoneChild',
    templateUrl: './zoneChild.component.html',
    styleUrls: ['./zoneChild.component.less'],
    providers: [ZoneChildService]
})

export class ZoneChildComponent extends ReactComponentBase<IZoneChildProps, IZoneChildStates, IZoneChildOutput> implements OnInit, OnChanges {
    @Input() label: string = ''
    constructor(private svc: ZoneChildService) {
        super();
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.props.currentValue?.name !== changes.props.previousValue?.name) {
            this.setStates({name: changes.props.currentValue?.name});
        }
    }
}
