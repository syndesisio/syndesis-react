import * as React from 'react';
export interface IWithPollingProps {
    polling: number;
    read: () => void;
    children(): any;
}
export declare class WithPolling extends React.Component<IWithPollingProps> {
    pollingTimer?: number;
    constructor(props: IWithPollingProps);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    render(): any;
    poller(): void;
    setPoller(func: () => void): void;
    private startPolling;
    private stopPolling;
}
