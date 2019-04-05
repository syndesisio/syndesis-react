import * as React from 'react';
import './DndFileChooser.css';
import { INotification } from './Notifications';
/**
 * The properties of the `DndFileChooser`.
 */
export interface IDndFileChooserProps {
    /**
     * Indicates if multiple files can be added. Defaults to `false`.
     */
    allowMultiple?: boolean;
    /**
     * `true` if the dropzone should be disabled. Defaults to `false`.
     */
    disableDropzone: boolean;
    /**
     * A comma delimited string of file extensions. For example, '.jar,.txt'. Defaults to any file extension.
     */
    fileExtensions?: string;
    /**
     * The localized text that appears below the selected file information at the bottom of the drop area.
     */
    i18nHelpMessage?: string;
    /**
     * The localized text (may include HTML tags) that appears above the selected file information at the
     * top of the drop area.
     */
    i18nInstructions: string;
    /**
     * The localized text that appears when no file has been selected.
     */
    i18nNoFileSelectedMessage: string;
    /**
     * The localized text for the label that appears before the selected file information.
     */
    i18nSelectedFileLabel: string;
    /**
     * A general, localized message for when a file upload failed. This message will be shown
     * along with an error icon and appears next to the selected file message. If this property
     * is set then `i18nUploadSuccessMessage` should not be set.
     */
    i18nUploadFailedMessage?: string;
    /**
     * A general, localized message for when a file upload was successful. This message will be shown
     * along with an OK icon and appear next to the selected file message. If this property
     * is set then `i18nUploadFailedMessage` should not be set.
     */
    i18nUploadSuccessMessage?: string;
    /**
     * Obtains the localized text (may include HTML tags) that appears when the file upload was rejected. This
     * will occur when a DnD of a file with the wrong extension is dropped. This message is presented
     * as a timed toast notification.
     */
    onUploadRejected(fileName: string): string;
    /**
     * Callback for when one or more file uploads have been accepted. Caller should handler processing of the files.
     */
    onUploadAccepted(file: File[]): void;
}
/**
 * The state properties of the `DndFileChooser`.
 */
export interface IDndFileChooserState {
    /**
     * The files that were uploaded successfully. Defaults to an empty array.
     */
    files: File[];
    /**
     * The error notifications for rejected files. After a toast is displayed for a notification it is removed
     * from the array.
     */
    notifications: INotification[];
}
/**
 * A component that can be used to upload files. Files can be uploaded by clicking in the drop zone or by
 * drag and dropping files into the drop zone.
 */
export declare class DndFileChooser extends React.Component<IDndFileChooserProps, IDndFileChooserState> {
    static defaultProps: {
        allowMultiple: boolean;
    };
    constructor(props: IDndFileChooserProps);
    /**
     * Obtains an element that lists the names of the files that have been uploaded.
     */
    getSelectedFileMessage(): JSX.Element;
    /**
     * Obtains an element that indicates the if the upload was successful.
     */
    getUploadMessage(): JSX.Element;
    /**
     * Callback for when one or more files were uploaded successfully.
     * @param acceptedFiles the files that have been uploaded
     */
    handleAcceptedFiles(acceptedFiles: File[]): void;
    /**
     * Callback for when one or more files were rejected.
     * @param rejectedFiles the files that were rejected
     */
    handleRejectedFiles(rejectedFiles: File[]): void;
    render(): JSX.Element;
}
