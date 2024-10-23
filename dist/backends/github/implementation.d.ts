/// <reference types="react" />
/// <reference types="@staticcms/core/types/semaphore" />
import { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import { Cursor } from '@staticcms/core/lib/util';
import API from './API';
import type { AuthScheme, BackendClass, BackendEntry, ConfigWithDefaults, Credentials, DisplayURL, ImplementationFile, PersistOptions, UnpublishedEntry, UnpublishedEntryMediaFile, User } from '@staticcms/core';
import type { AsyncLock } from '@staticcms/core/lib/util';
import type AssetProxy from '@staticcms/core/valueObjects/AssetProxy';
import type { Semaphore } from 'semaphore';
import type { GitHubUser } from './types';
type ApiFile = {
    id: string;
    type: string;
    name: string;
    path: string;
    size: number;
};
export default class GitHub implements BackendClass {
    lock: AsyncLock;
    api: API | null;
    options: {
        proxied: boolean;
        API: API | null;
        useWorkflow?: boolean;
        initialWorkflowStatus: WorkflowStatus;
    };
    originRepo: string;
    repo?: string;
    openAuthoringEnabled: boolean;
    useOpenAuthoring?: boolean;
    alwaysForkEnabled: boolean;
    branch: string;
    apiRoot: string;
    mediaFolder?: string;
    previewContext: string;
    token: string | null;
    authScheme: AuthScheme;
    squashMerges: boolean;
    cmsLabelPrefix: string;
    _currentUserPromise?: Promise<GitHubUser>;
    _userIsOriginMaintainerPromises?: {
        [key: string]: Promise<boolean>;
    };
    _mediaDisplayURLSem?: Semaphore;
    constructor(config: ConfigWithDefaults, options?: {});
    status(): Promise<{
        auth: {
            status: boolean;
        };
        api: {
            status: any;
            statusPage: string;
        };
    }>;
    authComponent(): import("react").FC<import("@staticcms/core").AuthenticationPageProps>;
    restoreUser(user: User): Promise<{
        token: string;
        useOpenAuthoring: boolean | undefined;
        name: string;
        login: string;
    }>;
    pollUntilForkExists({ repo, token }: {
        repo: string;
        token: string;
    }): Promise<void>;
    currentUser({ token }: {
        token: string;
    }): Promise<GitHubUser>;
    userIsOriginMaintainer({ username: usernameArg, token, }: {
        username?: string;
        token: string;
    }): Promise<boolean>;
    forkExists({ token }: {
        token: string;
    }): Promise<any>;
    authenticateWithFork({ userData, getPermissionToFork, }: {
        userData: User;
        getPermissionToFork: () => Promise<boolean> | boolean;
    }): Promise<void>;
    authenticate(state: Credentials): Promise<{
        token: string;
        useOpenAuthoring: boolean | undefined;
        name: string;
        login: string;
    }>;
    logout(): void;
    getToken(): Promise<string | null>;
    getCursorAndFiles: (files: ApiFile[], page: number) => {
        cursor: Cursor;
        files: ApiFile[];
    };
    entriesByFolder(folder: string, extension: string, depth: number): Promise<import("@staticcms/core").ImplementationEntry[]>;
    allEntriesByFolder(folder: string, extension: string, depth: number, pathRegex?: RegExp): Promise<import("@staticcms/core").ImplementationEntry[]>;
    entriesByFiles(files: ImplementationFile[]): Promise<import("@staticcms/core").ImplementationEntry[]>;
    getEntry(path: string): Promise<{
        file: {
            path: string;
            id: null;
        };
        data: string;
    } | {
        file: {
            path: string;
            id: null;
        };
        data: string;
    }>;
    getMedia(mediaFolder?: string | undefined, folderSupport?: boolean): Promise<{
        id: string;
        name: string;
        size: number;
        displayURL: {
            id: string;
            path: string;
        };
        path: string;
        isDirectory: boolean;
    }[]>;
    getMediaFile(path: string): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
        url: string;
    }>;
    getMediaDisplayURL(displayURL: DisplayURL): Promise<string>;
    persistEntry(entry: BackendEntry, options: PersistOptions): Promise<any>;
    persistMedia(mediaFile: AssetProxy, options: PersistOptions): Promise<{
        id: string;
        name: string;
        size: number;
        displayURL: string;
        path: string;
    }>;
    deleteFiles(paths: string[], commitMessage: string): Promise<undefined>;
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
    getDeployPreview(collection: string, slug: string): Promise<{
        url: string;
        status: import("@staticcms/core/lib/util/API").PreviewState;
    } | null>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: WorkflowStatus): Promise<any>;
    deleteUnpublishedEntry(collection: string, slug: string): Promise<any>;
    publishUnpublishedEntry(collection: string, slug: string): Promise<any>;
    loadMediaFile(branch: string, file: UnpublishedEntryMediaFile): Promise<{
        id: string;
        displayURL: string;
        path: string;
        name: string;
        size: number;
        file: File;
    }>;
}
export {};
