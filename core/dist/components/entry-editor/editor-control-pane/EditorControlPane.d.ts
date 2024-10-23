import type { CollectionWithDefaults, Entry, Field, FieldsErrors } from '@staticcms/core';
import type { FC } from 'react';
import './EditorControlPane.css';
export declare const classes: Record<"root" | "no-border" | "locale_dropdown_wrapper", string>;
export interface EditorControlPaneProps {
    collection: CollectionWithDefaults;
    entry: Entry;
    fields: Field[];
    fieldsErrors: FieldsErrors;
    submitted: boolean;
    locale?: string;
    canChangeLocale?: boolean;
    hideBorder: boolean;
    slug?: string;
    onLocaleChange?: (locale: string) => void;
    allowDefaultLocale?: boolean;
    context?: 'default' | 'i18nSplit';
    listItemPath?: string;
    disabled: boolean;
}
declare const EditorControlPane: FC<EditorControlPaneProps>;
export default EditorControlPane;
