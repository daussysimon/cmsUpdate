import type { Theme } from '@staticcms/core';
import type { FC } from 'react';
import './ThemeCard.css';
export declare const classes: Record<"content" | "preview" | "button" | "root" | "active" | "preview-appbar" | "preview-logo-wrapper" | "preview-logo" | "preview-custom-logo" | "preview-breadcrumbs" | "preview-appbar-actions" | "preview-avatar" | "preview-content" | "preview-primary-button" | "preview-secondary-button" | "preview-text" | "preview-sidebar" | "preview-main" | "preview-main-actions" | "preview-error-button" | "preview-warning-button" | "preview-info-button" | "preview-success-button" | "preview-card" | "preview-collection-row" | "preview-collection-highlight", string>;
export interface ThemeCardProps {
    currentTheme: string;
    theme: Theme;
    onClick: (themeName: string) => void;
}
declare const ThemeCard: FC<ThemeCardProps>;
export default ThemeCard;
