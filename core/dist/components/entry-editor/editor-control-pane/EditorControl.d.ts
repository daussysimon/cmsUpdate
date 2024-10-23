import React from 'react';
import { changeDraftField as changeDraftFieldAction } from '@staticcms/core/actions/entries';
import type { Field, FieldsErrors, I18nSettings, UnknownField, ValueOrNestedValue } from '@staticcms/core';
import type { ConnectedProps } from 'react-redux';
import './EditorControl.css';
export declare const classes: Record<"hidden" | "root", string>;
interface EditorControlOwnProps {
    field: Field;
    fieldsErrors: FieldsErrors;
    submitted: boolean;
    disabled: boolean;
    parentDuplicate?: boolean;
    locale?: string;
    parentPath: string;
    value: ValueOrNestedValue;
    forList?: boolean;
    listItemPath?: string;
    forSingleList?: boolean;
    i18n: I18nSettings | undefined;
    fieldName?: string;
    controlled?: boolean;
    isMeta?: boolean;
}
declare const connector: import("react-redux").InferableComponentEnhancerWithProps<{
    config: import("../../../reducers/config").ConfigState<UnknownField>;
    entry: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue> | undefined;
    collection: import("@staticcms/core").CollectionWithDefaults<UnknownField> | null;
    collectionFile: import("@staticcms/core").CollectionFileWithDefaults<UnknownField> | undefined;
    isLoadingAsset: boolean;
    field: Field;
    fieldsErrors: FieldsErrors;
    submitted: boolean;
    disabled: boolean;
    parentDuplicate?: boolean | undefined;
    locale?: string | undefined;
    parentPath: string;
    value: ValueOrNestedValue;
    forList?: boolean | undefined;
    listItemPath?: string | undefined;
    forSingleList?: boolean | undefined;
    i18n: I18nSettings | undefined;
    fieldName?: string | undefined;
    controlled?: boolean | undefined;
    isMeta?: boolean | undefined;
} & {
    changeDraftField: typeof changeDraftFieldAction;
    query: (namespace: string, collectionName: string, searchFields: string[], searchTerm: string, file?: string | undefined, limit?: number | undefined) => Promise<{
        readonly type: "QUERY_SUCCESS";
        readonly payload: {
            readonly namespace: string;
            readonly hits: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue>[];
        };
    } | {
        readonly type: "QUERY_FAILURE";
        readonly payload: {
            readonly error: Error;
        };
    } | undefined>;
}, EditorControlOwnProps>;
export type EditorControlProps = ConnectedProps<typeof connector>;
declare const _default: import("react-redux").ConnectedComponent<React.FC<{
    config: import("../../../reducers/config").ConfigState<UnknownField>;
    entry: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue> | undefined;
    collection: import("@staticcms/core").CollectionWithDefaults<UnknownField> | null;
    collectionFile: import("@staticcms/core").CollectionFileWithDefaults<UnknownField> | undefined;
    isLoadingAsset: boolean;
    field: Field;
    fieldsErrors: FieldsErrors;
    submitted: boolean;
    disabled: boolean;
    parentDuplicate?: boolean | undefined;
    locale?: string | undefined;
    parentPath: string;
    value: ValueOrNestedValue;
    forList?: boolean | undefined;
    listItemPath?: string | undefined;
    forSingleList?: boolean | undefined;
    i18n: I18nSettings | undefined;
    fieldName?: string | undefined;
    controlled?: boolean | undefined;
    isMeta?: boolean | undefined;
} & {
    changeDraftField: typeof changeDraftFieldAction;
    query: (namespace: string, collectionName: string, searchFields: string[], searchTerm: string, file?: string | undefined, limit?: number | undefined) => Promise<{
        readonly type: "QUERY_SUCCESS";
        readonly payload: {
            readonly namespace: string;
            readonly hits: import("@staticcms/core").Entry<import("@staticcms/core").ObjectValue>[];
        };
    } | {
        readonly type: "QUERY_FAILURE";
        readonly payload: {
            readonly error: Error;
        };
    } | undefined>;
}>, {
    field: Field;
    fieldsErrors: FieldsErrors;
    submitted: boolean;
    disabled: boolean;
    parentDuplicate?: boolean | undefined;
    locale?: string | undefined;
    parentPath: string;
    value: ValueOrNestedValue;
    forList?: boolean | undefined;
    listItemPath?: string | undefined;
    forSingleList?: boolean | undefined;
    i18n: I18nSettings | undefined;
    fieldName?: string | undefined;
    controlled?: boolean | undefined;
    isMeta?: boolean | undefined;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
