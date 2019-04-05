/// <reference types="react" />
import * as H from 'history';
interface INavLink {
    activeClassName?: string;
    activeStyle?: any;
    className?: string;
    exact?: boolean;
    isActive?: (match: any, location: any) => boolean;
    location?: any;
    strict?: boolean;
    style?: any;
    to: H.LocationDescriptor;
    label: any;
    children?: any;
}
export declare const PfNavLink: ({ activeClassName, activeStyle, className: classNameProp, exact, isActive: isActiveProp, location, strict, style: styleProp, to, label, children, ...rest }: INavLink) => JSX.Element;
export {};
