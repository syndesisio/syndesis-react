import * as React from 'react';
import { CellMeasurerCache, ListRowRenderer } from 'react-virtualized';
import './LogViewer.css';
export interface ILogViewerProps {
    data: string[];
    height?: number;
    width?: null;
}
export interface ILogViewerState {
    count: number;
    followScroll: boolean;
    previousCount: number;
}
export declare class LogViewer extends React.Component<ILogViewerProps, ILogViewerState> {
    static defaultProps: {
        height: number;
    };
    static getDerivedStateFromProps({ data }: ILogViewerProps, state: ILogViewerState): {
        count: number;
        previousCount: number;
        followScroll: boolean;
    };
    state: {
        count: number;
        followScroll: boolean;
        previousCount: number;
    };
    cellMeasurerCache: CellMeasurerCache;
    constructor(props: ILogViewerProps);
    render(): JSX.Element;
    renderRow: ListRowRenderer;
    toggleFollow: () => void;
}
