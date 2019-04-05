import * as React from 'react';
export interface IApiConnectorDetailProps {
    description?: string;
    icon?: string;
    name: string;
}
export declare class ApiConnectorDetail extends React.Component<IApiConnectorDetailProps> {
    render(): JSX.Element;
}
