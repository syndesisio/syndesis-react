import * as React from 'react';
import './ApiConnectorDetailCard.css';
export interface IApiConnectorDetailCardProps {
    description?: string;
    icon?: string;
    name: string;
}
export declare class ApiConnectorDetailCard extends React.Component<IApiConnectorDetailCardProps> {
    render(): JSX.Element;
}
