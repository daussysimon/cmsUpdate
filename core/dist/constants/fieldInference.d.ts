import type { InferredField } from '../interface';
export type InferrableField = 'title' | 'shortTitle' | 'author' | 'date' | 'description' | 'image';
export declare const IDENTIFIER_FIELDS: readonly ["title", "path"];
export declare const SORTABLE_FIELDS: InferrableField[];
export declare const INFERABLE_FIELDS: Record<InferrableField, InferredField>;
