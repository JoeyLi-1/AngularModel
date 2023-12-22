import { Component, signal, computed } from '@angular/core';

interface Member {
    id: number;
    name: string;
    value: number;
}

@Component({
    template: `<div>
        <p>{{targetsSignal()[0].name}} has {{targetsSignal()[0].value}}</p>
        <button (click)="increase()">Increase</button>
        
        <button (click)="decrease()" [disabled]="canDecrease()">Decrease</button>
        <p>Name starts with M</p>
        <div *ngFor="let member of computedNames()">{{member.id}} - {{member.name}}</div>
        
        <div style="height: 300px; width: 300px; background-color: #2f487e;" (mousemove)="onMousemove()"></div>
        <test-signal-sub [members]="targetsSignal()"></test-signal-sub>
    </div>`,
    selector: 'test-signal',
})

export class SignalComponent {
    counter = 0;
    counter1 = 0;

    targets: Member[] = [{name: 'Maria', id: 1, value: 1}, {name: 'Michel', id: 2, value: 1}, {name: 'Jack', id: 3, value: 1}, {name: 'John', id: 4, value: 1}, 
                {name: 'Sam', id: 5, value: 1}, {name: 'Mila', id: 6, value: 1}];
    readonly targetsSignal = signal<Member[]>(this.targets);
    
    computedNames = computed(() => {
        this.counter++
        console.log("namesFiltered() called! " + this.counter + " times!");
        return this.targetsSignal().filter(item => item.name.startsWith('M'));
    })

    constructor() {

    }

    onMousemove() {
        // console.log('Mouse moved');
    }

    increase() {
        const newTargets = [].concat(this.targetsSignal());
        newTargets[0].value += 1;
        this.targetsSignal.set(newTargets);
    }

    decrease() {
        this.targetsSignal.update(val => { 
            val[0].value -= 1;
            return val;
        });
    }

    canDecrease() {
        this.counter1++;
        console.log("canDecrease() called! " + this.counter1 + " times!");
        return this.targetsSignal()[0].value <= 0;
    }
}