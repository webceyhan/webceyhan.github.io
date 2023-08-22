export type Variant = 'primary' | 'secondary' | 'neutral' | 'accent' | 'ghost';

export interface Panel {
    open: Ref<boolean>;
}

export interface AccordionInjection {
    panels: Ref<Panel[]>;
    collapseAll: () => void;
}

export interface Item {
    rate: number;
    color: string;
}
