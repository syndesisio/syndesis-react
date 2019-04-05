import * as React from 'react';
import { IFetchHeaders } from './callFetch';
export interface IChangeEvent {
    action: string;
    kind: string;
    id: string;
}
export interface IMessageEvent {
    id: string;
    data: string;
    event: string;
}
export interface IWithEventsProps {
    apiUri: string;
    headers: IFetchHeaders;
    children(props: IWithEventsState): any;
}
export interface IWithEventsState {
    registerChangeListener: (listener: (event: IChangeEvent) => void) => void;
    registerMessageListener: (listener: (event: IMessageEvent) => void) => void;
    unregisterChangeListener: (listener: (event: IChangeEvent) => void) => void;
    unregisterMessageListener: (listener: (event: IMessageEvent) => void) => void;
}
export declare class WithServerEvents extends React.Component<IWithEventsProps, IWithEventsState> {
    private starting;
    private started;
    private unmounting;
    private retries;
    private preferredProtocol;
    private eventSource;
    private webSocket;
    private changeListeners;
    private messageListeners;
    constructor(props: IWithEventsProps);
    registerChangeListener(listener: (event: IChangeEvent) => void): void;
    registerMessageListener(listener: (event: IMessageEvent) => void): void;
    unregisterChangeListener(listener: (event: IChangeEvent) => void): void;
    unregisterMessageListener(listener: (event: IMessageEvent) => void): void;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    render(): any;
    private close;
    private start;
    private onFailure;
    private startConnection;
    private postMessageEvent;
    private postChangeEvent;
    private connectEventSource;
    private connectWebSocket;
}
