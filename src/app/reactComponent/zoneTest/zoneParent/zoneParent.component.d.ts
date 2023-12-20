import { IZoneChildProps } from '@app/reactComponent/zoneTest/zoneChild/zoneChild.component.d';
export interface IZoneParentProps {

}

export interface IZoneParentStates {
    child: IZoneChildProps;
    name: string;
}

export interface IZoneParentOutput {

}

export interface IZoneParentService {
    initDelegate(props: IZoneParentProps, states: IZoneParentStates): Object;
    changeDelegate(oldProps: IZoneParentProps, newProps: IZoneParentProps, states: IZoneParentStates): Object;
    destroyDelegate(props: IZoneParentProps, states: IZoneParentStates): void;
    outputFormatter(props: IZoneParentProps, states: IZoneParentStates): IZoneParentOutput;
}