import type { BaseField, CollectionWithDefaults, UnknownField } from '@staticcms/core';
import type { RootState } from '@staticcms/core/store';
export declare const selectCollections: <EF extends BaseField = UnknownField>(state: RootState<EF>) => import("../collections").CollectionsState<UnknownField>;
export declare const selectCollection: ((state: Omit<import("redux").EmptyObject & {
    snackbar: import("../../store/slices/snackbars").SnackbarState;
    auth: import("../auth").AuthState;
    collections: import("../collections").CollectionsState<UnknownField>;
    config: import("../config").ConfigState<UnknownField>;
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
    collection: import("../collections").CollectionsState<BaseField>;
    config: import("../config").ConfigState<BaseField>;
} & {
    collection: import("../collections").CollectionsState<UnknownField>;
    config: import("../config").ConfigState<UnknownField>;
}, collectionName: string | undefined) => CollectionWithDefaults | undefined) & import("reselect").OutputSelectorFields<(args_0: import("../collections").CollectionsState<UnknownField>, args_1: string | undefined) => CollectionWithDefaults | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
