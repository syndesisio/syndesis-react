import * as H from 'history';
import * as React from 'react';
interface IButtonLinkProps {
    onClick?: (e: React.MouseEvent<any>) => void;
    href?: H.LocationDescriptor;
    className?: string;
    disabled?: boolean;
    as?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
    size?: 'lg' | 'sm' | 'xs';
    [key: string]: any;
}
export declare const ButtonLink: React.FunctionComponent<IButtonLinkProps>;
export {};
