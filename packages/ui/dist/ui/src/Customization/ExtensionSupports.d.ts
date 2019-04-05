import * as React from 'react';
export interface IAction {
    description: string;
    name: string;
}
export interface IExtensionSupportsProps {
    extensionActions: IAction[];
}
/**
 * A component that displays the support section of the extension details page.
 */
export declare class ExtensionSupports extends React.Component<IExtensionSupportsProps> {
    render(): JSX.Element;
}
