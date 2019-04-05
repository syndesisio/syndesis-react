import * as H from 'history';
import * as React from 'react';
import './ConnectionCard.css';
export interface IConnectionProps {
    name: string;
    description: string;
    icon: string;
    href: H.LocationDescriptor;
}
export declare class ConnectionCard extends React.PureComponent<IConnectionProps> {
    render(): JSX.Element;
}
