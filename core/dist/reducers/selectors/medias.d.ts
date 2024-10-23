import type { RootState } from '@staticcms/core/store';
export declare function selectMedias(state: RootState): import("../medias").MediasState;
export declare const selectIsLoadingAsset: ((state: Omit<import("redux").EmptyObject & {
    snackbar: import("../../store/slices/snackbars").SnackbarState;
    auth: import("../auth").AuthState;
    collections: import("../collections").CollectionsState<import("../..").UnknownField>;
    config: import("../config").ConfigState<import("../..").UnknownField>;
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
    collection: import("../collections").CollectionsState<import("../..").UnknownField>;
    config: import("../config").ConfigState<import("../..").UnknownField>;
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../medias").MediasState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
