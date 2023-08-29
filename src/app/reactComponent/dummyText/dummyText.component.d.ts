export interface IDummyTextProps {

}

export interface IDummyTextStates {

}

export interface IDummyTextOutput {

}

export interface IDummyTextService {
    initDelegate(props: IDummyTextProps, states: IDummyTextStates): Object;
    changeDelegate(oldProps: IDummyTextProps, newProps: IDummyTextProps, states: IDummyTextStates): Object;
    destroyDelegate(props: IDummyTextProps, states: IDummyTextStates): void;
    outputFormatter(props: IDummyTextProps, states: IDummyTextStates): IDummyTextOutput;
}