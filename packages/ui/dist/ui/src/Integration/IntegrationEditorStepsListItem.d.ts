import * as React from 'react';
export interface IIntegrationEditorStepsListItemProps {
    stepName: string;
    stepDescription: string;
    actions: any;
    icon: any;
}
export declare class IntegrationEditorStepsListItem extends React.Component<IIntegrationEditorStepsListItemProps> {
    render(): JSX.Element;
}
