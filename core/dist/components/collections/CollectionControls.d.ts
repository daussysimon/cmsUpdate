import type { FilterMap, GroupMap, SortableField, SortDirection, SortMap, ViewFilterWithDefaults, ViewGroupWithDefaults } from '@staticcms/core';
import type { ViewStyle } from '@staticcms/core/constants/views';
import type { FC } from 'react';
interface CollectionControlsProps {
    viewStyle: ViewStyle;
    onChangeViewStyle: (viewStyle: ViewStyle) => void;
    sortableFields?: SortableField[];
    onSortClick?: (key: string, direction?: SortDirection) => Promise<void>;
    sort?: SortMap | undefined;
    filter?: Record<string, FilterMap>;
    viewFilters?: ViewFilterWithDefaults[];
    onFilterClick?: (filter: ViewFilterWithDefaults) => void;
    group?: Record<string, GroupMap>;
    viewGroups?: ViewGroupWithDefaults[];
    onGroupClick?: (filter: ViewGroupWithDefaults) => void;
}
declare const CollectionControls: FC<CollectionControlsProps>;
export default CollectionControls;
