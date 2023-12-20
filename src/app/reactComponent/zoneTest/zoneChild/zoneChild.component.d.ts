export interface IZoneChildProps {
    name: string;
}

export interface IZoneChildStates {
    name: string;
}

export interface IZoneChildOutput {

}

export interface IZoneChildService {
    initDelegate(props: IZoneChildProps, states: IZoneChildStates): Object;
    changeDelegate(oldProps: IZoneChildProps, newProps: IZoneChildProps, states: IZoneChildStates): Object;
    destroyDelegate(props: IZoneChildProps, states: IZoneChildStates): void;
    outputFormatter(props: IZoneChildProps, states: IZoneChildStates): IZoneChildOutput;
}