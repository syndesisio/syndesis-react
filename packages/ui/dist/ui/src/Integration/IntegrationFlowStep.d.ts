import * as React from 'react';
import './IntegrationFlowStep.css';
export interface IIntegrationFlowStepProps {
    /**
     * The icon to show. Can be anything but must fit a circle of 55px of diameter.
     */
    icon: any;
    /**
     * Set to true to render the extended details for the step. Usually set to match
     * the expanded state of the parent container.
     */
    showDetails: boolean;
    /**
     * The text to show on the tooltip that opens when hovering with the mouse on
     * the icon.
     */
    i18nTooltip: string;
    /**
     * Set to true to set this step as active. This will highlight the icon circle.
     */
    active?: boolean;
}
export declare class IntegrationFlowStep extends React.Component<IIntegrationFlowStepProps> {
    static defaultProps: {
        active: boolean;
    };
    render(): JSX.Element;
}
