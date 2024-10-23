import type { FC } from 'react';
import type { FilterControlProps } from '../FilterControl';
import type { GroupControlProps } from '../GroupControl';
import type { SortControlProps } from '../SortControl';
export type MobileCollectionControlsDrawerProps = Omit<FilterControlProps, 'variant'> & Omit<GroupControlProps, 'variant'> & Omit<SortControlProps, 'variant'> & {
    mobileOpen: boolean;
    onMobileOpenToggle: () => void;
} & {
    showGroupControl: boolean;
    showFilterControl: boolean;
    showSortControl: boolean;
};
declare const MobileCollectionControlsDrawer: FC<MobileCollectionControlsDrawerProps>;
export default MobileCollectionControlsDrawer;
