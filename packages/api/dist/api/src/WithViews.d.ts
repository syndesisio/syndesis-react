import { RestViewDefinition } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
export interface IWithViewProps {
    virtualizationId: string;
    initialValue?: RestViewDefinition[];
    children(props: IFetchState<RestViewDefinition[]>): any;
}
/**
 * A component that fetches the virtualization views with the specified identifier.
 * @see [virtualizationId]{@link IWithViewProps#virtualizationId}
 */
export declare class WithViews extends React.Component<IWithViewProps> {
    render(): JSX.Element;
}
