import * as React from 'react';
import './IntegrationFlowStepDetails.css';
interface IStepOverviewProps {
    nameI18nLabel: string;
    name: string;
    actionI18nLabel: string;
    action: string;
    dataTypeI18nLabel: string;
    dataType: string;
}
export interface IntegrationFlowStepDetailsChildrenProps {
    Title: React.FunctionComponent;
    GenericDescription: React.FunctionComponent;
    StepOverview: React.FunctionComponent<IStepOverviewProps>;
}
export interface IntegrationFlowStepDetailsProps {
    active?: boolean;
    children(props: IntegrationFlowStepDetailsChildrenProps): any;
}
/**
 * A render prop component that provides the right components than can be used
 * inside a step element of the integration editor sidebar.
 */
export declare class IntegrationFlowStepDetails extends React.Component<IntegrationFlowStepDetailsProps> {
    static defaultProps: {
        active: boolean;
    };
    render(): JSX.Element;
}
export {};
