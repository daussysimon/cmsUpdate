import type { CollectionEntryData } from '@staticcms/core';
import type { FC } from 'react';
export interface EntryListingGridProps {
    entryData: CollectionEntryData[];
    canLoadMore?: boolean;
    isLoadingEntries: boolean;
    onLoadMore: () => void;
}
declare const EntryListingGrid: FC<EntryListingGridProps>;
export default EntryListingGrid;
