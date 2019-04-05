import * as React from 'react';
/**
 * A dialog that can be used to obtain user confirmation when deleting an object.
 */
export interface IDeleteConfirmationDialogProps {
    /**
     * The localized cancel button text.
     */
    i18nCancelButtonText: string;
    /**
     * The localized delete button text.
     */
    i18nDeleteButtonText: string;
    /**
     * The localized delete confirmation message.
     */
    i18nDeleteMessage: string;
    /**
     * An optional localized message providing more details.
     */
    i18nDetailsMessage?: string;
    /**
     * The localized dialog title.
     */
    i18nTitle: string;
    /**
     * A callback for when the cancel button is clicked. Caller should hide dialog.
     */
    onCancel: () => void;
    /**
     * A callback for when the delete button is clicked. Caller should hide dialog.
     */
    onDelete: () => void;
    /**
     * Indicates if the dialog should be visible.
     */
    showDialog: boolean;
}
/**
 * A modal dialog to display when an object is being deleted.
 */
export declare class DeleteConfirmationDialog extends React.Component<IDeleteConfirmationDialogProps> {
    render(): JSX.Element;
}
