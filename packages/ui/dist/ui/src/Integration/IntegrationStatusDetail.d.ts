import * as React from 'react';
import { IntegrationState } from './models';
import './IntegrationStatusDetail.css';
export interface IIntegrationStatusDetailProps {
    targetState: IntegrationState;
    value?: string;
    currentStep?: number;
    totalSteps?: number;
    logUrl?: string;
    i18nProgressPending: string;
    i18nProgressStarting: string;
    i18nProgressStopping: string;
    i18nLogUrlText: string;
}
export declare class IntegrationStatusDetail extends React.Component<IIntegrationStatusDetailProps> {
    render(): JSX.Element;
}
