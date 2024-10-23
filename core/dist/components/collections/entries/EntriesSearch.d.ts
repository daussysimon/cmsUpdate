import React from 'react';
import { clearSearch as clearSearchAction } from '@staticcms/core/actions/search';
import type { ViewStyle } from '@staticcms/core/constants/views';
import type { CollectionsWithDefaults } from '@staticcms/core';
import type { ConnectedProps } from 'react-redux';
interface EntriesSearchOwnProps {
    searchTerm: string;
    filterTerm: string;
    collections: CollectionsWithDefaults;
    viewStyle: ViewStyle;
}
declare const connector: import("react-redux").InferableComponentEnhancerWithProps<{
    isFetching: boolean;
    page: number;
    collections: CollectionsWithDefaults;
    viewStyle: ViewStyle;
    entries: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue>[];
    searchTerm: string;
    filterTerm: string;
} & {
    searchEntries: (searchTerm: string, searchCollections: string[], page?: number | undefined) => Promise<{
        readonly type: "SEARCH_ENTRIES_SUCCESS";
        readonly payload: {
            readonly entries: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue>[];
            readonly page: number;
        };
    } | {
        readonly type: "SEARCH_ENTRIES_FAILURE";
        readonly payload: {
            readonly error: Error;
        };
    } | undefined>;
    clearSearch: typeof clearSearchAction;
}, EntriesSearchOwnProps>;
export type EntriesSearchProps = ConnectedProps<typeof connector>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<{
    isFetching: boolean;
    page: number;
    collections: CollectionsWithDefaults;
    viewStyle: ViewStyle;
    entries: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue>[];
    searchTerm: string;
    filterTerm: string;
} & {
    searchEntries: (searchTerm: string, searchCollections: string[], page?: number | undefined) => Promise<{
        readonly type: "SEARCH_ENTRIES_SUCCESS";
        readonly payload: {
            readonly entries: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue>[];
            readonly page: number;
        };
    } | {
        readonly type: "SEARCH_ENTRIES_FAILURE";
        readonly payload: {
            readonly error: Error;
        };
    } | undefined>;
    clearSearch: typeof clearSearchAction;
}>, {
    searchTerm: string;
    filterTerm: string;
    collections: CollectionsWithDefaults;
    viewStyle: ViewStyle;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
