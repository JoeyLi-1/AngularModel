import { Component, OnChanges, SimpleChanges, OnInit, ViewChild, Injectable, inject } from '@angular/core';
import { IMatTreeProps, IMatTreeStates, IMatTreeOutput } from './matTree.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { MatTreeService } from './matTree.component.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTree } from '@angular/material/tree';
import {CollectionViewer, SelectionChange, DataSource} from '@angular/cdk/collections';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

/** Flat node with expandable and level information */
export class DynamicFlatNode {
    constructor(
      public item: string,
      public level = 1,
      public expandable = false,
      public isLoading = false,
    ) {}
  }
  
  /**
   * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
   * the descendants data from the database.
   */
  @Injectable({providedIn: 'root'})
  export class DynamicDatabase {
    dataMap = new Map<string, string[]>([
      ['Fruits', ['Apple', 'Orange', 'Banana']],
      ['Vegetables', ['Tomato', 'Potato', 'Onion']],
      ['Apple', ['Fuji', 'Macintosh']],
      ['Onion', ['Yellow', 'White', 'Purple']],
    ]);
  
    rootLevelNodes: string[] = ['Fruits', 'Vegetables'];
  
    /** Initial data from database */
    initialData(): DynamicFlatNode[] {
      return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
  
    getChildren(node: string): string[] | undefined {
      return this.dataMap.get(node);
    }
  
    isExpandable(node: string): boolean {
      return this.dataMap.has(node);
    }
  }
  /**
   * File database, it can build a tree structured Json object from string.
   * Each node in Json object represents a file or a directory. For a file, it has filename and type.
   * For a directory, it has filename and children (a list of files or directories).
   * The input will be a json object string, and the output is a list of `FileNode` with nested
   * structure.
   */
  export class DynamicDataSource implements DataSource<DynamicFlatNode> {
    dataChange = new BehaviorSubject<DynamicFlatNode[]>([]);
  
    get data(): DynamicFlatNode[] {
      return this.dataChange.value;
    }
    set data(value: DynamicFlatNode[]) {
      this._treeControl.dataNodes = value;
      this.dataChange.next(value);
    }
  
    constructor(
      private _treeControl: FlatTreeControl<DynamicFlatNode>,
      private _database: DynamicDatabase,
    ) {}

    addElement(name: string) {
      this.data.push(new DynamicFlatNode(name, 0, true));
      this.dataChange.next(this.data);
    }

    addSubElement(node: DynamicFlatNode) {
      const index = this.data.indexOf(node);
      this.data.splice(index + 1, 0, new DynamicFlatNode('subTest', node.level+1, false));
      this.dataChange.next(this.data);
    }
  
    connect(collectionViewer: CollectionViewer): Observable<DynamicFlatNode[]> {
      this._treeControl.expansionModel.changed.subscribe(change => {
        if (
          (change as SelectionChange<DynamicFlatNode>).added ||
          (change as SelectionChange<DynamicFlatNode>).removed
        ) {
          this.handleTreeControl(change as SelectionChange<DynamicFlatNode>);
        }
      });
  
      return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
  
    disconnect(collectionViewer: CollectionViewer): void {}
  
    /** Handle expand/collapse behaviors */
    handleTreeControl(change: SelectionChange<DynamicFlatNode>) {
      if (change.added) {
        change.added.forEach(node => this.toggleNode(node, true));
      }
      if (change.removed) {
        change.removed
          .slice()
          .reverse()
          .forEach(node => this.toggleNode(node, false));
      }
    }
  
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node: DynamicFlatNode, expand: boolean) {
      const children = this._database.getChildren(node.item);
      const index = this.data.indexOf(node);
      if (!children || index < 0) {
        // If no children, or cannot find the node, no op
        return;
      }
  
      node.isLoading = true;
  
      setTimeout(() => {
        if (expand) {
          const nodes = children.map(
            name => new DynamicFlatNode(name, node.level + 1, this._database.isExpandable(name)),
          );
          this.data.splice(index + 1, 0, ...nodes);
        } else {
          let count = 0;
          for (
            let i = index + 1;
            i < this.data.length && this.data[i].level > node.level;
            i++, count++
          ) {}
          this.data.splice(index + 1, count);
        }
  
        // notify the change
        this.dataChange.next(this.data);
        node.isLoading = false;
      }, 1000);
    }
  }


const TREE_DATA1 = {
    DataSet1: {
      // @ts-ignore
      DateSet1_val1: null,
      // @ts-ignore
      DateSet1_val2: null,
      // @ts-ignore
      DateSet1_val3: null,
      DataSet1_sub1: {
          // @ts-ignore
          DataSet1_sub1_val1: null,
          DataSet1_sub1_val2: ['Blueberry', 'Raspberry'],
        // @ts-ignore
          DataSet1_sub1_val3: null,
      },
    },
    Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
};

const TREE_DATA2 = {
  DataSet2: {
    // @ts-ignore
    DateSet2_val1: null,
    // @ts-ignore
    DateSet2_val2: null,
    // @ts-ignore
    DateSet2_val3: null,
    DataSet2_sub1: {
        // @ts-ignore
        DataSet2_sub1_val1: null,
        DataSet2_sub1_val2: ['Blueberry', 'Raspberry'],
      // @ts-ignore
        DataSet2_sub1_val3: null,
    },
  },
  Reminders: ['Cook dinner', 'Read the Material Design spec', 'Upgrade Application to Angular'],
};

  

@Component({
    selector: 'app-matTree',
    templateUrl: './matTree.component.html',
    styleUrls: ['./matTree.component.less'],
    providers: [MatTreeService]
})

export class MatTreeComponent extends ReactComponentBase<IMatTreeProps, IMatTreeStates, IMatTreeOutput>  {
    private svc = inject(MatTreeService);

    dataSet1InUse = true;
    exampleData: any = TREE_DATA1;
    constructor() {
        const database = inject(DynamicDatabase);

        super();
        this.treeControl = new FlatTreeControl<DynamicFlatNode>(this.getLevel, this.isExpandable);
        this.dataSource = new DynamicDataSource(this.treeControl, database);
    
        this.dataSource.data = database.initialData();
      }
    
      treeControl: FlatTreeControl<DynamicFlatNode>;
    
      dataSource: DynamicDataSource;
    
      getLevel = (node: DynamicFlatNode) => node.level;
    
      isExpandable = (node: DynamicFlatNode) => node.expandable;
    
      hasChild = (_: number, _nodeData: DynamicFlatNode) => _nodeData.expandable;

      addElement() {
        this.dataSource.addElement('test');
      }

      addSubElement(node: DynamicFlatNode) {
        this.dataSource.addSubElement(node);
      }

      changeExampleData() {
        if (this.dataSet1InUse) {
          this.dataSet1InUse = false;
          this.exampleData = TREE_DATA2
        } else {
          this.dataSet1InUse = true;
          this.exampleData = TREE_DATA1
        }
      }
}
