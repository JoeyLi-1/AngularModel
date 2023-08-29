export interface IFlatMatTreeBasicProps {

}

export interface IFlatMatTreeBasicStates {

}

export interface IFlatMatTreeBasicOutput {

}

export interface IFlatMatTreeBasicService {
    initDelegate(props: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): Object;
    changeDelegate(oldProps: IFlatMatTreeBasicProps, newProps: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): Object;
    destroyDelegate(props: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): void;
    outputFormatter(props: IFlatMatTreeBasicProps, states: IFlatMatTreeBasicStates): IFlatMatTreeBasicOutput;
}