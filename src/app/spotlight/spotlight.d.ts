export interface Spotlight {
    name: string;
    analysis: Analysis[];
}

export interface SpotlightHeaderProps {
    name: string;
}

export interface SpotlightHeaderStates extends SpotlightHeaderProps {
    name2: string;
}

export interface Analysis {
    name: string;
}