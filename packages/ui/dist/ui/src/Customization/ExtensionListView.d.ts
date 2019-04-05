import * as React from 'react';
import { IListViewToolbarProps } from '../Shared';
export interface IExtensionListViewProps extends IListViewToolbarProps {
    i18nDescription: string;
    i18nEmptyStateInfo: string;
    i18nEmptyStateTitle: string;
    i18nLinkImportExtension: string;
    i18nLinkImportExtensionTip?: string;
    i18nName: string;
    i18nNameFilterPlaceholder: string;
    i18nTitle: string;
    linkImportExtension: string;
}
export declare class ExtensionListView extends React.Component<IExtensionListViewProps> {
    getImportTooltip(): JSX.Element;
    render(): JSX.Element;
}
