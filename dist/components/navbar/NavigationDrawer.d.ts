import type { FC } from 'react';
import './NavigationDrawer.css';
export declare const classes: Record<"content" | "root", string>;
interface NavigationDrawerProps {
    mobileOpen: boolean;
    onMobileOpenToggle: () => void;
}
declare const NavigationDrawer: FC<NavigationDrawerProps>;
export default NavigationDrawer;
