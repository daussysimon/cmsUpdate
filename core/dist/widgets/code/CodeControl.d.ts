import type { CodeField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import './CodeControl.css';
export declare const classes: Record<"label" | "error" | "disabled" | "required" | "root" | "expanded" | "for-single-list" | "field-wrapper" | "expand-button" | "expand-button-icon" | "error-message", string>;
declare const CodeControl: FC<WidgetControlProps<string | {
    [key: string]: string;
}, CodeField>>;
export default CodeControl;
