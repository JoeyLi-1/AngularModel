import { Input, Component, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

@Component({
    selector: 'app-normal-text-display',
    template: `<div class="black-border"><p *ngFor="let item of data">{{item.name}}</p></div>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TestDisplayComponent {
    @Input() data: any = [{name: '1'}];
    
    constructor(private cdr: ChangeDetectorRef) {

    }
}