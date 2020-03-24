export interface SpotlightModel {
    name: string;
    analysis: Analysis[];
    header: SpotlightHeaderProps;
    valueFilter: ValueFilterProps;
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