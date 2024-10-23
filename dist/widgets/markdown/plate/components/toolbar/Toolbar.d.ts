import type { CollectionWithDefaults, MarkdownField } from '@staticcms/core';
import type { FC } from 'react';
import './Toolbar.css';
export interface ToolbarProps {
    useMdx: boolean;
    collection: CollectionWithDefaults<MarkdownField>;
    field: MarkdownField;
    disabled: boolean;
}
declare const Toolbar: FC<ToolbarProps>;
export default Toolbar;
