import type { CollectionWithDefaults, CollectionsWithDefaults, Entry } from '@staticcms/core';
import type { ViewStyle } from '@staticcms/core/constants/views';
import type Cursor from '@staticcms/core/lib/util/Cursor';
import type { FC } from 'react';
import './Entries.css';
export interface BaseEntriesProps {
    entries: Entry[];
    page?: number;
    isFetching: boolean;
    viewStyle: ViewStyle;
    cursor: Cursor;
    filterTerm: string;
    handleCursorActions?: (action: string) => void;
}
export interface SingleCollectionEntriesProps extends BaseEntriesProps {
    collection: CollectionWithDefaults;
}
export interface MultipleCollectionEntriesProps extends BaseEntriesProps {
    collections: CollectionsWithDefaults;
}
export type EntriesProps = SingleCollectionEntriesProps | MultipleCollectionEntriesProps;
declare const Entries: FC<EntriesProps>;
export default Entries;
