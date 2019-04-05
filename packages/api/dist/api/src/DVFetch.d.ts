import * as React from 'react';
import { IFetchRenderProps } from './Fetch';
export interface IDVFetchProps<T> {
    autoload?: boolean;
    contentType?: string;
    url: string;
    stream?: boolean;
    defaultValue: T;
    initialValue?: T;
    children(props: IFetchRenderProps<T>): any;
}
export declare class DVFetch<T> extends React.Component<IDVFetchProps<T>> {
    render(): JSX.Element;
}
