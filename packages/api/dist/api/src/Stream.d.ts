import { Fetch, IFetchProps } from './Fetch';
export declare class Stream extends Fetch<string[]> {
    protected reader: ReadableStreamReader | undefined;
    componentDidUpdate(prevProps: IFetchProps<string[]>): Promise<void>;
    componentWillUnmount(): void;
    read: () => Promise<void>;
    onSave: () => Promise<never>;
}
