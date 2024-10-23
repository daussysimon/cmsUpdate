/// <reference types="react" />
import { Cursor } from '@staticcms/core/lib/util';
import AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
import type { BackendClass, BackendEntry, ConfigWithDefaults, DataFile, DisplayURL, ImplementationEntry, ImplementationFile, ImplementationMediaFile, PersistOptions, UnpublishedEntry, User } from '@staticcms/core';
import type { WorkflowStatus } from '@staticcms/core/constants/publishModes';
type RepoFile = {
    path: string;
    content: string | AssetProxy;
    isDirectory?: boolean;
};
type RepoTree = {
    [key: string]: RepoFile | RepoTree;
};
type Diff = {
    id: string;
    originalPath?: string;
    path: string;
    newFile: boolean;
    status: string;
    content: string | AssetProxy;
};
type UnpublishedRepoEntry = {
    slug: string;
    collection: string;
    status: WorkflowStatus;
    diffs: Diff[];
    updatedAt: string;
};
declare global {
    interface Window {
        repoFiles: RepoTree;
        repoFilesUnpublished: {
            [key: string]: UnpublishedRepoEntry;
        };
    }
}
export declare function getFolderFiles(tree: RepoTree, folder: string, extension: string, depth: number, files?: RepoFile[], path?: string, includeFolders?: boolean): RepoFile[];
export default class TestBackend implements BackendClass {
    mediaFolder?: string;
    options: {
        initialWorkflowStatus?: string;
    };
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
    traverseCursor(cursor: Cursor, action: string): Promise<{
        entries: {
            data: string;
            file: {
                path: string;
                id: string;
            };
        }[];
        cursor: Cursor;
    }>;
    entriesByFolder(folder: string, extension: string, depth: number): Promise<{
        data: string;
        file: {
            path: string;
            id: string;
        };
    }[]>;
    entriesByFiles(files: ImplementationFile[]): Promise<{
        file: ImplementationFile;
        data: string;
    }[]>;
    getEntry(path: string): Promise<{
        file: {
            path: string;
            id: null;
        };
        data: string;
    }>;
    persistEntry(entry: BackendEntry, options: PersistOptions): Promise<void>;
    getMedia(mediaFolder?: string | undefined, folderSupport?: boolean): Promise<ImplementationMediaFile[]>;
    getMediaFile(path: string): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        url: string;
    }>;
    normalizeAsset(assetProxy: AssetProxy): ImplementationMediaFile;
    persistMedia(assetProxy: AssetProxy): Promise<ImplementationMediaFile>;
    deleteFiles(paths: string[]): Promise<void>;
    allEntriesByFolder(folder: string, extension: string, depth: number): Promise<ImplementationEntry[]>;
    getMediaDisplayURL(_displayURL: DisplayURL): Promise<string>;
    /**
     * Editorial Workflow
     */
    unpublishedEntries(): Promise<string[]>;
    unpublishedEntry({ id, collection, slug, }: {
        id?: string;
        collection?: string;
        slug?: string;
    }): Promise<UnpublishedEntry>;
    unpublishedEntryDataFile(collection: string, slug: string, path: string): Promise<string>;
    unpublishedEntryMediaFile(collection: string, slug: string, path: string): Promise<ImplementationMediaFile>;
    deleteUnpublishedEntry(collection: string, slug: string): Promise<void>;
    addOrUpdateUnpublishedEntry(key: string, dataFiles: DataFile[], assetProxies: AssetProxy[], slug: string, collection: string, status: WorkflowStatus): Promise<void>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: WorkflowStatus): Promise<void>;
    publishUnpublishedEntry(collection: string, slug: string): Promise<void>;
    getDeployPreview(): Promise<null>;
}
export {};
