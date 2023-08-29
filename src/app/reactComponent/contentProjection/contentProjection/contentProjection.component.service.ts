import { Injectable } from '@angular/core';
import { IContentProjectionProps, IContentProjectionStates, IContentProjectionOutput, IContentProjectionService } from './contentProjection.component.d';

@Injectable()
export class ContentProjectionService implements IContentProjectionService {
    initDelegate(props: IContentProjectionProps, states: IContentProjectionStates): Object {
        return {};
    }

    changeDelegate(oldProps: IContentProjectionProps, newProps: IContentProjectionProps, states: IContentProjectionStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IContentProjectionProps, states: IContentProjectionStates): void {
        return;
    }

    outputFormatter(props: IContentProjectionProps, states: IContentProjectionStates): IContentProjectionOutput {
        return {} as IContentProjectionOutput;
    }
}