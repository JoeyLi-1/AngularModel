import { Input, Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, inject } from "@angular/core";
import * as _ from 'lodash';

@Component({
    selector: 'app-normal-text-display',
    template: `<div class="black-border">
            <p>This is Array type input component</p>
            <p>Rely on both reference and ngChange</p>
            <p *ngFor="let item of data">{{item.name}}</p>
            <p>Rely on ngChange only</p>
            <p *ngFor="let item of _innerData">{{item.name}}</p>
        </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestDisplayComponent implements OnChanges {
    private cdr = inject(ChangeDetectorRef);

    protected _innerData = [{name: '1'}];
    @Input() data: any = [{name: '1'}];
    
    constructor() {
        setTimeout(() => {
            this.data.push({name: 'ww'});
        }, 3000);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && !changes.data.isFirstChange()) {
            this._innerData = _.cloneDeep(this.data);
            this.data.push({name: 'childChange'});
        }
    }
}