import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
    template: `<div>
        <p>Sub signal component below:</p>
        <p>{{name}} preferred {{color}}</p>
        <p>{{members[0].name}} has value {{members[0].value}}</p>
    </div>`,
    selector: 'test-signal-sub',
})

export class SignalSubComponent implements OnChanges {
    @Input() members: any;
    color = '';
    name = '';
    readonly preferedColor = [{name: 'Maria', color: 'red'}, {name: 'Michel', color: 'blue'}, {name: 'Jack', color: 'yellow'}, {name: 'John', color: 'green'}, 
    {name: 'Sam', color: 'black'}, {name: 'Mila', color: 'white'}];
    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.members?.previousValue !== changes.members?.currentValue) {
            const index = changes.members?.currentValue[0].value % changes.members?.currentValue.length ?? 0;
            this.color = this.preferedColor[index].color;
            this.name = this.preferedColor[index].name;
        }
    }
}