import React from 'react';
import type { CollectionWithDefaults, FileOrImageField, MarkdownField, MediaPath } from '@staticcms/core';
import './MediaPopover.css';
export interface MediaPopoverProps<T extends FileOrImageField | MarkdownField> {
    anchorEl: HTMLElement | null;
    url: string;
    text?: string;
    forImage?: boolean;
    collection: CollectionWithDefaults<T>;
    field: T;
    onMediaToggle?: (open: boolean) => void;
    onMediaChange: (newValue: MediaPath<string>) => void;
    onRemove?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
}
declare const MediaPopover: <T extends FileOrImageField | MarkdownField>({ anchorEl, url, text, forImage, collection, field, onMediaToggle, onMediaChange, onRemove, onFocus, onBlur, }: MediaPopoverProps<T>) => React.JSX.Element;
export default MediaPopover;
