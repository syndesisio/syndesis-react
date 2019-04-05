import * as H from 'history';
import * as React from 'react';
import { IListViewToolbarProps } from '../../Shared';
export interface IVirtualizationListProps extends IListViewToolbarProps {
    hasListData: boolean;
    i18nCreateDataVirtualization: string;
    i18nCreateDataVirtualizationTip?: string;
    i18nDescription: string;
    i18nEmptyStateInfo: string;
    i18nEmptyStateTitle: string;
    i18nImport: string;
    i18nImportTip: string;
    i18nLinkCreateVirtualization: string;
    i18nLinkCreateVirtualizationTip?: string;
    i18nName: string;
    i18nNameFilterPlaceholder: string;
    i18nTitle: string;
    linkCreateHRef: H.LocationDescriptor;
    onImport: (name: string) => void;
}
export declare class VirtualizationList extends React.Component<IVirtualizationListProps> {
    constructor(props: IVirtualizationListProps);
    getCreateVirtualizationTooltip(): JSX.Element;
    getImportVirtualizationTooltip(): JSX.Element;
    handleImport(): void;
    render(): JSX.Element;
}
