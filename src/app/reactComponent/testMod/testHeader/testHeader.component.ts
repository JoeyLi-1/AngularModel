import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ITestHeaderProps, ITestHeaderStates, ITestHeaderOutput } from './testHeader.component.d';
import { ReactComponentBase } from '../../../ReactComponentBase';
import { TestHeaderService } from './testHeader.component.service';

@Component({
    selector: 'app-testHeader',
    templateUrl: './testHeader.component.html',
    styleUrls: ['./testHeader.component.less'],
    providers: [TestHeaderService]
})

export class TestHeaderComponent extends ReactComponentBase<ITestHeaderProps, ITestHeaderStates, ITestHeaderOutput> implements OnInit, OnChanges {
    constructor(private svc: TestHeaderService) {
        super();
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    handle() {
        this.changed.emit(this.svc.outputFormatter(this.props, this.states));
    }
}
