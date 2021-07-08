import { Injectable } from '@angular/core';
import { ITestModProps, ITestModStates, ITestModOutput, ITestModService } from './testMod.component.d';
import { ButtonHandler } from '../buttonHandler';

@Injectable()
export class TestModService implements ITestModService {
    initDelegate(props: ITestModProps, states: ITestModStates): Object {
        const type = 'apply';
        if (1) {
            // case 1 set type and handler
        } else if (1) {
            // case 2 set type and handler
        } else {
            // case 3 set type and handler
        }
        states.button = new ButtonHandler(type, this.applyHandler);
        states.headerProp = { buttonType: states.button.type };
        return states;
    }

    changeDelegate(oldProps: ITestModProps, newProps: ITestModProps, states: ITestModStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    applyHandler: () => {

    };

    destroyDelegate(props: ITestModProps, states: ITestModStates): void {
        return;
    }

    outputFormatter(props: ITestModProps, states: ITestModStates): ITestModOutput {
        return {} as ITestModOutput;
    }
}