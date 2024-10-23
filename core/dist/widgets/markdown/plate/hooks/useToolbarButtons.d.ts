import type { CollectionWithDefaults, MarkdownField, MarkdownToolbarButtonType, MarkdownToolbarItem } from '@staticcms/core';
import type { ReactNode } from 'react';
import './useToolbarButtons.css';
export default function useToolbarButtons(toolbarButtons: MarkdownToolbarItem[], collection: CollectionWithDefaults<MarkdownField>, field: MarkdownField, disabled: boolean): ReactNode[];
export declare function getToolbarButtons(toolbarButtons: MarkdownToolbarItem[] | MarkdownToolbarButtonType[], collection: CollectionWithDefaults<MarkdownField>, field: MarkdownField, disabled: boolean): ReactNode[];
