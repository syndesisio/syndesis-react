import * as React from 'react';
import './Loader.css';
export interface ILoaderProps {
    inline?: boolean;
    inverse?: boolean;
    loading?: boolean;
    size?: 'lg' | 'md' | 'sm' | 'xs';
}
export declare class Loader extends React.PureComponent<ILoaderProps> {
    static defaultProps: {
        inline: boolean;
        inverse: boolean;
        loading: boolean;
        size: string;
    };
    render(): JSX.Element;
}
