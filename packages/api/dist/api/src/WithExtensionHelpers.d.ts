import { Extension } from '@syndesis/models';
import * as React from 'react';
import { IApiContext } from './ApiContext';
export interface IWithExtensionHelpersChildrenProps {
    deleteExtension(extensionId: string): Promise<void>;
    importExtension(extensionId: string): Promise<void>;
    uploadExtension(file: File, extensionId?: string): Promise<Extension>;
}
export interface IWithExtensionHelpersProps {
    children(props: IWithExtensionHelpersChildrenProps): any;
}
export declare class WithExtensionHelpersWrapped extends React.Component<IWithExtensionHelpersProps & IApiContext> {
    constructor(props: IWithExtensionHelpersProps & IApiContext);
    /**
     * Deletes the extension with the specified identifier.
     * @param extensionId the ID of the extension being deleted
     */
    deleteExtension(extensionId: string): Promise<void>;
    /**
     * Imports the extension with the specified identifier.
     * @param extensionId the ID of the extension being imported
     */
    importExtension(extensionId: string): Promise<void>;
    /**
     * Uploads the extension with the specified identifier or creates a new extension if there is no identifier.
     * @param extensionId the ID of the extension being uploaded
     */
    uploadExtension(file: File, extensionId?: string): Promise<Extension>;
    render(): any;
}
export declare const WithExtensionHelpers: React.FunctionComponent<IWithExtensionHelpersProps>;
