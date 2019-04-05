import * as React from 'react';
export interface IIntegrationEditorFormProps {
    /**
     * The internationalized title.
     */
    i18nTitle: string;
    /**
     * The internationalized subtitle.
     */
    i18nSubtitle: string;
    /**
     * The internationalized form title.
     */
    i18nFormTitle?: string;
    /**
     * The callback fired when submitting the form.
     * @param e
     */
    handleSubmit: (e?: any) => void;
}
/**
 * A component to render a save form, to be used in the integration
 * editor. This does *not* build the form itself, form's field should be passed
 * as the `children` value.
 * @see [i18nTitle]{@link IIntegrationEditorFormProps#i18nTitle}
 * @see [i18nSubtitle]{@link IIntegrationEditorFormProps#i18nSubtitle}
 */
export declare class IntegrationEditorForm extends React.Component<IIntegrationEditorFormProps> {
    render(): JSX.Element;
}
