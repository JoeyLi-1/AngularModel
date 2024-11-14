import { Input, Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, inject } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-normal-text-display-subject',
    template: `<div class="black-border">
        <p>This is Subject type input component</p>
        <p *ngFor="let item of _data.value">Subject + {{item.name}}</p>
        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestDisplaySubjectComponent implements OnChanges {
    private cdr = inject(ChangeDetectorRef);

    _data = new BehaviorSubject([{name: '1'}]);
    @Input('dataSubject') 
    set dataSubject(val: any) {
        this._data.next(val);
        console.log('Input Setter here');
        // this.cdr.detectChanges();
    };

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.dataSubject && !changes.dataSubject.isFirstChange()) {
            console.log('OnChanges Works')
        }
    }
}