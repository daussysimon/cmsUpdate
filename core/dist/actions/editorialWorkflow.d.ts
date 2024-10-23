import { WorkflowStatus } from '../constants/publishModes';
import type { NavigateFunction } from 'react-router-dom';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';
import type { CollectionWithDefaults, CollectionsWithDefaults, Entry } from '../interface';
import type { RootState } from '../store';
declare function unpublishedEntryLoading(collection: CollectionWithDefaults, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_REQUEST";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryLoaded(collection: CollectionWithDefaults, entry: Entry): {
    readonly type: "UNPUBLISHED_ENTRY_SUCCESS";
    readonly payload: {
        readonly collection: string;
        readonly entry: Entry<import("../interface").ObjectValue>;
    };
};
declare function unpublishedEntryRedirected(collection: CollectionWithDefaults, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_REDIRECT";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntriesLoading(): {
    readonly type: "UNPUBLISHED_ENTRIES_REQUEST";
};
declare function unpublishedEntriesLoaded(entries: Entry[], pagination: number): {
    readonly type: "UNPUBLISHED_ENTRIES_SUCCESS";
    readonly payload: {
        readonly entries: Entry<import("../interface").ObjectValue>[];
        readonly pages: number;
    };
};
declare function unpublishedEntriesFailed(error: Error): {
    readonly type: "UNPUBLISHED_ENTRIES_FAILURE";
    readonly error: "Failed to load entries";
    readonly payload: Error;
};
declare function unpublishedEntryPersisting(collection: CollectionWithDefaults, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_PERSIST_REQUEST";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryPersisted(collection: CollectionWithDefaults, entry: Entry): {
    readonly type: "UNPUBLISHED_ENTRY_PERSIST_SUCCESS";
    readonly payload: {
        readonly collection: string;
        readonly entry: Entry<import("../interface").ObjectValue>;
        readonly slug: string;
    };
};
declare function unpublishedEntryPersistedFail(error: unknown, collection: CollectionWithDefaults, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_PERSIST_FAILURE";
    readonly payload: {
        readonly error: unknown;
        readonly collection: string;
        readonly slug: string;
    };
    readonly error: unknown;
};
declare function unpublishedEntryStatusChangeRequest(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_STATUS_CHANGE_REQUEST";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryStatusChangePersisted(collection: string, slug: string, newStatus: WorkflowStatus): {
    readonly type: "UNPUBLISHED_ENTRY_STATUS_CHANGE_SUCCESS";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
        readonly newStatus: WorkflowStatus;
    };
};
declare function unpublishedEntryStatusChangeError(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_STATUS_CHANGE_FAILURE";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryPublishRequest(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_PUBLISH_REQUEST";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryPublished(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_PUBLISH_SUCCESS";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryPublishError(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_PUBLISH_FAILURE";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryDeleteRequest(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_DELETE_REQUEST";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryDeleted(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_DELETE_SUCCESS";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
declare function unpublishedEntryDeleteError(collection: string, slug: string): {
    readonly type: "UNPUBLISHED_ENTRY_DELETE_FAILURE";
    readonly payload: {
        readonly collection: string;
        readonly slug: string;
    };
};
export declare function loadUnpublishedEntry(collection: CollectionWithDefaults, slug: string): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => Promise<void>;
export declare function loadUnpublishedEntries(collections: CollectionsWithDefaults): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => void;
export declare function persistUnpublishedEntry(collection: CollectionWithDefaults, rootSlug: string | undefined, existingUnpublishedEntry: boolean, navigate: NavigateFunction): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => Promise<undefined>;
export declare function updateUnpublishedEntryStatus(collection: string, slug: string, oldStatus: WorkflowStatus, newStatus: WorkflowStatus): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => void;
export declare function deleteUnpublishedEntry(collection: string, slug: string): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => Promise<void> | undefined;
export declare function publishUnpublishedEntry(collectionName: string, slug: string, navigate?: NavigateFunction): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => Promise<void>;
export declare function unpublishPublishedEntry(collection: CollectionWithDefaults, slug: string): (dispatch: ThunkDispatch<RootState, {}, AnyAction>, getState: () => RootState) => Promise<void> | undefined;
export type EditorialWorkflowAction = ReturnType<typeof unpublishedEntryLoading | typeof unpublishedEntryLoaded | typeof unpublishedEntryRedirected | typeof unpublishedEntriesLoading | typeof unpublishedEntriesLoaded | typeof unpublishedEntriesFailed | typeof unpublishedEntryPersisting | typeof unpublishedEntryPersisted | typeof unpublishedEntryPersistedFail | typeof unpublishedEntryStatusChangeRequest | typeof unpublishedEntryStatusChangePersisted | typeof unpublishedEntryStatusChangeError | typeof unpublishedEntryPublishRequest | typeof unpublishedEntryPublished | typeof unpublishedEntryPublishError | typeof unpublishedEntryDeleteRequest | typeof unpublishedEntryDeleted | typeof unpublishedEntryDeleteError>;
export {};
