import type { CollectionWithDefaults, ConfigWithDefaults, Entry, EntryData, Field, InferredField } from '@staticcms/core';
import type { ReactNode } from 'react';
import './widgetFor.css';
export declare const classes: Record<"label", string>;
/**
 * Returns the widget component for a named field, and makes recursive calls
 * to retrieve components for nested and deeply nested fields, which occur in
 * object and list type fields. Used internally to retrieve widgets, and also
 * exposed for use in custom preview templates.
 */
export default function getWidgetFor(config: ConfigWithDefaults, collection: CollectionWithDefaults, name: string, fields: Field[], entry: Entry, inferredFields: Record<string, InferredField>, widgetFields?: Field[], values?: EntryData, idx?: number | null): ReactNode;
