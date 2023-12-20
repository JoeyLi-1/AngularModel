import { Component, OnChanges, SimpleChanges, OnInit, NgZone, ChangeDetectorRef, signal } from '@angular/core';
import { IZoneParentProps, IZoneParentStates, IZoneParentOutput } from './zoneParent.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { ZoneParentService } from './zoneParent.component.service';

@Component({
    selector: 'app-zoneParent',
    templateUrl: './zoneParent.component.html',
    styleUrls: ['./zoneParent.component.less'],
    providers: [ZoneParentService]
})

export class ZoneParentComponent extends ReactComponentBase<IZoneParentProps, IZoneParentStates, IZoneParentOutput> implements OnInit, OnChanges {
    timer: any;
    counter = signal(0);
    label = signal('');
    id1 = 0;
    id2 = 0;
    constructor(private svc: ZoneParentService, private zone: NgZone, private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    changeText() {
        console.log(this.states.name);
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = setInterval(() => {
            const newDate = new Date();
            this.setStates({ child: { name: newDate.toISOString()}, name: newDate.toISOString() });
            this.counter.update(val => val + 1);
            this.label.set(newDate.toISOString());
        }, 500);
        this.id1++;
        this.id2++;
        // this.zone.runOutsideAngular(() => {
        //     this.timer = setInterval(() => {
        //         const newDate = new Date();
        //         this.setStates({ child: { name: newDate.toISOString()}, name: newDate.toISOString() });
        //         this.counter.update(val => val + 1);
        //         this.label.set(newDate.toISOString());
        //         // this.cdr.detectChanges();
        //     }, 500);
        // });
    }
}
