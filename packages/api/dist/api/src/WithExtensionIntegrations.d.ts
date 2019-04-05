import { IntegrationOverview } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IChangeEvent } from './WithServerEvents';
export interface IWithExtensionIntegrationsProps {
    extensionId: string;
    disableUpdates?: boolean;
    children(props: IFetchState<IntegrationOverview[]>): any;
}
/**
 * A component that fetches the integrations that a specified extension is used by.
 * @see [extensionId]{@link IWithExtensionIntegrationsProps#extensionId}
 */
export declare class WithExtensionIntegrations extends React.Component<IWithExtensionIntegrationsProps> {
    changeFilter(change: IChangeEvent): boolean;
    render(): JSX.Element;
}
