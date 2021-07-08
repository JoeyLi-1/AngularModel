import { ButtonType } from "src/app/const";

export interface ITestHeaderProps {
    buttonType: ButtonType;
}

export interface ITestHeaderStates {
    buttonClass: string;
    buttonText: string;
}

export interface ITestHeaderOutput {
    result: string;
}

export interface ITestHeaderService {
    initDelegate(props: ITestHeaderProps, states: ITestHeaderStates): Object;
    changeDelegate(oldProps: ITestHeaderProps, newProps: ITestHeaderProps, states: ITestHeaderStates): Object;
    destroyDelegate(props: ITestHeaderProps, states: ITestHeaderStates): void;
    outputFormatter(props: ITestHeaderProps, states: ITestHeaderStates): ITestHeaderOutput;
}