import * as React from 'react';
import { IntegrationState } from '../Integration/models';
export interface IRecentUpdatesItem {
    integrationName: string;
    integrationCurrentState: IntegrationState;
    integrationDate: number;
    i18nError: string;
    i18nPublished: string;
    i18nUnpublished: string;
}
export declare const RecentUpdatesItem: React.FunctionComponent<IRecentUpdatesItem>;
