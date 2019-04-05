import * as H from 'history';
import * as React from 'react';
import { VirtualizationPublishState } from './models';
export interface IVirtualizationListItemProps {
    currentPublishedState: VirtualizationPublishState;
    detailsPageLink: H.LocationDescriptor;
    i18nCancelText: string;
    i18nDelete: string;
    i18nDeleteModalMessage: string;
    i18nDeleteModalTitle: string;
    i18nDraft: string;
    i18nError: string;
    i18nEdit: string;
    i18nEditTip?: string;
    i18nExport: string;
    i18nPublished: string;
    i18nPublishLogUrlText: string;
    i18nPublishInProgress: string;
    i18nUnpublish: string;
    i18nPublish: string;
    icon?: string;
    onDelete: (virtualizationName: string) => void;
    onEdit: (virtualizationName: string) => void;
    onExport: (virtualizationName: string) => void;
    onPublish: (virtualizationName: string) => void;
    onUnpublish: (virtualizationName: string) => void;
    publishLogUrl?: string;
    serviceVdbName: string;
    virtualizationName: string;
    virtualizationDescription: string;
}
export interface IVirtualizationListItemState {
    showDeleteDialog: boolean;
}
export declare class VirtualizationListItem extends React.Component<IVirtualizationListItemProps, IVirtualizationListItemState> {
    constructor(props: IVirtualizationListItemProps);
    getEditTooltip(): JSX.Element;
    handleCancel(): void;
    handleDelete(): void;
    handleEdit(): void;
    handleExport(): void;
    handlePublish(): void;
    handleUnpublish(): void;
    showDeleteDialog(): void;
    render(): JSX.Element;
}
