import { Component, OnChanges, SimpleChanges, OnInit, signal } from '@angular/core';

interface Metric {
    id: string;
    name: string;
    value: number;
    display: boolean;
}

@Component({
    template: `<div>
        <p>{{count().name}} -- {{count().value}}</p>
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()">Decrease</button>
    </div>`,
    selector: 'test-signal',
})

export class SignalComponent {
    count = signal<Metric>({
        id: '1',
        name: 'a',
        value: 1,
        display: true
    });
    constructor() {

    }

    increase() {
        this.count.update(val => { return {...val, value: val.value + 1 }; });
    }

    decrease() {
        this.count.update(val => { return {...val, value: val.value - 1 }; });
    }
}