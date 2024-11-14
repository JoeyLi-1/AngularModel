import { Component, OnChanges, SimpleChanges, OnInit, inject } from '@angular/core';
import { ITestHeaderProps, ITestHeaderStates, ITestHeaderOutput } from './testHeader.component.d';
import { ReactComponentBase } from '../../reactComponentBase.component';
import { TestHeaderService } from './testHeader.component.service';

@Component({
    selector: 'app-testHeader',
    templateUrl: './testHeader.component.html',
    styleUrls: ['./testHeader.component.less'],
    providers: [TestHeaderService]
})

export class TestHeaderComponent extends ReactComponentBase<ITestHeaderProps, ITestHeaderStates, ITestHeaderOutput> implements OnInit, OnChanges {
    private svc = inject(TestHeaderService);

    constructor() {
        super();
        console.log(`${this.constructor.name} constructor`);
    }

    ngOnInit() {
        console.log(`${this.constructor.name} ngOnInit`);
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(`${this.constructor.name} ngOnChanges / First change: ${changes.props.isFirstChange()}`);
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    handle() {
        this.changed.emit(this.svc.outputFormatter(this.props, this.states));
    }
}
