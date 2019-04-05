import * as React from 'react';
import './ExtensionDetail.css';
export interface IExtensionDetailProps {
    /**
     * The name of the extension.
     */
    extensionName: string;
    /**
     * The number of integrations that use this extension.
     */
    extensionUses: number;
    /**
     * The localized text of the cancel button used when deleting this extension.
     */
    i18nCancelText: string;
    /**
     * The localized text of the delete button.
     */
    i18nDelete: string;
    /**
     * The localized delete confirmation message.
     */
    i18nDeleteModalMessage: string;
    /**
     * The localized title of the delete dialog.
     */
    i18nDeleteModalTitle: string;
    /**
     * The localized tooltip of the delete button.
     */
    i18nDeleteTip?: string;
    /**
     * The localized message that displays the extension ID.
     */
    i18nIdMessage: string;
    /**
     * The localized text for the overview section title.
     */
    i18nOverviewSectionTitle: string;
    /**
     * The localized text of the supports section title.
     */
    i18nSupportsSectionTitle: string;
    /**
     * The localized text of the update button.
     */
    i18nUpdate: string;
    /**
     * The localized tooltip of the update button.
     */
    i18nUpdateTip?: string;
    /**
     * The localized text of the usage section title.
     */
    i18nUsageSectionTitle: string;
    /**
     * The JSX element that displayes the integrations used by this extension.
     */
    integrationsSection: JSX.Element;
    /**
     * The callback for when the delete button is clicked.
     */
    onDelete: () => void;
    /**
     * The callback for when the update button is clicked.
     */
    onUpdate: () => void;
    /**
     * The JSX element that displays the overview section.
     */
    overviewSection: JSX.Element;
    /**
     * The JSX element that displays the supports section.
     */
    supportsSection: JSX.Element;
}
export interface IExtensionDetailState {
    showDeleteDialog: boolean;
}
export declare class ExtensionDetail extends React.Component<IExtensionDetailProps, IExtensionDetailState> {
    constructor(props: IExtensionDetailProps);
    doCancel(): void;
    doDelete(): void;
    getDeleteTooltip(): JSX.Element;
    getUpdateTooltip(): JSX.Element;
    showDeleteDialog(): void;
    render(): JSX.Element;
}
