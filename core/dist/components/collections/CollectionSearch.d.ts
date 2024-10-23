import type { CollectionWithDefaults, CollectionsWithDefaults } from '@staticcms/core';
import type { FC } from 'react';
import './CollectionSearch.css';
export declare const classes: Record<"content" | "icon" | "input" | "root" | "icon-wrapper" | "search-in" | "search-in-content" | "search-in-label" | "search-in-option", string>;
interface CollectionSearchProps {
    collections: CollectionsWithDefaults;
    collection?: CollectionWithDefaults;
    searchTerm: string | undefined;
    onSubmit: (query: string, collection?: string) => void;
}
declare const CollectionSearch: FC<CollectionSearchProps>;
export default CollectionSearch;
