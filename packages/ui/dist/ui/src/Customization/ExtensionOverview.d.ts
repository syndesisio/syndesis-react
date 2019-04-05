import * as React from 'react';
import './ExtensionOverview.css';
export interface IExtensionOverviewProps {
    /**
     * The optional description of the extension.
     */
    extensionDescription?: string;
    /**
     * The name of the extension.
     */
    extensionName: string;
    /**
     * The localized 'Description' label.
     */
    i18nDescription: string;
    /**
     * The localized 'Last Update' label.
     */
    i18nLastUpdate: string;
    /**
     * The localized last update date.
     */
    i18nLastUpdateDate?: string;
    /**
     * The localized 'Name' label.
     */
    i18nName: string;
    /**
     * The localized 'Type' label.
     */
    i18nType: string;
    /**
     * The localized type message.
     */
    i18nTypeMessage: string;
}
/**
 * A component that displays the overview section of the extension details page.
 */
export declare class ExtensionOverview extends React.Component<IExtensionOverviewProps> {
    render(): JSX.Element;
}
