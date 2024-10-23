import type { FC } from 'react';
import './SettingsDropdown.css';
export declare const classes: Record<"root" | "in-editor" | "avatar-image" | "avatar-icon" | "sr-label", string>;
export interface SettingsDropdownProps {
    inEditor: boolean;
}
declare const SettingsDropdown: FC<SettingsDropdownProps>;
export default SettingsDropdown;
