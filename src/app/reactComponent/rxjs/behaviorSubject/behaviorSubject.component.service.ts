import { Injectable } from '@angular/core';
import { IBehaviorSubjectProps, IBehaviorSubjectStates, IBehaviorSubjectOutput, IBehaviorSubjectService } from './behaviorSubject.component.d';

@Injectable()
export class BehaviorSubjectService implements IBehaviorSubjectService {
    initDelegate(props: IBehaviorSubjectProps, states: IBehaviorSubjectStates): Object {
        return {};
    }

    changeDelegate(oldProps: IBehaviorSubjectProps, newProps: IBehaviorSubjectProps, states: IBehaviorSubjectStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IBehaviorSubjectProps, states: IBehaviorSubjectStates): void {
        return;
    }

    outputFormatter(props: IBehaviorSubjectProps, states: IBehaviorSubjectStates): IBehaviorSubjectOutput {
        return {} as IBehaviorSubjectOutput;
    }
}