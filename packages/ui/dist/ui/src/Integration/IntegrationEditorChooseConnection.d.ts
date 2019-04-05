import * as React from 'react';
export interface IIntegrationEditorChooseConnection {
    /**
     * The main title of the content, shown before the connections.
     */
    i18nTitle: string;
    /**
     * The description of the content, shown before the connections.
     */
    i18nSubtitle: string;
}
/**
 * A component to render a list of connections, to be used in the integration
 * editor.
 *
 * @see [i18nTitle]{@link IIntegrationEditorChooseConnection#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorChooseConnection#i18nSubtitle}
 */
export declare class IntegrationEditorChooseConnection extends React.Component<IIntegrationEditorChooseConnection> {
    render(): JSX.Element;
}
