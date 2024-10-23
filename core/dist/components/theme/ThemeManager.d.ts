import type { Theme } from '@staticcms/core';
import type { FC, PropsWithChildren } from 'react';
export interface ThemeManagerProps {
    element: HTMLElement | undefined | null;
    theme: Theme;
}
declare const ThemeManager: FC<PropsWithChildren<ThemeManagerProps>>;
export default ThemeManager;
