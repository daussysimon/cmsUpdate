import React from 'react';
import type { Credentials } from '@staticcms/core';
import type { ConnectedProps } from 'react-redux';
import './App.css';
export declare const classes: Record<"content" | "root", string>;
declare const connector: import("react-redux").InferableComponentEnhancerWithProps<{
    auth: import("../reducers/auth").AuthState;
    config: import("../reducers/config").ConfigState<import("@staticcms/core").UnknownField>;
    collections: import("../reducers/collections").CollectionsState<import("@staticcms/core").UnknownField>;
    user: import("@staticcms/core").User | undefined;
    isFetching: boolean;
    scrollSyncEnabled: boolean;
} & {
    loginUser: (credentials: Credentials) => Promise<void> | undefined;
}, {}>;
export type AppProps = ConnectedProps<typeof connector>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<{
    auth: import("../reducers/auth").AuthState;
    config: import("../reducers/config").ConfigState<import("@staticcms/core").UnknownField>;
    collections: import("../reducers/collections").CollectionsState<import("@staticcms/core").UnknownField>;
    user: import("@staticcms/core").User | undefined;
    isFetching: boolean;
    scrollSyncEnabled: boolean;
} & {
    loginUser: (credentials: Credentials) => Promise<void> | undefined;
}>, {
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
