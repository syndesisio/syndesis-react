import * as React from 'react';
import { IIntegrationFlowStepProps } from './IntegrationFlowStep';
export interface IIntegrationFlowStepWithOverviewProps extends IIntegrationFlowStepProps {
    /**
     * The title of the extended information table.
     */
    i18nTitle: string;
    /**
     * The name of the connection used for the step.
     */
    name: string;
    /**
     * The name of the action used for the step.
     */
    action: string;
    /**
     * The data-type set up for the step.
     */
    dataType: string;
}
/**
 * A component to show an already configured step in the sidebar of the
 * integration editor.
 *
 * @see [i18nTitle]{@link IIntegrationFlowStepWithOverviewProps#i18nTitle}
 * @see [i18nTooltip]{@link IIntegrationFlowStepProps#i18nTooltip}
 * @see [icon]{@link IIntegrationFlowStepProps#icon}
 * @see [active]{@link IIntegrationFlowStepProps#active}
 * @see [showDetails]{@link IIntegrationFlowStepProps#showDetails}
 * @see [name]{@link IIntegrationFlowStepWithOverviewProps#name}
 * @see [action]{@link IIntegrationFlowStepWithOverviewProps#action}
 * @see [dataType]{@link IIntegrationFlowStepWithOverviewProps#dataType}
 * @constructor
 */
export declare const IntegrationFlowStepWithOverview: React.FunctionComponent<IIntegrationFlowStepWithOverviewProps>;
