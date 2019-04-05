import * as React from 'react';
import { IApiContext } from './ApiContext';
export interface IWithVirtualizationHelpersChildrenProps {
    createVirtualization(virtualizationName: string, virtualizationDescription?: string): Promise<void>;
    deleteVirtualization(virtualizationName: string): Promise<void>;
    publishVirtualization(virtualizationName: string): Promise<void>;
    unpublishServiceVdb(vdbName: string): Promise<void>;
}
export interface IWithVirtualizationHelpersProps {
    username: string;
    children(props: IWithVirtualizationHelpersChildrenProps): any;
}
export declare class WithVirtualizationHelpersWrapped extends React.Component<IWithVirtualizationHelpersProps & IApiContext> {
    constructor(props: IWithVirtualizationHelpersProps & IApiContext);
    /**
     * Creates a virtualization with the specified name and description
     * @param virtName the name of the virtualization to create
     * @param virtDesc the description (optional) of the virtualization to create
     */
    createVirtualization(virtName: string, virtDesc?: string): Promise<void>;
    /**
     * Deletes the virtualization with the specified name.
     * @param virtualizationName the name of the virtualization being deleted
     */
    deleteVirtualization(virtualizationName: string): Promise<void>;
    /**
     * Publish the virtualization with the specified name.
     * @param virtualizationName the name of the virtualization being published
     */
    publishVirtualization(virtualizationName: string): Promise<void>;
    /**
     * Unpublish the Service VDB with the specified name.
     * @param vdbName the name of the vdb associated with the service
     */
    unpublishServiceVdb(vdbName: string): Promise<void>;
    render(): any;
}
export declare const WithVirtualizationHelpers: React.FunctionComponent<IWithVirtualizationHelpersProps>;
