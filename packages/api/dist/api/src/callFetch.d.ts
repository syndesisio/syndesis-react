export interface IFetchHeaders {
    [s: string]: string;
}
export interface IFetch {
    url: string;
    method: 'GET' | 'PUT' | 'POST' | 'DELETE';
    headers?: IFetchHeaders;
    body?: any;
    /**
     * Indicates if the content type should be included in the headers. Defaults to `true`. When using a
     * content type of 'multipart/form-data' this should be set to `false` but you still need to set the
     * content type.
     */
    includeContentType?: boolean;
    /**
     * Defaults to 'application/json; charset=utf-8' if not set.
     */
    contentType?: string;
    /**
     * Indicates if 'accept' should be included in the headers. Defaults to `true`.
     */
    includeAccept?: boolean;
    /**
     * Defaults to 'application/json,text/plain,*&#47*' if not set.
     */
    accept?: string;
    /**
     * Indicates if a 'Referer Policy' of 'no-referrer' should be included.
     */
    includeReferrerPolicy?: boolean;
}
export declare function callFetch({ url, method, headers, body, includeContentType, contentType, includeAccept, accept, includeReferrerPolicy, }: IFetch): Promise<Response>;
