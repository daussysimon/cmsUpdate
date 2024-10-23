import type { FC, MouseEvent, ReactNode } from 'react';
import './MenuItemButton.css';
export declare const classes: Record<"content" | "error" | "disabled" | "warning" | "default" | "root" | "start-icon" | "end-icon" | "active", string>;
export interface MenuItemButtonProps {
    active?: boolean;
    onClick: (event: MouseEvent) => void;
    children: ReactNode;
    rootClassName?: string;
    contentClassName?: string;
    disabled?: boolean;
    startIcon?: FC<{
        className?: string;
    }>;
    endIcon?: FC<{
        className?: string;
    }>;
    color?: 'default' | 'error' | 'warning';
    'data-testid'?: string;
}
declare const MenuItemButton: FC<MenuItemButtonProps>;
export default MenuItemButton;
