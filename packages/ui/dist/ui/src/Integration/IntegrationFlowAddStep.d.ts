import * as H from 'history';
import * as React from 'react';
import './IntegrationFlowAddStep.css';
export interface IIntegrationFlowAddStepProps {
    showDetails: boolean;
    forceTooltip?: boolean;
    addStepHref?: H.LocationDescriptor;
    i18nAddStep?: string;
    addConnectionHref?: H.LocationDescriptor;
    i18nAddConnection?: string;
}
export interface IIntegrationFlowAddStepState {
    showTooltip: boolean;
}
export declare class IntegrationFlowAddStep extends React.Component<IIntegrationFlowAddStepProps, IIntegrationFlowAddStepState> {
    static defaultProps: {
        active: boolean;
    };
    state: {
        forceTooltip: boolean;
        showTooltip: boolean;
    };
    containerRef: React.RefObject<HTMLDivElement>;
    constructor(props: IIntegrationFlowAddStepProps);
    showTooltip(): void;
    hideTooltip(): void;
    toggleTooltip(): void;
    render(): JSX.Element;
}
