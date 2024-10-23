import React from 'react';
import type { CollectionWithDefaults, Entry, MarkdownField } from '@staticcms/core';
import type { MdImageElement, MdValue } from '@staticcms/markdown';
import type { PlateRenderElementProps } from '@udecode/plate';
export interface WithImageElementProps {
    collection: CollectionWithDefaults<MarkdownField>;
    entry: Entry;
    field: MarkdownField;
}
declare const withImageElement: ({ collection, entry, field }: WithImageElementProps) => React.FC<PlateRenderElementProps<MdValue, MdImageElement>>;
export default withImageElement;
