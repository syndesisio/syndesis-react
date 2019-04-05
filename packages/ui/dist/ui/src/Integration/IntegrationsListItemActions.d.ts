import * as H from 'history';
import * as React from 'react';
export interface IIntegrationAction {
    href?: H.LocationDescriptor;
    onClick?: (e: React.MouseEvent<any>) => any;
    label: string | JSX.Element;
}
export interface IIntegrationsListItemActionsProps {
    integrationId: string;
    actions: IIntegrationAction[];
}
export declare class IntegrationsListItemActions extends React.Component<IIntegrationsListItemActionsProps> {
    render(): JSX.Element;
}
