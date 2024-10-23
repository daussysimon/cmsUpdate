import type { CollectionWithDefaults } from '@staticcms/core';
import type { FC } from 'react';
import './BottomNavigation.css';
export declare const classes: Record<"root" | "menu-button" | "menu-button-icon" | "add-button" | "add-button-icon" | "quick-create" | "quick-create-button" | "site-url-button" | "site-url-button-icon", string>;
export interface BottomNavigationProps {
    collection: CollectionWithDefaults | undefined;
}
declare const BottomNavigation: FC<BottomNavigationProps>;
export default BottomNavigation;
