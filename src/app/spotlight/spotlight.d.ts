export interface SpotlightModel {
    name: string;
    analysis: Analysis[];
    header: SpotlightHeaderProps;
    valueFilter: ValueFilterProps;
    pagination: PaginationProps;
}

export interface SpotlightHeaderProps {
    name: string;
}

export interface Analysis {
    name: string;
}

export interface ValueFilterProps {
    name: string;
}

export interface PaginationProps {
    count: string[];
    currentIndex: number;
}