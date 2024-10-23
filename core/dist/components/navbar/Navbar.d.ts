import type { Breadcrumb } from '@staticcms/core';
import type { FC, ReactNode } from 'react';
import './Navbar.css';
export declare const classes: Record<"content" | "logo" | "actions" | "root" | "quick-create" | "breadcrumbs" | "in-editor" | "content-wrapper" | "logo-wrapper" | "custom-logo" | "site-url" | "site-url-mobile" | "site-url-label" | "site-url-icon", string>;
export interface NavbarProps {
    breadcrumbs?: Breadcrumb[];
    showQuickCreate?: boolean;
    navbarActions?: ReactNode;
}
declare const Navbar: FC<NavbarProps>;
export default Navbar;
