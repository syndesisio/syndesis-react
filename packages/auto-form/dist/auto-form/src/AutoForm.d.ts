import * as React from 'react';
import { IFormDefinition, IFormErrors } from './models';
export interface IAutoFormProps<T> {
    /**
     * A map of configuration properties as returned by the Syndesis API
     */
    definition: IFormDefinition;
    /**
     * The initial value that should be set on the form
     */
    initialValue: T;
    /**
     * String to be displayed when a required field isn't set
     */
    i18nRequiredProperty: string;
    /**
     * Callback function that will be called when the form is submitted
     */
    onSave: (value: T, actions: any) => void;
    /**
     * Validation function called whenever a change or blur event occurs on the form
     */
    validate?: (value: T | any) => IFormErrors | Promise<any> | undefined;
    /**
     * Child component that will receive the form fields and submit handler
     */
    children: (state: IAutoFormState) => any;
}
export interface IAutoFormState {
    /**
     * Fragment containing all of the form fields
     */
    fields: JSX.Element;
    /**
     * Function to trigger a form submit which will then trigger onSave
     */
    handleSubmit: (e?: any) => void;
    isSubmitting: boolean;
    isValid: boolean;
    isValidating: boolean;
    resetForm: (nextValues?: any) => void;
    submitForm: () => void;
    values: any;
    errors: any;
}
export declare class AutoForm<T> extends React.Component<IAutoFormProps<T>, IAutoFormState> {
    render(): JSX.Element;
}
