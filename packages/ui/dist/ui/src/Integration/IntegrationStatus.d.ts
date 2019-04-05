import * as React from 'react';
import { IntegrationState } from './models';
export interface IIntegrationStatusProps {
    currentState?: IntegrationState;
    i18nPublished: string;
    i18nUnpublished: string;
    i18nError: string;
}
export declare class IntegrationStatus extends React.Component<IIntegrationStatusProps> {
    render(): JSX.Element;
}
