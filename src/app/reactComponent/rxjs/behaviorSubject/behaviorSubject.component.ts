import { Component, OnChanges, SimpleChanges, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IBehaviorSubjectProps, IBehaviorSubjectStates, IBehaviorSubjectOutput, ITextContent } from './behaviorSubject.component.d';
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
    providers: [BehaviorSubjectService],
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class BehaviorSubjectComponent extends ReactComponentBase<IBehaviorSubjectProps, IBehaviorSubjectStates, IBehaviorSubjectOutput> implements OnInit, OnChanges {
    testSubject = new BehaviorSubject<ITextContent>({
        name: "zero",
        id: 0,
        title: "start"
    });
    testArraySubject = new BehaviorSubject<ITextContent[]>([{
        name: "zero",
        id: 0,
        title: "start"
    }]);
    normalArray = [{
        name: "zero",
        id: 0,
        title: "start"
    }];
    normalObject = {
        name: "zero",
        id: 0,
        title: "start"
    };
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

    private changeNormalArray(index: number) {
        const newnormalArray = [].concat(this.normalArray);
        newnormalArray.push(QueuedTestEata[index]);
        this.normalArray = newnormalArray;

        // this.normalArray.push(QueuedTestEata[index]);
        

        // this.normalArray[0] = (QueuedTestEata[index]);

        // this.normalArray[0].name = QueuedTestEata[index].name;
    }

    private changeNormalObject(index: number) {
        // const newNormalObject = {...QueuedTestEata[index]};
        // this.normalObject = newNormalObject;
        
        // this.normalObject.id = QueuedTestEata[index].id;
        this.normalObject.name = QueuedTestEata[index].name;
        // this.normalObject.title = QueuedTestEata[index].title;
    }

    private changeBehaviorSubject(index: number) {
        this.testSubject.next(QueuedTestEata[index]);
        // this.testSubject.value.name = QueuedTestEata[index].name;
    }

    private doChangeData(index: number) {
        this.changeNormalArray(index);
        this.changeNormalObject(index);
        this.changeBehaviorSubject(index);
        this.changeArrayBehaviorSubject(index);
    }

    private changeArrayBehaviorSubject(index: number) {
        // this.testArraySubject.value.push(QueuedTestEata[index]);
        // this.testArraySubject.next(this.testArraySubject.value);
        // this.testArraySubject.next([QueuedTestEata[index]]);
        // const isObj = _.isObject(this.normalArray);
        // const isArr = _.isArray(this.normalArray);
        // console.log(`${isObj} -- ${isArr}`);
        // this.testArraySubject.next(this.normalArray);
    }

    changeSubject() {
        if (this.testIndex < QueuedTestEata.length) {
            this.doChangeData(this.testIndex);
        } else {
            this.testIndex = 0;
            this.doChangeData(this.testIndex);
        }
        this.testIndex++;
        // this.cdr.detectChanges();
        // this.cdr.markForCheck();
    }
}
