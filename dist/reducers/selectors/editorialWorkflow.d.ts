import type { WorkflowStatus } from '@staticcms/core/constants/publishModes';
import type { Entry } from '@staticcms/core';
import type { RootState } from '@staticcms/core/store';
export declare const selectUnpublishedEntries: (state: RootState) => import("@staticcms/core").Entries;
export declare const selectUnpublishedEntry: ((state: Omit<import("redux").EmptyObject & {
    snackbar: import("../../store/slices/snackbars").SnackbarState;
    auth: import("../auth").AuthState;
    collections: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>;
    config: import("../config").ConfigState<import("@staticcms/core").UnknownField>;
    cursors: import("../cursors").CursorsState;
    editorialWorkflow: import("../editorialWorkflow").EditorialWorkflowState;
    entries: import("../entries").EntriesState;
    entryDraft: import("../entryDraft").EntryDraftState;
    globalUI: import("../globalUI").GlobalUIState;
    mediaLibrary: import("../mediaLibrary").MediaLibraryState;
    medias: import("../medias").MediasState;
    scroll: import("../scroll").ScrollState;
    search: import("../search").SearchState;
    status: import("../status").StatusState;
}, "config" | "collection"> & {
    collection: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>;
    config: import("../config").ConfigState<import("@staticcms/core").UnknownField>;
}, _collectionName: string, slug: string | undefined) => Entry<import("@staticcms/core").ObjectValue> | undefined) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").Entries, args_1: string, args_2: string | undefined) => Entry<import("@staticcms/core").ObjectValue> | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectUnpublishedEntriesByStatus: ((state: Omit<import("redux").EmptyObject & {
    snackbar: import("../../store/slices/snackbars").SnackbarState;
    auth: import("../auth").AuthState;
    collections: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>;
    config: import("../config").ConfigState<import("@staticcms/core").UnknownField>;
    cursors: import("../cursors").CursorsState;
    editorialWorkflow: import("../editorialWorkflow").EditorialWorkflowState;
    entries: import("../entries").EntriesState;
    entryDraft: import("../entryDraft").EntryDraftState;
    globalUI: import("../globalUI").GlobalUIState;
    mediaLibrary: import("../mediaLibrary").MediaLibraryState;
    medias: import("../medias").MediasState;
    scroll: import("../scroll").ScrollState;
    search: import("../search").SearchState;
    status: import("../status").StatusState;
}, "config" | "collection"> & {
    collection: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>;
    config: import("../config").ConfigState<import("@staticcms/core").UnknownField>;
}, status: WorkflowStatus) => Entry<import("@staticcms/core").ObjectValue>[]) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").Entries, args_1: WorkflowStatus) => Entry<import("@staticcms/core").ObjectValue>[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectUnpublishedSlugs: ((state: Omit<import("redux").EmptyObject & {
    snackbar: import("../../store/slices/snackbars").SnackbarState;
    auth: import("../auth").AuthState;
    collections: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>;
    config: import("../config").ConfigState<import("@staticcms/core").UnknownField>;
    cursors: import("../cursors").CursorsState;
    editorialWorkflow: import("../editorialWorkflow").EditorialWorkflowState;
    entries: import("../entries").EntriesState;
    entryDraft: import("../entryDraft").EntryDraftState;
    globalUI: import("../globalUI").GlobalUIState;
    mediaLibrary: import("../mediaLibrary").MediaLibraryState;
    medias: import("../medias").MediasState;
    scroll: import("../scroll").ScrollState;
    search: import("../search").SearchState;
    status: import("../status").StatusState;
}, "config" | "collection"> & {
    collection: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>;
    config: import("../config").ConfigState<import("@staticcms/core").UnknownField>;
}, collectionName: string) => string[]) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").Entries, args_1: string) => string[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
