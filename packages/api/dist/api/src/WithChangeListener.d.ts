import * as React from 'react';
import { IChangeEvent } from './WithServerEvents';
export interface IWithChangeListenerProps {
    filter: (change: IChangeEvent) => boolean;
    read: () => void;
    registerChangeListener: (listener: (event: IChangeEvent) => void) => void;
    unregisterChangeListener: (listener: (event: IChangeEvent) => void) => void;
    children(): any;
}
export declare class WithChangeListener extends React.Component<IWithChangeListenerProps> {
    constructor(props: IWithChangeListenerProps);
    render(): any;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    changeListener(event: IChangeEvent): void;
}
