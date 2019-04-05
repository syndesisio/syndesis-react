import * as React from 'react';
export interface IIntegrationEditorNothingToConfigureProps {
    /**
     * The internationalized title.
     */
    i18nTitle: string;
    /**
     * The internationalized subtitle.
     */
    i18nSubtitle: string;
    /**
     * The internationalized alert to display.
     */
    i18nAlert: string;
}
/**
 * A component to render an alert for unconfigurable actions.
 * @see [i18nTitle]{@link IIntegrationEditorNothingToConfigureProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorNothingToConfigureProps#i18nSubtitle}
 * @see [i18nAlert]{@link IIntegrationEditorNothingToConfigureProps#i18nAlert}
 */
export declare class IntegrationEditorNothingToConfigure extends React.Component<IIntegrationEditorNothingToConfigureProps> {
    render(): JSX.Element;
}
