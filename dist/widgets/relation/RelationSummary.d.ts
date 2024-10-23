import type { Entry, RelationField, ValueOrNestedValue } from '@staticcms/core/interface';
import type { FC } from 'react';
import './RelationControl.css';
export declare const classes: Record<"values" | "error" | "disabled" | "required" | "root" | "loading" | "for-single-list", string>;
export interface Option {
    value: string;
    label: string;
}
export interface RelationSummaryProps {
    field: RelationField;
    value: ValueOrNestedValue;
    locale: string | undefined;
    entry: Entry;
}
declare const RelationSummary: FC<RelationSummaryProps>;
export default RelationSummary;
