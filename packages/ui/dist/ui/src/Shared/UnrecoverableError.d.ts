import * as React from 'react';
export interface IUnrecoverableErrorProps {
    i18nTitle: string;
    i18nInfo: string;
    i18nHelp: string;
    i18nRefreshLabel: string;
    i18nReportIssue: string;
    i18nShowErrorInfoLabel?: string;
    error?: Error;
    errorInfo?: React.ErrorInfo;
}
export declare const UnrecoverableError: React.FC<IUnrecoverableErrorProps>;
