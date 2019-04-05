import * as React from 'react';
export interface IIntegrationEditorActionsListItemProps {
    integrationName: string;
    integrationDescription: string;
    actions: any;
}
export declare class IntegrationEditorActionsListItem extends React.Component<IIntegrationEditorActionsListItemProps> {
    render(): JSX.Element;
}
