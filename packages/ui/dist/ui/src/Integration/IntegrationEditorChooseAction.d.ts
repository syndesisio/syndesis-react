import * as React from 'react';
export interface IIntegrationEditorChooseActionProps {
    /**
     * The internationalized title.
     */
    i18nTitle: string;
    /**
     * The internationalized subtitle.
     */
    i18nSubtitle: string;
}
/**
 * A component to render a list of actions, to be used in the integration
 * editor.
 * @see [i18nTitle]{@link IIntegrationEditorChooseActionProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorChooseActionProps#i18nSubtitle}
 */
export declare class IntegrationEditorChooseAction extends React.Component<IIntegrationEditorChooseActionProps> {
    render(): JSX.Element;
}
