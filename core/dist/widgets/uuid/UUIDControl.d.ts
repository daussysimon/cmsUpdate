import type { UUIDField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import './UUIDControl.css';
export declare const classes: Record<"error" | "disabled" | "required" | "input" | "root" | "for-single-list" | "refresh-button", string>;
declare const UUIDControl: FC<WidgetControlProps<string, UUIDField>>;
export default UUIDControl;
