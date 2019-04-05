import * as React from 'react';
export interface IViewListItemProps {
    viewDescription: string;
    viewIcon?: string;
    viewName: string;
    i18nDelete: string;
    i18nDeleteTip?: string;
    i18nEdit: string;
    i18nEditTip?: string;
    onDelete: (viewName: string) => void;
    onEdit: (viewName: string) => void;
}
export declare class ViewListItem extends React.Component<IViewListItemProps> {
    render(): JSX.Element;
    private getDeleteTooltip;
    private getEditTooltip;
    private handleEdit;
    private handleDelete;
}
