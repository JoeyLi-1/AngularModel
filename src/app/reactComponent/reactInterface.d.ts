export interface ReactPanelProps {
    headerProps: ReactHeaderProps;
    contentProps: ReactContentProps;
    members: string[];
}

export interface ReactHeaderProps {
    text: string;
    show: boolean;
    counter: number;
    click: (text: string) => void;
}

export interface ReactContentProps {
    text: string;
    click: (member: string) => void;
}
