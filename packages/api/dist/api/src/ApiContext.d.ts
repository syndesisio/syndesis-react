import * as React from 'react';
export interface IApiContext {
    apiUri: string;
    dvApiUri: string;
    headers: {
        [name: string]: string;
    };
}
export declare const ApiContextDefaultValue: IApiContext;
export declare const ApiContext: React.Context<IApiContext>;
