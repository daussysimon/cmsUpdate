import type { EditorSize } from '@staticcms/core/constants/views';
import type { CollectionWithDefaults, Entry, Field } from '@staticcms/core';
import type { FC } from 'react';
import './EditorPreviewPane.css';
export declare const classes: Record<"frame" | "compact" | "root" | "inline" | "show-mobile-preview" | "live-preview", string>;
export interface EditorPreviewPaneProps {
    collection: CollectionWithDefaults;
    fields: Field[];
    entry: Entry;
    previewInFrame: boolean;
    livePreviewUrlTemplate: string | undefined;
    editorSize: EditorSize;
    showMobilePreview: boolean;
}
declare const EditorPreviewPane: FC<EditorPreviewPaneProps>;
export default EditorPreviewPane;
