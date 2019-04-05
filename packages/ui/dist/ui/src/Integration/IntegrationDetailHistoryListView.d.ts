import * as React from 'react';
import './IntegrationDetailHistoryListView.css';
export interface IIntegrationDetailHistoryListViewProps {
    integrationIsDraft: boolean;
    i18nTextBtnEdit?: string;
    i18nTextBtnPublish?: string;
    i18nTextDraft?: string;
    i18nTextHistory?: string;
}
export declare class IntegrationDetailHistoryListView extends React.Component<IIntegrationDetailHistoryListViewProps> {
    render(): JSX.Element;
}
