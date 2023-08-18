export interface IMatTreeProps {

}

export interface IMatTreeStates {

}

export interface IMatTreeOutput {

}

export interface IMatTreeService {
    initDelegate(props: IMatTreeProps, states: IMatTreeStates): Object;
    changeDelegate(oldProps: IMatTreeProps, newProps: IMatTreeProps, states: IMatTreeStates): Object;
    destroyDelegate(props: IMatTreeProps, states: IMatTreeStates): void;
    outputFormatter(props: IMatTreeProps, states: IMatTreeStates): IMatTreeOutput;
}