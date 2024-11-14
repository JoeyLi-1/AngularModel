import { Component, signal, computed, Signal, OnInit, WritableSignal } from '@angular/core';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';

interface Member {
    id: number;
    name: string;
    value: number;
}

interface IReactSignalProps {

}

interface IReactSignalStates {
    counter: number;
    counter1: number;
    targets: Member[];
    targetsSignal?: WritableSignal<Member[]>;
}

interface IReactSignalOutput {

}

@Component({
    template: `<div>
        <p>{{states.targetsSignal()[0].name}} has {{states.targetsSignal()[0].value}}</p>
        <button (click)="increase()">Increase</button>
        
        <button (click)="decrease()" [disabled]="canDecrease()">Decrease</button>
        <p>Name starts with M</p>
        @for (member of computedNames(); track member) {
<div>{{member.id}} - {{member.name}}</div>
}
        
        <div style="height: 300px; width: 300px; background-color: #2f487e;" (mousemove)="onMousemove()"></div>
        <test-signal-sub [members]="states.targetsSignal()"></test-signal-sub>
    </div>`,
    selector: 'test-react-signal',
})

export class ReactSignalComponent extends ReactComponentBase<IReactSignalProps, IReactSignalStates, IReactSignalOutput> implements OnInit {    
    computedNames = computed(() => {
        this.setStates({counter: this.states.counter+1});
        console.log("namesFiltered() called! " + this.states.counter + " times!");
        return this.states.targetsSignal().filter(item => item.name.startsWith('M'));
    })

    constructor() {
        super({
            counter: 0,
            counter1: 0,
            targets: [
                {name: 'Maria', id: 1, value: 1}, 
                {name: 'Michel', id: 2, value: 1}, 
                {name: 'Jack', id: 3, value: 1}, 
                {name: 'John', id: 4, value: 1}, 
                {name: 'Sam', id: 5, value: 1}, 
                {name: 'Mila', id: 6, value: 1}
            ],
            targetsSignal: signal<Member[]>([])
        })
    }

    ngOnInit(): void {
        const tempSignal = signal<Member[]>(this.states.targets)
        this.setStates({ targetsSignal: tempSignal })
    }

    onMousemove() {
        // console.log('Mouse moved');
    }

    increase() {
        const newTargets = [].concat(this.states.targetsSignal());
        newTargets[0].value += 1;
        this.states.targetsSignal.set(newTargets);
    }

    decrease() {
        this.states.targetsSignal.update(val => { 
            val[0].value -= 1;
            return val;
        });
    }

    canDecrease() {
        this.setStates({counter1: this.states.counter1+1});
        console.log("canDecrease() called! " + this.states.counter1 + " times!");
        return this.states.targetsSignal()[0].value <= 0;
    }
}