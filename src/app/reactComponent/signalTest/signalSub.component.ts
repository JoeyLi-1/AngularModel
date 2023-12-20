import { Component, OnChanges, SimpleChanges, OnInit, signal, computed, Input } from '@angular/core';

interface Metric {
    id: string;
    name: string;
    value: number;
    display: boolean;
}

@Component({
    template: `<div>
        This is sub signal
        <p>{{member}}</p>
    </div>`,
    selector: 'test-signal-sub',
})

export class SignalSubComponent implements OnChanges {
    @Input() metric: any;
    member = 0;
    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.metric?.previousValue !== changes.metric?.currentValue) {
            this.member = changes.metric.currentValue.value;
        }
    }
}