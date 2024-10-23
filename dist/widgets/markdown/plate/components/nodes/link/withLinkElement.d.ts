import React from 'react';
import type { CollectionWithDefaults, MarkdownField } from '@staticcms/core';
import type { MdLinkElement, MdValue } from '@staticcms/markdown';
import type { PlateRenderElementProps } from '@udecode/plate';
import './LinkElement.css';
export interface WithLinkElementProps {
    collection: CollectionWithDefaults<MarkdownField>;
    field: MarkdownField;
}
declare const withLinkElement: ({ collection, field }: WithLinkElementProps) => React.FC<PlateRenderElementProps<MdValue, MdLinkElement>>;
export default withLinkElement;
