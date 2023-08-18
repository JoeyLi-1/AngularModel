import { Injectable } from '@angular/core';
import { IMatTreeProps, IMatTreeStates, IMatTreeOutput, IMatTreeService } from './matTree.component.d';

@Injectable()
export class MatTreeService implements IMatTreeService {
    initDelegate(props: IMatTreeProps, states: IMatTreeStates): Object {
        return {};
    }

    changeDelegate(oldProps: IMatTreeProps, newProps: IMatTreeProps, states: IMatTreeStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IMatTreeProps, states: IMatTreeStates): void {
        return;
    }

    outputFormatter(props: IMatTreeProps, states: IMatTreeStates): IMatTreeOutput {
        return {} as IMatTreeOutput;
    }
}