import { Input, Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-basic-drawer',
    template: `<div class="black-border">
        <button (click)="onToggle()">Toggle Content | {{name}}</button>
        @if (showContentToggle) {

            <ng-content></ng-content>
        
}
        </div>`,
})

export class BasicDrawerComponent {
    showContentToggle: boolean = false;
    @Input() name: string = '';
    
    constructor() {

    }

    onToggle() {
        this.showContentToggle = !this.showContentToggle;
    }
}