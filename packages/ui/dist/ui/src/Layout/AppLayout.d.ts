import * as React from 'react';
import { PfVerticalNavItem } from '../Layout';
export interface ILayoutBase {
    appTitle: string;
    pictograph: string;
    typogram: string;
    appNav: any;
    verticalNav: PfVerticalNavItem[];
    logoHref: string;
    showNavigation: boolean;
    onNavigationCollapse(): void;
    onNavigationExpand(): void;
}
export declare class AppLayout extends React.Component<ILayoutBase> {
    render(): JSX.Element;
}
