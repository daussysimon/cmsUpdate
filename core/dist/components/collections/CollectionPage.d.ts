import type { CollectionWithDefaults } from '@staticcms/core';
import type { FC } from 'react';
interface CollectionPageProps {
    collection?: CollectionWithDefaults;
    isSearchResults?: boolean;
    isSingleSearchResult?: boolean;
}
declare const CollectionPage: FC<CollectionPageProps>;
export default CollectionPage;
