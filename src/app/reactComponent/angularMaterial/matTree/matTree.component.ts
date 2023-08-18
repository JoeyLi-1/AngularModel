import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { IMatTreeProps, IMatTreeStates, IMatTreeOutput } from './matTree.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { MatTreeService } from './matTree.component.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];

const TREE_DATA_1: FoodNode[] = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }, { name: 'Orange' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
            {
                name: 'Red',
                children: [{ name: 'Tomato' }],
            },
        ],
    },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
    expandable: boolean;
    name: string;
    level: number;
}

@Component({
    selector: 'app-matTree',
    templateUrl: './matTree.component.html',
    styleUrls: ['./matTree.component.less'],
    providers: [MatTreeService]
})

export class MatTreeComponent extends ReactComponentBase<IMatTreeProps, IMatTreeStates, IMatTreeOutput> implements OnInit, OnChanges {
    private _transformer = (node: FoodNode, level: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: level,
        };
    };

    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level,
        node => node.expandable,
    );

    treeFlattener = new MatTreeFlattener(
        this._transformer,
        node => node.level,
        node => node.expandable,
        node => node.children,
    );

    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
    constructor(private svc: MatTreeService) {
        super();
        this.dataSource.data = TREE_DATA;
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

    switchSource() {
        if (this.dataSource.data === TREE_DATA) {
            this.dataSource.data = TREE_DATA_1;
        } else {
            this.dataSource.data = TREE_DATA;
        }
    }

    toggleExpand() {
        
    }
}
