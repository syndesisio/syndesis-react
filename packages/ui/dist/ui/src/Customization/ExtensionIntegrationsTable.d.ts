import * as React from 'react';
export interface IExtensionIntegration {
    name: string;
    description: string;
}
export interface IExtensionIntegrationsTableProps {
    i18nDescription: string;
    i18nName: string;
    i18nUsageMessage: string;
    onSelectIntegration: (integrationId: string) => void;
    data: IExtensionIntegration[];
}
export declare class ExtensionIntegrationsTable extends React.Component<IExtensionIntegrationsTableProps> {
    getColumns(): {
        cell: {
            formatters: ((value: string, { rowData }: {
                rowData: any;
            }) => JSX.Element)[];
        };
        header: {
            formatters: ((value: string) => JSX.Element)[];
            label: string;
        };
        property: string;
    }[];
    onIntegrationSelected(integrationId: string): void;
    render(): JSX.Element;
}
