import * as React from 'react';
import './ExtensionImportReview.css';
export interface IImportAction {
    description: string;
    name: string;
}
export interface IExtensionImportReviewProps {
    /**
     * The extension actions.
     */
    actions?: IImportAction[];
    /**
     * The href that will be navigated to when the cancel button is clicked.
     */
    cancelLink: string;
    /**
     * The optional description of the extension.
     */
    extensionDescription?: string;
    /**
     * The ID of the extension.
     */
    extensionId: string;
    /**
     * The name of the extension.
     */
    extensionName: string;
    /**
     * The localized label for the list of actions.
     */
    i18nActionsLabel: string;
    /**
     * The localized text for the cancel button.
     */
    i18nCancel: string;
    /**
     * The localized 'Description' label.
     */
    i18nDescriptionLabel: string;
    /**
     * The localized text identifying the extension type.
     */
    i18nExtensionTypeMessage: string;
    /**
     * The localized 'ID' label.
     */
    i18nIdLabel: string;
    /**
     * The localized text for the import button.
     */
    i18nImport: string;
    /**
     * The localized 'Name' label.
     */
    i18nNameLabel: string;
    /**
     * The localized title.
     */
    i18nTitle: string;
    /**
     * The localized 'Type' label.
     */
    i18nTypeLabel: string;
    /**
     * Obtains a localized message with the action name and description.
     * @param name the action name
     * @param description the action description
     */
    i18nActionText(name: string, description: string): string;
    /**
     * Callback for when the import button is clicked.
     * @param extensionId the ID of the extension being imported/installed
     */
    onImport(extensionId: string): void;
}
/**
 * A component that displays the extension import review information.
 */
export declare class ExtensionImportReview extends React.Component<IExtensionImportReviewProps> {
    constructor(props: IExtensionImportReviewProps);
    getActions(): JSX.Element;
    handleImport(): void;
    render(): JSX.Element;
}
