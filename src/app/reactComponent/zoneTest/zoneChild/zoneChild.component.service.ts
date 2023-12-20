import { Injectable } from '@angular/core';
import { IZoneChildProps, IZoneChildStates, IZoneChildOutput, IZoneChildService } from './zoneChild.component.d';

@Injectable()
export class ZoneChildService implements IZoneChildService {
    initDelegate(props: IZoneChildProps, states: IZoneChildStates): Object {
        return {};
    }

    changeDelegate(oldProps: IZoneChildProps, newProps: IZoneChildProps, states: IZoneChildStates): Object {
        if (oldProps.name !== newProps.name) {
            return newProps.name;
        }
        return {};
    }

    destroyDelegate(props: IZoneChildProps, states: IZoneChildStates): void {
        return;
    }

    outputFormatter(props: IZoneChildProps, states: IZoneChildStates): IZoneChildOutput {
        return {} as IZoneChildOutput;
    }
}