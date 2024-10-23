/// <reference types="react" />
/// <reference types="@staticcms/core/types/semaphore" />
import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import API from './API';
import type { BackendClass, BackendEntry, ConfigWithDefaults, Credentials, DisplayURL, ImplementationFile, PersistOptions, UnpublishedEntry, UnpublishedEntryMediaFile, User } from '@staticcms/core';
import type { AsyncLock, Cursor } from '@staticcms/core/lib/util';
import type AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
import type { Semaphore } from 'semaphore';
export default class GitLab implements BackendClass {
    lock: AsyncLock;
    api: API | null;
    options: {
        proxied: boolean;
        API: API | null;
        initialWorkflowStatus: WorkflowStatus;
    };
    repo: string;
    branch: string;
    useOpenAuthoring?: boolean;
    apiRoot: string;
    token: string | null;
    squashMerges: boolean;
    cmsLabelPrefix: string;
    mediaFolder?: string;
    previewContext: string;
    _mediaDisplayURLSem?: Semaphore;
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
    restoreUser(user: User): Promise<any>;
    authenticate(state: Credentials): Promise<any>;
    logout(): Promise<void>;
    getToken(): Promise<string | null>;
    filterFile(folder: string, file: {
        path: string;
        name: string;
    }, extension: string, depth: number): boolean;
    entriesByFolder(folder: string, extension: string, depth: number): Promise<import("@staticcms/core").ImplementationEntry[]>;
    listAllFiles(folder: string, extension: string, depth: number): Promise<{
        id: string;
        type: string;
        path: string;
        name: string;
    }[]>;
    allEntriesByFolder(folder: string, extension: string, depth: number): Promise<import("@staticcms/core").ImplementationEntry[]>;
    entriesByFiles(files: ImplementationFile[]): Promise<import("@staticcms/core").ImplementationEntry[]>;
    getEntry(path: string): Promise<{
        file: {
            path: string;
            id: null;
        };
        data: string;
    }>;
    getMedia(mediaFolder?: string | undefined, folderSupport?: boolean): Promise<{
        id: string;
        name: string;
        path: string;
        displayURL: {
            id: string;
            name: string;
            path: string;
        };
        isDirectory: boolean;
    }[]>;
    getMediaDisplayURL(displayURL: DisplayURL): Promise<string>;
    getMediaFile(path: string): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
        url: string;
    }>;
    persistEntry(entry: BackendEntry, options: PersistOptions): Promise<any>;
    persistMedia(mediaFile: AssetProxy, options: PersistOptions): Promise<{
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
        url: string;
        id: string;
    }>;
    deleteFiles(paths: string[], commitMessage: string): Promise<any>;
    traverseCursor(cursor: Cursor, action: string): Promise<{
        entries: import("@staticcms/core").ImplementationEntry[];
        cursor: Cursor;
    }>;
    /**
     * Editorial Workflow
     */
    unpublishedEntries(): Promise<string[]>;
    unpublishedEntry({ id, collection, slug, }: {
        id?: string;
        collection?: string;
        slug?: string;
    }): Promise<UnpublishedEntry>;
    getBranch(collection: string, slug: string): string;
    unpublishedEntryDataFile(collection: string, slug: string, path: string, id: string): Promise<string>;
    unpublishedEntryMediaFile(collection: string, slug: string, path: string, id: string): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
    }>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: WorkflowStatus): Promise<any>;
    deleteUnpublishedEntry(collection: string, slug: string): Promise<any>;
    publishUnpublishedEntry(collection: string, slug: string): Promise<any>;
    getDeployPreview(collection: string, slug: string): Promise<{
        url: string;
        status: import("@staticcms/core/lib/util/API").PreviewState;
    } | null>;
    loadMediaFile(branch: string, file: UnpublishedEntryMediaFile): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
    }>;
}
