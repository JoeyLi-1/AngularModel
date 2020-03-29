export interface SpotlightsModel {
    name: string;
    analysis: Analysis[];
    pagination: PaginationProps;
    value: ValueModel
}

export interface ValueModel {
    name: string;
    add: string;
}

export interface Analysis {
    name: string;
}

export interface PaginationProps {
    count: string[];
    currentIndex: number;
}