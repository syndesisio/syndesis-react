import * as React from 'react';
export interface IApiConnectorListItemProps {
    apiConnectorDescription?: string;
    apiConnectorId: string;
    apiConnectorName: string;
    apiConnectorIcon?: string;
    i18nDelete: string;
    i18nDeleteTip?: string;
    i18nDetails: string;
    i18nDetailsTip?: string;
    i18nUsedByMessage: string;
    onDelete: (apiConnectorId: string) => void;
    onDetails: (extensionId: string) => void;
    usedBy: number;
}
export declare class ApiConnectorListItem extends React.Component<IApiConnectorListItemProps> {
    constructor(props: IApiConnectorListItemProps);
    getDeleteTooltip(): JSX.Element;
    getDetailsTooltip(): JSX.Element;
    handleDelete(): void;
    handleDetails(): void;
    render(): JSX.Element;
}
