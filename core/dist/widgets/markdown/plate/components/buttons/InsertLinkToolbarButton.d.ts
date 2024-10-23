import type { CollectionWithDefaults, MarkdownField } from '@staticcms/core';
import type { FC } from 'react';
export interface InsertLinkToolbarButtonProps {
    variant: 'button' | 'menu';
    currentValue?: {
        url: string;
        alt?: string;
    };
    collection: CollectionWithDefaults<MarkdownField>;
    field: MarkdownField;
    disabled: boolean;
}
declare const InsertLinkToolbarButton: FC<InsertLinkToolbarButtonProps>;
export default InsertLinkToolbarButton;
