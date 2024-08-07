import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { IGridProps, IGridStates, IGridOutput } from './grid.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import * as _ from 'lodash';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.less']
})

export class GridComponent extends ReactComponentBase<IGridProps, IGridStates, IGridOutput> implements OnInit, OnChanges {
    constructor() {
        super();
    }

    ngOnInit() {
        this.setStates({ 
            columns: _.map(this.props.columns, (item) => {
                return { name: item };
            }), 
            rows: _.map(this.props.rows, (item) => {
                return {
                    cells: _.map(item, (subitem) => {
                        return {
                            name: subitem
                        }
                })}
            }) });
    }

    ngOnChanges(changes: SimpleChanges): void {
        
    }
}
