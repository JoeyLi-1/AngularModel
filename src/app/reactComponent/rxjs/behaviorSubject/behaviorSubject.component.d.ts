export interface IBehaviorSubjectProps {

}

export interface ITextContent {
    name: string;
    id: number;
    title: string;
}

export interface IBehaviorSubjectStates {
    content: ITextContent[];
}

export interface IBehaviorSubjectOutput {

}

export interface IBehaviorSubjectService {
    initDelegate(props: IBehaviorSubjectProps, states: IBehaviorSubjectStates): Object;
    changeDelegate(oldProps: IBehaviorSubjectProps, newProps: IBehaviorSubjectProps, states: IBehaviorSubjectStates): Object;
    destroyDelegate(props: IBehaviorSubjectProps, states: IBehaviorSubjectStates): void;
    outputFormatter(props: IBehaviorSubjectProps, states: IBehaviorSubjectStates): IBehaviorSubjectOutput;
}