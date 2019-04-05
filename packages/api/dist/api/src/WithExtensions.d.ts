import { Extension } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
import { IChangeEvent } from './WithServerEvents';
export interface IExtensionsResponse {
    items: Extension[];
    totalCount: number;
}
export interface IWithExtensionsProps {
    disableUpdates?: boolean;
    children(props: IFetchState<IExtensionsResponse>): any;
}
/**
 * A component that fetches all the extensions.
 */
export declare class WithExtensions extends React.Component<IWithExtensionsProps> {
    changeFilter(change: IChangeEvent): boolean;
    render(): JSX.Element;
}
