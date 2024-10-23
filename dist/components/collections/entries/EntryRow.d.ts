import type { CollectionWithDefaults, Entry, TranslatedProps } from '@staticcms/core';
import type { FC } from 'react';
export interface EntryRowProps {
    entry: Entry;
    collection: CollectionWithDefaults;
    collectionLabel?: string;
    columnFields: string[];
}
declare const EntryRow: FC<TranslatedProps<EntryRowProps>>;
export default EntryRow;
