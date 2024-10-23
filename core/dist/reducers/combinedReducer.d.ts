declare function createRootReducer(): import("redux").Reducer<import("redux").CombinedState<{
    snackbar: import("../store/slices/snackbars").SnackbarState;
    auth: import("./auth").AuthState;
    collections: import("./collections").CollectionsState<import("..").UnknownField>;
    config: import("./config").ConfigState<import("..").UnknownField>;
    cursors: import("./cursors").CursorsState;
    editorialWorkflow: import("./editorialWorkflow").EditorialWorkflowState;
    entries: import("./entries").EntriesState;
    entryDraft: import("./entryDraft").EntryDraftState;
    globalUI: import("./globalUI").GlobalUIState;
    mediaLibrary: import("./mediaLibrary").MediaLibraryState;
    medias: import("./medias").MediasState;
    scroll: import("./scroll").ScrollState;
    search: import("./search").SearchState;
    status: import("./status").StatusState;
}>, import("redux").AnyAction | import("../actions/auth").AuthAction | import("../actions/config").ConfigAction | import("../actions/globalUI").GlobalUIAction | import("../actions/media").MediasAction | import("../actions/scroll").ScrollAction | import("../actions/search").SearchAction | import("../actions/status").StatusAction | import("../actions/entries").EntriesAction | import("../actions/editorialWorkflow").EditorialWorkflowAction | import("../actions/mediaLibrary").MediaLibraryAction>;
export default createRootReducer;
