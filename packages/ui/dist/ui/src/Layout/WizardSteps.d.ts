import * as React from 'react';
interface IWizardStepsProps {
    mainSteps: React.ReactNode;
    altSteps: React.ReactNode;
    /**
     * Indicates if the user clicked on a step. Used to show
     * sub-steps when browsing from a mobile device.
     */
    active: boolean;
}
export declare class WizardSteps extends React.Component<IWizardStepsProps> {
    render(): JSX.Element;
}
export {};
