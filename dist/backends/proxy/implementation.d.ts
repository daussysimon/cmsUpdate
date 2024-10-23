/// <reference types="react" />
import type { BackendClass, BackendEntry, ConfigWithDefaults, DisplayURL, ImplementationEntry, ImplementationFile, ImplementationMediaFile, PersistOptions, UnpublishedEntry, User } from '@staticcms/core';
import type { Cursor } from '@staticcms/core/lib/util';
import type AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
export default class ProxyBackend implements BackendClass {
    proxyUrl: string;
    mediaFolder?: string;
    publicFolder?: string;
    options: {};
    branch: string;
    cmsLabelPrefix?: string;
    constructor(config: ConfigWithDefaults, options?: {});
    status(): Promise<{
        auth: {
            status: boolean;
        };
        api: {
            status: boolean;
            statusPage: string;
        };
    }>;
    authComponent(): import("react").FC<import("@staticcms/core").AuthenticationPageProps>;
    restoreUser(): Promise<User>;
    authenticate(): Promise<User>;
    logout(): null;
    getToken(): Promise<string>;
    request<T>(payload: {
        action: string;
        params: Record<string, unknown>;
    }): Promise<T>;
    entriesByFolder(folder: string, extension: string, depth: number): Promise<ImplementationEntry[]>;
    entriesByFiles(files: ImplementationFile[]): Promise<ImplementationEntry[]>;
    getEntry(path: string): Promise<ImplementationEntry>;
    persistEntry(entry: BackendEntry, options: PersistOptions): Promise<void>;
    getMedia(mediaFolder?: string | undefined, folderSupport?: boolean, publicFolder?: string | undefined): Promise<{
        id: string;
        name: string;
        displayURL: {
            id: string;
            path: string;
        };
        path: string;
        isDirectory: boolean;
    }[]>;
    getMediaFile(path: string): Promise<ImplementationMediaFile>;
    getMediaDisplayURL(displayURL: DisplayURL): Promise<string>;
    persistMedia(assetProxy: AssetProxy, options: PersistOptions): Promise<{
        id: string;
        name: string;
        path: string;
        file: File;
        size: number;
        url: string;
        displayURL: string;
    }>;
    deleteFiles(paths: string[], commitMessage: string): Promise<unknown>;
    traverseCursor(): Promise<{
        entries: ImplementationEntry[];
        cursor: Cursor;
    }>;
    allEntriesByFolder(folder: string, extension: string, depth: number): Promise<ImplementationEntry[]>;
    unpublishedEntries(): Promise<string[]>;
    unpublishedEntry({ id, collection, slug, }: {
        id?: string;
        collection?: string;
        slug?: string;
    }): Promise<UnpublishedEntry>;
    unpublishedEntryDataFile(collection: string, slug: string, path: string, id: string): Promise<string>;
    unpublishedEntryMediaFile(collection: string, slug: string, path: string, id: string): Promise<{
        id: string;
        name: string;
        path: string;
        file: File;
        size: number;
        url: string;
        displayURL: string;
    }>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: string): Promise<void>;
    publishUnpublishedEntry(collection: string, slug: string): Promise<void>;
    deleteUnpublishedEntry(collection: string, slug: string): Promise<void>;
    getDeployPreview(collection: string, slug: string): Promise<{
        url: string;
        status: string;
    } | null>;
}
