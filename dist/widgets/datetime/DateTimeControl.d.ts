import type { DateTimeField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import './DateTimeControl.css';
export declare const classes: Record<"error" | "disabled" | "required" | "input" | "root" | "for-single-list" | "wrapper" | "inputs" | "input-wrapper", string>;
declare const DateTimeControl: FC<WidgetControlProps<string | Date, DateTimeField>>;
export default DateTimeControl;
