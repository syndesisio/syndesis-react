import { IInitMessagePayload } from '@syndesis/atlasmap-assembly/src/app/app.component';
import * as React from 'react';
export declare enum DocumentType {
    JAVA = "Java",
    XML = "XML",
    XSD = "XSD",
    JSON = "JSON",
    CORE = "Core",
    CSV = "CSV",
    CONSTANT = "Constants",
    PROPERTY = "Property"
}
export declare enum InspectionType {
    JAVA_CLASS = "JAVA_CLASS",
    SCHEMA = "SCHEMA",
    INSTANCE = "INSTANCE",
    UNKNOWN = "UNKNOWN"
}
export interface IDataMapperAdapterProps extends IInitMessagePayload {
    onMappings(mappings: string): void;
}
export declare class DataMapperAdapter extends React.Component<IDataMapperAdapterProps> {
    protected messageChannel: MessageChannel;
    protected messagePort?: MessagePort;
    protected iframe: HTMLIFrameElement | null;
    constructor(props: IDataMapperAdapterProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: IDataMapperAdapterProps): void;
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    onIframeLoad(): void;
    onMessages(event: MessageEvent): void;
    updateDataMapperApp(props: IInitMessagePayload): void;
    render(): JSX.Element;
}
