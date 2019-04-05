import * as React from 'react';
interface IWizardStepProps {
    isActive: boolean;
    isDisabled: boolean;
    isAlt?: boolean;
    onClick?: () => any;
    step: number;
    title: string;
    subSteps?: string[];
    activeSubstep?: number;
}
export declare const WizardStep: React.FunctionComponent<IWizardStepProps>;
export {};
