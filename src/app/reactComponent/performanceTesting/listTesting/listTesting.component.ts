import { Component, OnChanges, SimpleChanges, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IListTestingProps, IListTestingStates, IListTestingOutput } from './listTesting.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';

@Component({
    selector: 'app-listTesting',
    templateUrl: './listTesting.component.html',
    styleUrls: ['./listTesting.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListTestingComponent extends ReactComponentBase<IListTestingProps, IListTestingStates, IListTestingOutput> implements OnInit, OnChanges {
    constructor() {
        super();
    }

    ngOnInit() {
        this.setStates({
            listData: [{name: '1'}],
            lastIndex: 1
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }

    AddItem() {
        const step = 10;
        const lastIndex = this.states.lastIndex + step;
        const listData = this.states.listData;
        for(let i = 0; i < step; i++) {
            listData.push({name: `${this.states.lastIndex + i}`});
        }
        this.setStates({ listData, lastIndex });
    }
}
