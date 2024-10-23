import type { ColorField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import './ColorControl.css';
export declare const classes: Record<"content" | "error" | "disabled" | "required" | "input" | "root" | "for-single-list" | "allow-input" | "color-swatch-wrapper" | "color-swatch" | "color-picker-wrapper" | "color-picker-backdrop" | "color-picker" | "clear-button", string>;
declare const ColorControl: FC<WidgetControlProps<string, ColorField>>;
export default ColorControl;
