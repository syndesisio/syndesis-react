import { IConfigurationProperty } from '@syndesis/models';
import * as React from 'react';
import { IFormDefinition } from './models';
export interface INamedConfigurationProperty extends IConfigurationProperty {
    name: string;
}
export interface IRenderFieldProps {
    property: INamedConfigurationProperty;
    value: any;
    [name: string]: any;
}
export interface IFormBuilderProps<T> {
    definition: IFormDefinition;
    initialValue: T;
    i18nRequiredProperty: string;
    onSave: (value: T | any, actions: any) => void;
    children(props: IFormBuilderState<T>): any;
}
export interface IFormBuilderState<T> {
    fields: INamedConfigurationProperty[];
    getField: (props: IRenderFieldProps) => any;
    initialValue: T;
    onSave: (value: T, actions: any) => void;
}
export declare class FormBuilder<T> extends React.Component<IFormBuilderProps<T>, IFormBuilderState<T>> {
    /**
     * Converts a property configuration to some kind of input field
     * @param props
     */
    getField: (props: IRenderFieldProps) => any;
    render(): any;
    /**
     * Ensure that the input values match the property definitions
     */
    private sanitizeValues;
    /**
     * Add the 'name' field from the property ID and sort them by the 'order' property
     */
    private enrichAndOrderProperties;
    /**
     * Converts various values passed into the property type to known input types
     *
     * @param property
     */
    private massageType;
    /**
     * Ensure that the 'required' property is false for checkboxes and hidden fields
     *
     * This is a candidate for removal in the future, as it's a workaround
     *
     * @param property
     */
    private massageRequired;
    /**
     * Converts the given value from a string to the type defined in the property definition
     *
     * This is a candidate for removal as it's a workaround
     *
     * @param property
     * @param value
     */
    private massageValue;
}
