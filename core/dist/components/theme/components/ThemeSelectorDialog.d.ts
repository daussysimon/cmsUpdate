import type { FC } from 'react';
import './ThemeSelectorDialog.css';
export declare const classes: Record<"title" | "header" | "grid" | "root", string>;
export interface ThemeSelectorDialogProps {
    open: boolean;
    onClose: () => void;
}
declare const ThemeSelectorDialog: FC<ThemeSelectorDialogProps>;
export default ThemeSelectorDialog;
