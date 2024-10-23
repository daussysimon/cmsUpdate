import type { FC } from 'react';
import './Collection.css';
export interface CollectionViewProps {
    isSearchResults?: boolean;
    isSingleSearchResult?: boolean;
    name?: string;
    searchTerm?: string;
    filterTerm?: string;
}
declare const CollectionView: FC<CollectionViewProps>;
export default CollectionView;
