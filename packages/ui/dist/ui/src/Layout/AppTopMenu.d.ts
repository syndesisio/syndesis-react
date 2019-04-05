import * as React from 'react';
export interface IAppTopMenuProps {
    username: string;
}
/**
 * A component to show breadcrumbs. All its children will be wrapped in a tag
 * that will automatically handle the active/inactive state by setting the
 * appropriate class to the wrapper.
 *
 * It's suggested to use only anchors or spans as children node.
 */
export declare const AppTopMenu: React.FunctionComponent<IAppTopMenuProps>;
