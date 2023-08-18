import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ITestModProps, ITestModStates, ITestModOutput } from './testMod.component.d';
import { ITestHeaderOutput } from './testHeader/testHeader.component.d';
import { ReactComponentBase } from '../reactComponentBase.component';
import { TestModService } from './testMod.component.service';

@Component({
    selector: 'app-testMod',
    templateUrl: './testMod.component.html',
    styleUrls: ['./testMod.component.less'],
    providers: [TestModService]
})

export class TestModComponent extends ReactComponentBase<ITestModProps, ITestModStates, ITestModOutput> implements OnInit, OnChanges {
    constructor(private svc: TestModService) {
        super();
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    onChange(event: ITestHeaderOutput) {
       this.states.button.handler();
    }

    typeChanged() {
        this.setStates(this.svc.typeChangedHandler(this.props, this.states));
    }
}
