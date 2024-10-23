import type { ViewStyle } from '@staticcms/core/constants/views';
import type { CollectionWithDefaults, CollectionsWithDefaults, Entry } from '@staticcms/core';
import type Cursor from '@staticcms/core/lib/util/Cursor';
import type { FC } from 'react';
export interface BaseEntryListingProps {
    entries: Entry[];
    viewStyle: ViewStyle;
    cursor?: Cursor;
    isLoadingEntries: boolean;
    filterTerm: string;
    handleCursorActions?: (action: string) => void;
    page?: number;
}
export interface SingleCollectionEntryListingProps extends BaseEntryListingProps {
    collection: CollectionWithDefaults;
}
export interface MultipleCollectionEntryListingProps extends BaseEntryListingProps {
    collections: CollectionsWithDefaults;
}
export type EntryListingProps = SingleCollectionEntryListingProps | MultipleCollectionEntryListingProps;
declare const EntryListing: FC<EntryListingProps>;
export default EntryListing;
