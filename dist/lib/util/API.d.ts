import type { AsyncLock } from './asyncLock';
import type { FileMetadata } from '@staticcms/core';
export declare class FetchError extends Error {
    status: number;
    constructor(message: string, status: number);
}
interface API {
    rateLimiter?: AsyncLock;
    buildRequest: (req: ApiRequest) => ApiRequest | Promise<ApiRequest>;
    requestFunction?: (req: ApiRequest) => Promise<Response>;
}
export interface ApiRequestURL {
    url: string;
    params?: Record<string, string>;
}
export type ApiRequestObject = RequestInit & ApiRequestURL;
export type ApiRequest = ApiRequestObject | string;
export declare function requestWithBackoff(api: API, req: ApiRequest, attempt?: number): Promise<Response>;
export declare function readFile(id: string | null | undefined, fetchContent: () => Promise<string | Blob>, localForage: LocalForage, isText: boolean): Promise<string | Blob>;
export declare function readFileMetadata(id: string | null | undefined, fetchMetadata: () => Promise<FileMetadata>, localForage: LocalForage): Promise<FileMetadata>;
export declare function throwOnConflictingBranches(branchName: string, getBranch: (name: string) => Promise<{
    name: string;
}>, apiName: string): Promise<void>;
/**
 * Check a given status context string to determine if it provides a link to a
 * deploy preview. Checks for an exact match against `previewContext` if given,
 * otherwise checks for inclusion of a value from `PREVIEW_CONTEXT_KEYWORDS`.
 */
export declare function isPreviewContext(context: string, previewContext: string): boolean;
export declare enum PreviewState {
    Other = "other",
    Success = "success"
}
/**
 * Retrieve a deploy preview URL from an array of statuses. By default, a
 * matching status is inferred via `isPreviewContext`.
 */
export declare function getPreviewStatus(statuses: {
    context: string;
    target_url: string;
    state: PreviewState;
}[], previewContext: string): {
    context: string;
    target_url: string;
    state: PreviewState;
} | undefined;
export {};
