import * as H from 'history';
import * as React from 'react';
export interface IExtensionListItemProps {
    detailsPageLink: H.LocationDescriptor;
    extensionDescription?: string;
    extensionIcon?: string;
    extensionId: string;
    extensionName: string;
    i18nCancelText: string;
    i18nDelete: string;
    i18nDeleteModalMessage: string;
    i18nDeleteModalTitle: string;
    i18nDeleteTip?: string;
    i18nDetails: string;
    i18nDetailsTip?: string;
    i18nExtensionType: string;
    i18nUpdate: string;
    i18nUpdateTip?: string;
    i18nUsedByMessage: string;
    onDelete: (extensionId: string) => void;
    onUpdate: (extensionId: string) => void;
    usedBy: number;
}
export interface IExtensionListItemState {
    showDeleteDialog: boolean;
}
export declare class ExtensionListItem extends React.Component<IExtensionListItemProps, IExtensionListItemState> {
    constructor(props: IExtensionListItemProps);
    doCancel(): void;
    doDelete(): void;
    getDeleteTooltip(): JSX.Element;
    getDetailsTooltip(): JSX.Element;
    getUpdateTooltip(): JSX.Element;
    handleUpdate(): void;
    showDeleteDialog(): void;
    render(): JSX.Element;
}
