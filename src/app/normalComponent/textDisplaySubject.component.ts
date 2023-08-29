import { Input, Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-normal-text-display-subject',
    template: `<div class="black-border"><p *ngFor="let item of _data.value">Subject + {{item.name}}</p></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestDisplaySubjectComponent {
    _data = new BehaviorSubject([{name: '1'}]);
    @Input('dataSubject') 
    set dataSubject(val: any) {
        this._data.next(val);
        console.log(this._data.value);
        // this.cdr.detectChanges();
    };

    constructor(private cdr: ChangeDetectorRef) {

    }
}