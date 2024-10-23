import type { CollectionEntryData } from '@staticcms/core';
import type { FC } from 'react';
export interface EntryListingTableProps {
    isSingleCollectionInList: boolean;
    entryData: CollectionEntryData[];
    summaryFields: {
        name: string;
        label: string;
    }[];
    canLoadMore: boolean;
    isLoadingEntries: boolean;
    loadNext: () => void;
}
declare const EntryListingTable: FC<EntryListingTableProps>;
export default EntryListingTable;
