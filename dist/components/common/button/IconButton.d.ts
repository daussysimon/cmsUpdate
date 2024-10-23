import type { FC } from 'react';
import type { ButtonExternalLinkProps, ButtonInternalLinkProps, ButtonProps } from './Button';
import './IconButton.css';
export declare const classes: Record<"icon" | "md" | "root" | "sm", string>;
export interface BaseIconButtonProps {
    rootClassName?: string;
    iconClassName?: string;
    icon: FC<{
        className?: string;
    }>;
}
export type IconButtonProps = Omit<ButtonProps, 'children' | 'className'> & BaseIconButtonProps;
export type IconButtonInternalLinkProps = Omit<ButtonInternalLinkProps, 'children' | 'className'> & BaseIconButtonProps;
export type IconButtonExternalLinkProps = Omit<ButtonExternalLinkProps, 'children' | 'className'> & BaseIconButtonProps;
export type IconLinkProps = IconButtonInternalLinkProps | IconButtonExternalLinkProps;
export type IconButtonLinkProps = IconButtonProps | IconLinkProps;
declare const IconButton: FC<IconButtonLinkProps>;
export default IconButton;
