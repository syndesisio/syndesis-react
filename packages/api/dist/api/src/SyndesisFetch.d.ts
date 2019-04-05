import * as React from 'react';
import { IFetchRenderProps } from './Fetch';
export interface ISyndesisFetchProps<T> {
    autoload?: boolean;
    contentType?: string;
    url: string;
    stream?: boolean;
    defaultValue: T;
    initialValue?: T;
    children(props: IFetchRenderProps<T>): any;
}
export declare class SyndesisFetch<T> extends React.Component<ISyndesisFetchProps<T>> {
    render(): JSX.Element;
}
