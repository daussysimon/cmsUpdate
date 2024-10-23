import type { I18nSettings } from '@staticcms/core';
import type { RootState } from '@staticcms/core/store';
export declare const getEntryDataPath: (i18n: I18nSettings | undefined, isMeta: boolean | undefined) => string[];
export declare const selectAllFieldErrors: (state: RootState) => import("@staticcms/core").FieldsErrors;
export declare const selectFieldErrors: ((state: Omit<import("redux").EmptyObject & {
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
}, _path: string, _i18n: I18nSettings | undefined, isMeta: boolean | undefined) => import("@staticcms/core").FieldError[]) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").FieldsErrors, args_1: string, args_2: I18nSettings | undefined, args_3: boolean | undefined) => import("@staticcms/core").FieldError[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare function selectEntryDraft(state: RootState): import("../entryDraft").EntryDraftState;
export declare function selectEditingDraft(state: RootState): import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue> | undefined;
export declare function selectDraftMediaFiles(state: RootState): import("@staticcms/core").MediaFile[] | undefined;
