import type { DisplayURLState, MediaField, MediaFile } from '@staticcms/core';
import type { RootState } from '@staticcms/core/store';
export declare const selectMediaLibraryState: (state: RootState) => import("../mediaLibrary").MediaLibraryState;
export declare const selectMediaFiles: ((state: Omit<import("redux").EmptyObject & {
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
} & {
    collection: import("../collections").CollectionsState<import("@staticcms/core").BaseField>;
    config: import("../config").ConfigState<import("@staticcms/core").BaseField>;
}, field?: MediaField | undefined) => MediaFile[]) & import("reselect").OutputSelectorFields<(args_0: import("../mediaLibrary").MediaLibraryState, args_1: import("../entryDraft").EntryDraftState, args_2: import("../collections").CollectionsState<import("@staticcms/core").UnknownField>, args_3: import("@staticcms/core").ConfigWithDefaults<import("@staticcms/core").UnknownField> | undefined, args_4: MediaField | undefined) => MediaFile[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectMediaLibraryFiles: (state: RootState) => MediaFile[] | undefined;
export declare const selectMediaDisplayURL: ((state: Omit<import("redux").EmptyObject & {
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
}, id: string) => DisplayURLState) & import("reselect").OutputSelectorFields<(args_0: import("../mediaLibrary").MediaLibraryState, args_1: string) => DisplayURLState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectMediaPath: (state: RootState, controlID: string) => import("@staticcms/core").MediaPath<string | string[]>;
export declare const selectPersisting: (state: RootState) => boolean | undefined;
export declare const selectDeleting: (state: RootState) => boolean | undefined;
export declare const selectVisible: (state: RootState) => boolean;
