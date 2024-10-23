import type { SortableField, SortDirection, SortMap } from '@staticcms/core';
import type { FC } from 'react';
import './SortControl.css';
export declare const classes: Record<"list" | "option" | "root" | "list-label" | "list-option" | "list-option-label" | "list-option-sorted-icon" | "list-option-not-sorted", string>;
export interface SortControlProps {
    fields: SortableField[] | undefined;
    sort: SortMap | undefined;
    variant?: 'menu' | 'list';
    onSortClick: ((key: string, direction?: SortDirection) => Promise<void>) | undefined;
}
declare const SortControl: FC<SortControlProps>;
export default SortControl;
