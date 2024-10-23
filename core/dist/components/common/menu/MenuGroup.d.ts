import type { FC, ReactNode } from 'react';
import './MenuGroup.css';
export declare const classes: Record<"root", string>;
export interface MenuGroupProps {
    children: ReactNode | ReactNode[];
}
declare const MenuGroup: FC<MenuGroupProps>;
export default MenuGroup;
