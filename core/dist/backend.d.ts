/// <reference types="react" />
import { WorkflowStatus } from './constants/publishModes';
import { Cursor } from './lib/util';
import type { BackendClass, BackendInitializer, BaseField, CollectionWithDefaults, CollectionsWithDefaults, ConfigWithDefaults, Credentials, DisplayURL, Entry, EntryData, EventData, FilterRule, ImplementationEntry, MediaField, ObjectValue, PersistArgs, SearchQueryResponse, SearchResponse, UnknownField, UnpublishedEntry, User } from './interface';
import type { AsyncLock } from './lib/util';
import type { RootState } from './store';
import type AssetProxy from './valueObjects/AssetProxy';
export declare class LocalStorageAuthStore {
    storageKey: string;
    retrieve(): any;
    store(userData: unknown): void;
    logout(): void;
}
export declare function getEntryField(field: string, entry: Entry): string;
export declare function extractSearchFields(searchFields: string[]): (entry: Entry) => string;
export declare function expandSearchEntries(entries: Entry[], searchFields: string[]): (Entry & {
    field: string;
})[];
export declare function mergeExpandedEntries(entries: (Entry & {
    field: string;
})[]): Entry[];
interface AuthStore {
    retrieve: () => User;
    store: (user: User) => void;
    logout: () => void;
}
interface BackendOptions<EF extends BaseField> {
    backendName: string;
    config: ConfigWithDefaults<EF>;
    authStore?: AuthStore;
}
export interface MediaFile {
    name: string;
    id: string;
    size?: number;
    displayURL?: DisplayURL;
    path: string;
    draft?: boolean;
    url?: string;
    file?: File;
    field?: MediaField;
    queryOrder?: unknown;
    isViewableImage?: boolean;
    type?: string;
    isDirectory?: boolean;
}
export declare class Backend<EF extends BaseField = UnknownField, BC extends BackendClass = BackendClass> {
    implementation: BC;
    backendName: string;
    config: ConfigWithDefaults<EF>;
    authStore?: AuthStore;
    user?: User | null;
    backupSync: AsyncLock;
    constructor(implementation: BackendInitializer<EF>, { backendName, authStore, config }: BackendOptions<EF>);
    status(): Promise<{
        auth: {
            status: boolean;
        };
        api: {
            status: boolean;
            statusPage: string;
        };
    }>;
    currentUser(): User | Promise<User> | Promise<null>;
    updateUserCredentials: (updatedCredentials: Credentials) => User | undefined;
    authComponent(): import("react").FC<import("./interface").AuthenticationPageProps>;
    authenticate(credentials: Credentials): Promise<User>;
    logout(): Promise<void>;
    getToken: () => Promise<string | null>;
    entryExist(collection: CollectionWithDefaults, path: string, slug: string, useWorkflow: boolean): Promise<string | boolean | UnpublishedEntry>;
    generateUniqueSlug(collection: CollectionWithDefaults, entry: Entry, config: ConfigWithDefaults, usedSlugs: string[], customPath: string | undefined): Promise<string>;
    processEntries<EF extends BaseField>(loadedEntries: ImplementationEntry[], collection: CollectionWithDefaults<EF>, config: ConfigWithDefaults<EF>): Entry[];
    listEntries(collection: CollectionWithDefaults, config: ConfigWithDefaults): Promise<{
        entries: Entry<ObjectValue>[];
        pagination: unknown;
        cursor: Cursor;
    }>;
    backendPromise: Record<string, {
        expires: number;
        data?: Entry[];
        promise?: Promise<Entry[]>;
    }>;
    listAllEntriesExecutor<EF extends BaseField>(collection: CollectionWithDefaults<EF>, config: ConfigWithDefaults<EF>): Promise<Entry[]>;
    listAllEntries<EF extends BaseField>(collection: CollectionWithDefaults<EF>, config: ConfigWithDefaults<EF>): Promise<Entry[]>;
    printError(error: Error): string;
    search(collections: CollectionWithDefaults[], searchTerm: string, config: ConfigWithDefaults): Promise<SearchResponse>;
    query<EF extends BaseField>(collection: CollectionWithDefaults<EF>, config: ConfigWithDefaults<EF>, searchFields: string[], searchTerm: string, file?: string, limit?: number): Promise<SearchQueryResponse>;
    traverseCursor(cursor: Cursor, action: string, config: ConfigWithDefaults): Promise<{
        entries: Entry[];
        cursor: Cursor;
    }>;
    getLocalDraftBackup(collection: CollectionWithDefaults, config: ConfigWithDefaults, slug: string): Promise<{
        entry: Entry | null;
    }>;
    persistLocalDraftBackup(entry: Entry, collection: CollectionWithDefaults, config: ConfigWithDefaults): Promise<string | undefined>;
    deleteLocalDraftBackup(collection: CollectionWithDefaults, slug: string): Promise<void>;
    deleteAnonymousBackup(): Promise<void>;
    getEntry<EF extends BaseField>(state: RootState<EF>, collection: CollectionWithDefaults<EF>, config: ConfigWithDefaults<EF>, slug: string): Promise<Entry<ObjectValue>>;
    getMedia(folder?: string | undefined, folderSupport?: boolean, mediaPath?: string | undefined): Promise<import("./interface").ImplementationMediaFile[]>;
    getMediaFile(path: string): Promise<import("./interface").ImplementationMediaFile>;
    getMediaDisplayURL(displayURL: DisplayURL): Promise<string>;
    entryWithFormat<EF extends BaseField>(collection: CollectionWithDefaults<EF>, config: ConfigWithDefaults<EF>): (entry: Entry) => Entry;
    processEntry<EF extends BaseField>(state: RootState<EF>, collection: CollectionWithDefaults<EF>, entry: Entry): Promise<Entry<ObjectValue>>;
    persistEntry({ config, rootSlug, collection, entryDraft: draft, assetProxies, usedSlugs, unpublished, status, }: PersistArgs): Promise<string>;
    getEventData(entry: Entry): Promise<EventData>;
    invokePrePublishEvent(entry: Entry, collection: CollectionWithDefaults): Promise<void>;
    invokePostPublishEvent(entry: Entry, collection: CollectionWithDefaults): Promise<void>;
    invokePreSaveEvent(entry: Entry, collection: CollectionWithDefaults): Promise<EntryData>;
    invokePostSaveEvent(entry: Entry, collection: CollectionWithDefaults): Promise<void>;
    persistMedia(config: ConfigWithDefaults, file: AssetProxy): Promise<import("./interface").ImplementationMediaFile>;
    deleteEntry<EF extends BaseField>(state: RootState<EF>, collection: CollectionWithDefaults<EF>, slug: string): Promise<void>;
    deleteMedia(config: ConfigWithDefaults, path: string): Promise<unknown>;
    entryToRaw(collection: CollectionWithDefaults, entry: Entry, config: ConfigWithDefaults): string;
    fieldsOrder(collection: CollectionWithDefaults, entry: Entry): string[];
    filterEntries(collection: {
        entries: Entry[];
    }, filterRule: FilterRule | FilterRule[]): Entry<ObjectValue>[];
    /**
     * Editorial Workflows
     */
    processUnpublishedEntry(collection: CollectionWithDefaults, config: ConfigWithDefaults, entryData: UnpublishedEntry, withMediaFiles: boolean): Promise<Entry<ObjectValue>>;
    unpublishedEntries(collections: CollectionsWithDefaults, config: ConfigWithDefaults): Promise<{
        pagination: number;
        entries: Entry<ObjectValue>[];
    }>;
    unpublishedEntry(state: RootState, collection: CollectionWithDefaults, config: ConfigWithDefaults, slug: string): Promise<Entry<ObjectValue>>;
    persistUnpublishedEntry(args: PersistArgs): Promise<string>;
    updateUnpublishedEntryStatus(collection: string, slug: string, newStatus: WorkflowStatus): Promise<void>;
    deleteUnpublishedEntry(collection: string, slug: string): Promise<void>;
    publishUnpublishedEntry(collection: CollectionWithDefaults, entry: Entry): Promise<void>;
}
export declare function resolveBackend<EF extends BaseField>(config?: ConfigWithDefaults<EF>): Backend<EF, BackendClass>;
export declare const currentBackend: <EF extends BaseField = UnknownField>(config: ConfigWithDefaults<EF>) => Backend<UnknownField, BackendClass>;
export {};
