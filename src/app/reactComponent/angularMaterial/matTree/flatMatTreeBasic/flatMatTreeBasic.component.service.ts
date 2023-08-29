import { Injectable } from '@angular/core';
import { IFlatMatTreeBasicProps, IFlatMatTreeBasicStates, IFlatMatTreeBasicOutput, IFlatMatTreeBasicService } from './flatMatTreeBasic.component.d';

@Injectable()
export class FlatMatTreeBasicService implements IFlatMatTreeBasicService {
    initDelegate(props: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): Object {
        return {};
    }

    changeDelegate(oldProps: IFlatMatTreeBasicProps, newProps: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): void {
        return;
    }

    outputFormatter(props: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): IFlatMatTreeBasicOutput {
        return {} as IFlatMatTreeBasicOutput;
    }
}