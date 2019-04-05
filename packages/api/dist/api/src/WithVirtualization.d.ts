import { RestDataService } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
export interface IWithVirtualizationProps {
    virtualizationId: string;
    initialValue?: RestDataService;
    children(props: IFetchState<RestDataService>): any;
}
/**
 * A component that fetches the virtualization with the specified identifier.
 * @see [virtualizationId]{@link IWithVirtualizationProps#virtualizationId}
 */
export declare class WithVirtualization extends React.Component<IWithVirtualizationProps> {
    render(): JSX.Element;
}
