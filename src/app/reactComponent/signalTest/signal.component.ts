import { Component, OnChanges, SimpleChanges, OnInit, signal, computed } from '@angular/core';

interface Metric {
    id: string;
    name: string;
    value: number;
    display: boolean;
}

@Component({
    template: `<div>
        <p>{{count().name}} -- {{count().value}}</p>
        <p>{{count2()}}</p>
        <p>id: {{count().id}}</p>
        <button (click)="increase()">Increase</button>
        <button (click)="decrease()" [disabled]="canDecrease()">Decrease</button>
        <div *ngFor="let name of namesFiltered()">{{ name }}</div>
        <div
            style="height: 300px; width: 300px; background-color: #2f487e;"
            (mousemove)="onMousemove()">
        </div>
        <test-signal-sub [metric]="count()"></test-signal-sub>
    </div>`,
    selector: 'test-signal',
})

export class SignalComponent {
    names = ['Maria', 'Michel', 'Jack', 'John', 'Sam', 'Mila'];
    namesSignals = signal(['Maria', 'Michel', 'Jack', 'John', 'Sam', 'Mila']);
    readonly count = signal<Metric>({
        id: '1',
        name: 'a',
        value: 1,
        display: true
    });

    count2 = computed(() => {
        return this.count().value * 2;
    });

    disableDecrease = computed(() => {
        this.counter1++;
        console.log("disableDecrease() called! " + this.counter1 + " times!");
        return this.count().value <= 0;
    });

    counter = 0;
    counter1 = 0;

    namesFiltered = computed(() => {
        this.counter++
        console.log("namesFiltered() called! " + this.counter + " times!");
        return this.namesSignals().filter(name => name.startsWith('M'));
    })

    constructor() {

    }

    filterNames(): string[] {
        this.counter++
        console.log("filterNames() called! " + this.counter + " times!");
        return this.names.filter(name => name.startsWith('M'));
    }

    onMousemove() {
        console.log('Mouse moved');
    }

    increase() {
        this.count.update(val => { return {...val, value: val.value + 1 }; });
        // this.count().value += 1;
    }

    decrease() {
        this.count.update(val => { return {...val, value: val.value - 1 }; });
        // this.count().value -= 1;
    }

    canDecrease() {
        this.counter1++;
        console.log("canDecrease() called! " + this.counter1 + " times!");
        return this.count().value <= 0;
    }
}