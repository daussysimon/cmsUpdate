import type { ChangeEventHandler, FC } from 'react';
import './Checkbox.css';
export declare const classes: Record<"md" | "disabled" | "input" | "root" | "sm" | "custom-input" | "checkmark", string>;
export interface CheckboxProps {
    id?: string;
    size?: 'sm' | 'md';
    checked: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Checkbox: FC<CheckboxProps>;
export default Checkbox;
