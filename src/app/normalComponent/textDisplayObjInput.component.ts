import { Input, Component, ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, inject } from "@angular/core";
import * as _ from 'lodash';

@Component({
    selector: 'app-normal-text-display-obj-input',
    template: `<div class="black-border">
            <p>This is Object type input component</p>
            <p>Rely on both reference and ngChange</p>
            <p>{{data.name}}</p>
            <p>Rely on ngChange only</p>
            <p>{{_innerData.name}}</p>
        </div>`,
    // changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestDisplayObjInputComponent implements OnChanges {
    private cdr = inject(ChangeDetectorRef);

    protected _innerData = {name: '1'};
    @Input() data: any = {name: '1'};

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && !changes.data.isFirstChange()) {
            this._innerData = _.cloneDeep(this.data);
        }
    }
}