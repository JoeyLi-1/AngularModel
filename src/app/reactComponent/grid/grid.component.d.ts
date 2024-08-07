export interface IGridColumn {
    name: string;
}

export interface IGridRow {
    cells: IGridCell[];
}

export interface IGridCell {
    name: string;
}

export interface IGridProps {
    columns: string[];
    rows: string[][];
}

export interface IGridStates {
    columns: IGridColumn[];
    rows: IGridRow[];
}

export interface IGridOutput {

}
