import * as H from 'history';
import * as React from 'react';
export interface ITabBarItemProps {
    label: string;
    to: H.LocationDescriptor;
    [key: string]: any;
}
export declare const TabBarItem: React.FunctionComponent<ITabBarItemProps>;
