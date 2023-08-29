import { Component, OnChanges, SimpleChanges, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IBehaviorSubjectProps, IBehaviorSubjectStates, IBehaviorSubjectOutput } from './behaviorSubject.component.d';
import { ReactComponentBase } from '@app/reactComponent/reactComponentBase.component';
import { BehaviorSubjectService } from './behaviorSubject.component.service';
import { BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

const QueuedTestEata = [
    {
        name: "a",
        id: 1,
        title: "first"
    }, {
        name: "b",
        id: 2,
        title: "second"
    }, {
        name: "c",
        id: 3,
        title: "third"
    }
];

@Component({
    selector: 'app-behaviorSubject',
    templateUrl: './behaviorSubject.component.html',
    styleUrls: ['./behaviorSubject.component.less'],
    providers: [BehaviorSubjectService]
})

export class BehaviorSubjectComponent extends ReactComponentBase<IBehaviorSubjectProps, IBehaviorSubjectStates, IBehaviorSubjectOutput> implements OnInit, OnChanges {
    testSubject = new BehaviorSubject<IBehaviorSubjectStates>({content: [{
        name: "zero",
        id: 0,
        title: "start"
    }]});
    normalObject = [{
        name: "zero",
        id: 0,
        title: "start"
    }];
    testIndex = 0;
    constructor(private svc: BehaviorSubjectService, private cdr: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        this.setStates(this.svc.initDelegate(this.props, this.states));
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
    }

    private changeNormalObject(index: number) {
        // this.normalObject[0] = (QueuedTestEata[index]);
        // const newNormalObject = [].concat(this.normalObject);
        // newNormalObject.push(QueuedTestEata[index]);
        // this.normalObject = newNormalObject;
        this.normalObject.push(QueuedTestEata[index]);
        this.normalObject = this.normalObject;
        // this.normalObject = _.cloneDeep(this.normalObject);
        // this.normalObject.id = QueuedTestEata[index].id;
        // this.normalObject.name = QueuedTestEata[index].name;
        // this.normalObject.title = QueuedTestEata[index].title;
    }

    changeSubject() {
        if (this.testIndex < QueuedTestEata.length) {
            // this.testSubject.next(QueuedTestEata[this.testIndex]);
            this.changeNormalObject(this.testIndex);
        } else {
            this.testIndex = 0;
            // this.testSubject.next(QueuedTestEata[this.testIndex]);
            this.changeNormalObject(this.testIndex);
        }
        this.testIndex++;
        // this.cdr.detectChanges();
    }
}
