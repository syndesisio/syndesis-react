import * as H from 'history';
import * as React from 'react';
import { IListViewToolbarProps } from '../../../Shared';
export interface IViewsListProps extends IListViewToolbarProps {
    hasListData: boolean;
    i18nEmptyStateInfo: string;
    i18nEmptyStateTitle: string;
    i18nImportView: string;
    i18nImportViewTip: string;
    linkCreateHRef: H.LocationDescriptor;
    i18nCreateViewTip?: string;
    i18nCreateView: string;
    i18nDescription: string;
    i18nName: string;
    i18nNameFilterPlaceholder: string;
    onImportView: (name: string) => void;
}
export declare class ViewList extends React.Component<IViewsListProps> {
    constructor(props: IViewsListProps);
    render(): JSX.Element;
    private getCreateViewTooltip;
    private getImportViewTooltip;
    private handleImportView;
}
