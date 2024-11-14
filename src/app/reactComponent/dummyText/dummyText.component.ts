import { Component, OnChanges, SimpleChanges, OnInit, OnDestroy, inject } from '@angular/core';
import { IDummyTextProps, IDummyTextStates, IDummyTextOutput } from './dummyText.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { DummyTextService } from './dummyText.component.service';

@Component({
    selector: 'app-dummyText',
    templateUrl: './dummyText.component.html',
    styleUrls: ['./dummyText.component.less'],
    providers: [DummyTextService]
})

export class DummyTextComponent extends ReactComponentBase<IDummyTextProps, IDummyTextStates, IDummyTextOutput> implements OnInit, OnChanges, OnDestroy {
    private svc = inject(DummyTextService);
    constructor() {
        super();
    }

    ngOnInit() {
        console.log('Dummy Text Component Init');
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    ngOnDestroy(): void {
        console.log('Dummy Text Component Destoried');
    }
}
