import React from 'react';
import type { CollectionEntryData } from '@staticcms/core';
import type { FC } from 'react';
export interface EntryListingCardGridProps {
    scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
    entryData: CollectionEntryData[];
    onScroll: () => void;
}
export interface CardGridItemData {
    columnCount: number;
    cardHeights: number[];
    entryData: CollectionEntryData[];
    useWorkflow: boolean;
}
declare const EntryListingCardGrid: FC<EntryListingCardGridProps>;
export default EntryListingCardGrid;
