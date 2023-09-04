import { Input, Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-basic-list',
    template: `<div class="black-border">
            <p>This is a basic list</p>
            <p>Rely on ngChange only</p>
            <p *ngFor="let item of _innerData">{{item.name}}</p>
        </div>`,
})

export class BasicListComponent implements OnChanges {
    protected _innerData = [{name: '1'}, {name: '2'}];
    @Input() data: any = [{name: '1'}, {name: '2'}];
    
    constructor() {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.data && !changes.data.isFirstChange()) {
            this._innerData = this.data;
        }
    }
}