import type { FC, MouseEventHandler, ReactNode } from 'react';
import './NavLink.css';
export declare const classes: Record<"label" | "content" | "link" | "icon" | "root" | "external" | "external-content" | "external-icon", string>;
export interface BaseNavLinkProps {
    icon?: ReactNode;
    children: ReactNode;
    className?: string;
    'data-testid'?: string;
    onClick?: MouseEventHandler;
}
export interface NavExternalLinkProps extends BaseNavLinkProps {
    href: string;
}
export interface NavInternalLinkProps extends BaseNavLinkProps {
    to: string;
}
export type NavLinkProps = NavExternalLinkProps | NavInternalLinkProps;
declare const NavLink: FC<NavLinkProps>;
export default NavLink;
