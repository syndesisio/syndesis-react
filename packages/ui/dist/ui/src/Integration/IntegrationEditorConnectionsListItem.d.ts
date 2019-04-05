import * as React from 'react';
export interface IIntegrationEditorConnectionsListItemProps {
    integrationName: string;
    integrationDescription: string;
    icon: any;
    actions: any;
}
export declare class IntegrationEditorConnectionsListItem extends React.Component<IIntegrationEditorConnectionsListItemProps> {
    render(): JSX.Element;
}
