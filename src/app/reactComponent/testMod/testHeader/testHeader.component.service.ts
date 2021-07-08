import { Injectable } from '@angular/core';
import { ITestHeaderProps, ITestHeaderStates, ITestHeaderOutput, ITestHeaderService } from './testHeader.component.d';

@Injectable()
export class TestHeaderService implements ITestHeaderService {
    initDelegate(props: ITestHeaderProps, states: ITestHeaderStates): Object {
        if (props.buttonType === 'apply') {
            states.buttonClass = 'fake-apply-button';
            states.buttonText = 'apply';
        }
        // else ....
        return {};
    }

    changeDelegate(oldProps: ITestHeaderProps, newProps: ITestHeaderProps, states: ITestHeaderStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: ITestHeaderProps, states: ITestHeaderStates): void {
        return;
    }

    outputFormatter(props: ITestHeaderProps, states: ITestHeaderStates): ITestHeaderOutput {
        return {} as ITestHeaderOutput;
    }
}