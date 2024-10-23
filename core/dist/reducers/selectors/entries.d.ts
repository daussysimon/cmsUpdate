import type { Entries, Entry, GroupMap, ObjectValue, Page, SortMap, SortObject } from '@staticcms/core';
import type { ViewStyle } from '@staticcms/core/constants/views';
import type { RootState } from '@staticcms/core/store';
export declare const selectEntriesFilters: (entries: RootState) => import("@staticcms/core").Filter | undefined;
export declare const selectEntriesFilter: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName?: string | undefined) => Record<string, import("@staticcms/core").FilterMap>) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").Filter | undefined, args_1: string | undefined) => Record<string, import("@staticcms/core").FilterMap>, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectEntriesGroups: (entries: RootState) => import("@staticcms/core").Group | undefined;
export declare const selectEntriesGroup: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName?: string | undefined) => Record<string, GroupMap>) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").Group | undefined, args_1: string | undefined) => Record<string, GroupMap>, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectEntriesSelectedGroup: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName?: string | undefined) => GroupMap | undefined) & import("reselect").OutputSelectorFields<(args_0: Record<string, GroupMap>) => GroupMap | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectEntriesSorts: (entries: RootState) => import("@staticcms/core").Sort;
export declare const selectEntriesSort: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName?: string | undefined) => SortMap) & import("reselect").OutputSelectorFields<(args_0: import("@staticcms/core").Sort, args_1: string | undefined) => SortMap, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectEntriesSelectedSort: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName?: string | undefined) => SortObject | undefined) & import("reselect").OutputSelectorFields<(args_0: SortMap) => SortObject | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare function selectViewStyle(entries: RootState): ViewStyle;
export declare function selectEntriesBySlugs(state: RootState): Entries;
export declare const selectEntry: ((state: Omit<import("redux").EmptyObject & {
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
}, _collectionName: string, slug: string | undefined) => Entry<ObjectValue> | null) & import("reselect").OutputSelectorFields<(args_0: Entries, args_1: string, args_2: string | undefined) => Entry<ObjectValue> | null, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectEntryPages: (state: RootState) => import("@staticcms/core").Pages;
export declare const selectEntryPage: (state: RootState, collectionName: string) => Page;
export declare const selectPublishedSlugs: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName: string) => string[]) & import("reselect").OutputSelectorFields<(args_0: Page) => string[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectPublishedEntries: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName: string) => Entry<ObjectValue>[]) & import("reselect").OutputSelectorFields<(args_0: Entries, args_1: string, args_2: string[]) => Entry<ObjectValue>[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare function getGroup(entry: Entry, selectedGroup: GroupMap): {
    id: string;
    label: string;
    value: undefined;
} | {
    id: string;
    label: string;
    value: string | boolean;
};
export declare const selectEntryByPath: ((state: Omit<import("redux").EmptyObject & {
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
}, _collectionName: string, path: string) => Entry<ObjectValue> | undefined) & import("reselect").OutputSelectorFields<(args_0: string[], args_1: string, args_2: string, args_3: Entries) => Entry<ObjectValue> | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectEntriesLoaded: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName: string) => boolean) & import("reselect").OutputSelectorFields<(args_0: Page) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare const selectIsFetching: ((state: Omit<import("redux").EmptyObject & {
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
}, collectionName: string) => boolean) & import("reselect").OutputSelectorFields<(args_0: Page) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export declare function selectSearchEntryIds(state: RootState): {
    collection: string;
    slug: string;
}[];
export declare const selectSearchedEntries: ((state: Omit<import("redux").EmptyObject & {
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
}, availableCollections: string[]) => Entry<ObjectValue>[]) & import("reselect").OutputSelectorFields<(args_0: {
    collection: string;
    slug: string;
}[], args_1: Entries, args_2: string[]) => Entry<ObjectValue>[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
