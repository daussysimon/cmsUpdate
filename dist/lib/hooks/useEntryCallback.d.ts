import type { CollectionWithDefaults } from '@staticcms/core';
interface EntryCallbackProps {
    hasLivePreview: boolean;
    collection: CollectionWithDefaults | undefined;
    slug: string | undefined;
    callback: () => void;
}
export default function useEntryCallback({ hasLivePreview, slug, collection, callback, }: EntryCallbackProps): void;
export {};
