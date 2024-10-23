import type { Breadcrumb, CollectionWithDefaults } from '@staticcms/core';
interface EntryDetails {
    isNewEntry: boolean;
    summary: string;
}
export default function useBreadcrumbs(collection: CollectionWithDefaults, filterTerm: string | undefined | null, entryDetails?: EntryDetails): Breadcrumb[];
export {};
