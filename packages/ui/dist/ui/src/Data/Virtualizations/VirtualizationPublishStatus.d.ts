import * as React from 'react';
import { VirtualizationPublishState } from './models';
export interface IVirtualizationPublishStatusProps {
    currentState?: VirtualizationPublishState;
    i18nPublished: string;
    i18nUnpublished: string;
    i18nError: string;
}
export declare class VirtualizationPublishStatus extends React.Component<IVirtualizationPublishStatusProps> {
    render(): JSX.Element;
}
