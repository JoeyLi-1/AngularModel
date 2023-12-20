import { Injectable } from '@angular/core';
import { IZoneParentProps, IZoneParentStates, IZoneParentOutput, IZoneParentService } from './zoneParent.component.d';

@Injectable()
export class ZoneParentService implements IZoneParentService {
    initDelegate(props: IZoneParentProps, states: IZoneParentStates): Object {
        return {};
    }

    changeDelegate(oldProps: IZoneParentProps, newProps: IZoneParentProps, states: IZoneParentStates): Object {
        if (!oldProps) {
            return {};
        }
        return {};
    }

    destroyDelegate(props: IZoneParentProps, states: IZoneParentStates): void {
        return;
    }

    outputFormatter(props: IZoneParentProps, states: IZoneParentStates): IZoneParentOutput {
        return {} as IZoneParentOutput;
    }
}