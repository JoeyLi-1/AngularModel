// @ts-ignore
import { ButtonHandler } from '../buttonHandler';
import { ITestHeaderProps } from './testHeader/testHeader.component.d';

export interface ITestModProps {

}

export interface ITestModStates {
   button: ButtonHandler;
   headerProp: ITestHeaderProps;
}

export interface ITestModOutput {

}

export interface ITestModService {
    initDelegate(props: ITestModProps, states: ITestModStates): Object;
    changeDelegate(oldProps: ITestModProps, newProps: ITestModProps, states: ITestModStates): Object;
    destroyDelegate(props: ITestModProps, states: ITestModStates): void;
    outputFormatter(props: ITestModProps, states: ITestModStates): ITestModOutput;
}