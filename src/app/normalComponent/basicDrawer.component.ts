import { Input, Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-basic-drawer',
    template: `<div class="black-border">
        <button (click)="onToggle()">Toggle Content</button>
        <ng-container *ngIf="showContentToggle">
            <ng-content></ng-content>
        </ng-container>
        </div>`,
})

export class BasicDrawerComponent {
    showContentToggle: boolean = false;
    
    constructor() {

    }

    onToggle() {
        this.showContentToggle = !this.showContentToggle;
    }
}