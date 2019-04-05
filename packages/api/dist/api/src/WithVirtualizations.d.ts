import { RestDataService } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
export interface IWithVirtualizationsProps {
    children(props: IFetchState<RestDataService[]>): any;
}
export declare class WithVirtualizations extends React.Component<IWithVirtualizationsProps> {
    render(): JSX.Element;
}
