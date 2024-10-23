import type { RelationField, WidgetControlProps } from '@staticcms/core';
import type { FC } from 'react';
import './RelationControl.css';
export declare const classes: Record<"values" | "error" | "disabled" | "required" | "root" | "loading" | "for-single-list", string>;
export interface Option {
    value: string;
    label: string;
}
declare const RelationControl: FC<WidgetControlProps<string | string[], RelationField>>;
export default RelationControl;
