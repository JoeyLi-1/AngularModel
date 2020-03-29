
import { Component, Input } from '@angular/core';

@Component({
    selector: "spotlights-header",
    templateUrl: "./spotlightsHeader.component.html",
    styleUrls:["./spotlightsHeader.component.less"]
})

export class SpotlightsHeader {
    @Input() title: string;
}