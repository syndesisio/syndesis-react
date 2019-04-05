import * as React from 'react';
import { IIntegrationFlowStepProps } from './IntegrationFlowStep';
export interface IIntegrationFlowStepGenericProps extends IIntegrationFlowStepProps {
    /**
     * The title of the extended information table.
     */
    i18nTitle: string;
    /**
     * The content of the extended information table.
     */
    description: string;
}
/**
 * A component to show an unconfigured (or being configured) step in the
 * sidebar of the integration editor.
 *
 * @see [icon]{@link IIntegrationFlowStepProps#icon}
 * @see [active]{@link IIntegrationFlowStepProps#active}
 * @see [i18nTitle]{@link IIntegrationFlowStepGenericProps#i18nTitle}
 * @see [i18nTooltip]{@link IIntegrationFlowStepProps#i18nTooltip}
 * @see [showDetails]{@link IIntegrationFlowStepProps#showDetails}
 * @see [description]{@link IIntegrationFlowStepGenericProps#description}
 * @see [href]{@link IIntegrationFlowStepProps#href}
 */
export declare const IntegrationFlowStepGeneric: React.FunctionComponent<IIntegrationFlowStepGenericProps>;
