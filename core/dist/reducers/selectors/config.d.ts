import type { ConfigWithDefaults } from '@staticcms/core';
import type { Workflow } from '@staticcms/core/constants/publishModes';
import type { RootState } from '@staticcms/core/store';
export declare function selectLocale(config?: ConfigWithDefaults): string;
export declare function selectConfig(state: RootState): ConfigWithDefaults<import("@staticcms/core").UnknownField> | undefined;
export declare function selectOriginConfig(state: RootState): import("@staticcms/core").Config<import("@staticcms/core").UnknownField> | undefined;
export declare function selectSearch(state: RootState): boolean | undefined;
export declare const selectIsSearchEnabled: ((state: Omit<import("redux").EmptyObject & {
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
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: boolean | undefined) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare function selectMediaLinkEnabled(state: RootState): boolean | undefined;
export declare const selectIsMediaLinkEnabled: ((state: Omit<import("redux").EmptyObject & {
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
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: boolean | undefined) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare function selectDisplayUrl(state: RootState): string | undefined;
export declare function getUseWorkflow(config?: ConfigWithDefaults): boolean;
export declare function selectPublishMode(state: RootState): Workflow | undefined;
export declare const selectUseWorkflow: ((state: Omit<import("redux").EmptyObject & {
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
}) => boolean) & import("reselect").OutputSelectorFields<(args_0: Workflow | undefined) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
