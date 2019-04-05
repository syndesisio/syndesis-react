import * as React from 'react';
import './IntegrationProgress.css';
export interface IIntegrationProgressProps {
    value: string;
    currentStep: number;
    totalSteps: number;
    logUrl?: string;
    i18nLogUrlText: string;
}
export declare class IntegrationProgress extends React.PureComponent<IIntegrationProgressProps> {
    render(): JSX.Element;
}
