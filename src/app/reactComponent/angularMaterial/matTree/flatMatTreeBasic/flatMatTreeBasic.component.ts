import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { IFlatMatTreeBasicProps, IFlatMatTreeBasicStates, IFlatMatTreeBasicOutput } from './flatMatTreeBasic.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { FlatMatTreeBasicService } from './flatMatTreeBasic.component.service';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
      children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
    },
    {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
        },
        {
          name: 'Orange',
          children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
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
    selector: 'app-flatMatTreeBasic',
    templateUrl: './flatMatTreeBasic.component.html',
    styleUrls: ['./flatMatTreeBasic.component.less'],
    providers: [FlatMatTreeBasicService]
})

export class FlatMatTreeBasicComponent extends ReactComponentBase<IFlatMatTreeBasicProps, IFlatMatTreeBasicStates, IFlatMatTreeBasicOutput> implements OnInit, OnChanges {
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
    constructor(private svc: FlatMatTreeBasicService) {
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
}
