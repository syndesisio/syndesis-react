import * as React from 'react';
import { IFetchHeaders } from './callFetch';
export interface IFetchState<T> {
    data: T;
    error: boolean;
    errorMessage?: string;
    hasData: boolean;
    loading: boolean;
}
export interface IFetchRenderProps<T> {
    response: IFetchState<T>;
    read(): Promise<void>;
}
export interface IFetchProps<T> {
    baseUrl: string;
    url: string;
    headers?: IFetchHeaders;
    contentType?: string;
    defaultValue: T;
    initialValue?: T;
    children(props: IFetchRenderProps<T>): any;
}
export declare class Fetch<T> extends React.Component<IFetchProps<T>, IFetchState<T>> {
    constructor(props: IFetchProps<T>);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: IFetchProps<T>): Promise<void>;
    shouldComponentUpdate(nextProps: IFetchProps<T>, nextState: IFetchState<T>): boolean;
    render(): any;
    read(): Promise<void>;
}
