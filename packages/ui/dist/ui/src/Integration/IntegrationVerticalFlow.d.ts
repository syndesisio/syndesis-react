import * as React from 'react';
import './IntegrationVerticalFlow.css';
export interface IIntegrationVerticalFlowProps {
    /**
     * A render prop that receives the expanded state of the container.
     * @see [props.expanded]{@link IIntegrationVerticalFlowState#expanded}
     */
    children(props: IIntegrationVerticalFlowState): any;
}
export interface IIntegrationVerticalFlowState {
    /**
     * The container expanded state.
     */
    expanded: boolean;
}
/**
 * A component to render an expandable container meant to be used to show an
 * integration's steps.
 * @see [children]{@link IIntegrationVerticalFlowProps#children}
 */
export declare class IntegrationVerticalFlow extends React.Component<IIntegrationVerticalFlowProps, IIntegrationVerticalFlowState> {
    static defaultProps: {
        disabled: boolean;
    };
    state: {
        expanded: boolean;
    };
    constructor(props: IIntegrationVerticalFlowProps);
    toggleExpanded(): void;
    render(): JSX.Element;
}
