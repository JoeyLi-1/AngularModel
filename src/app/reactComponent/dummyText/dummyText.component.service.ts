import { Injectable } from '@angular/core';
import { IDummyTextProps, IDummyTextStates, IDummyTextOutput, IDummyTextService } from './dummyText.component.d';

@Injectable()
export class DummyTextService implements IDummyTextService {
    initDelegate(props: IDummyTextProps, states: IDummyTextStates): Object {
        return {};
    }

    changeDelegate(oldProps: IDummyTextProps, newProps: IDummyTextProps, states: IDummyTextStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IDummyTextProps, states: IDummyTextStates): void {
        return;
    }

    outputFormatter(props: IDummyTextProps, states: IDummyTextStates): IDummyTextOutput {
        return {} as IDummyTextOutput;
    }
}