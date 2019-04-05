import * as React from 'react';
export interface IIntegrationDetailHistoryListViewItemProps {
    integrationUpdatedAt: string;
    integrationVersion: number;
    i18nTextHistoryMenuReplaceDraft?: string;
    i18nTextHistoryMenuUnpublish?: string;
    i18nTextLastPublished?: string;
    i18nTextVersion?: string;
}
export declare class IntegrationDetailHistoryListViewItem extends React.Component<IIntegrationDetailHistoryListViewItemProps> {
    render(): JSX.Element;
}
