import { Extension } from '@syndesis/models';
import * as React from 'react';
import { IFetchState } from './Fetch';
export interface IWithExtensionProps {
    extensionId: string;
    initialValue?: Extension;
    children(props: IFetchState<Extension>): any;
}
/**
 * A component that fetches the extension with the specified identifier.
 * @see [extensionId]{@link IWithExtensionProps#extensionId}
 */
export declare class WithExtension extends React.Component<IWithExtensionProps> {
    render(): JSX.Element;
}
