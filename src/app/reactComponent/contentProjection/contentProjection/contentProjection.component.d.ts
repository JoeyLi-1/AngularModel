export interface IContentProjectionProps {

}

export interface IContentProjectionStates {

}

export interface IContentProjectionOutput {

}

export interface IContentProjectionService {
    initDelegate(props: IContentProjectionProps, states: IContentProjectionStates): Object;
    changeDelegate(oldProps: IContentProjectionProps, newProps: IContentProjectionProps, states: IContentProjectionStates): Object;
    destroyDelegate(props: IContentProjectionProps, states: IContentProjectionStates): void;
    outputFormatter(props: IContentProjectionProps, states: IContentProjectionStates): IContentProjectionOutput;
}