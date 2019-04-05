import * as React from 'react';
import './IntegrationStepsHorizontalView.css';
export interface IIntegrationSteps {
    name: string;
    pattern: string;
}
export interface IIntegrationStepsHorizontalViewProps {
    steps: IIntegrationSteps[];
}
export declare class IntegrationStepsHorizontalView extends React.Component<IIntegrationStepsHorizontalViewProps> {
    render(): JSX.Element;
}
