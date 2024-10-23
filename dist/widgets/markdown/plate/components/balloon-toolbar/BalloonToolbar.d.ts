import type { CollectionWithDefaults, MarkdownField } from '@staticcms/core';
import type { FC } from 'react';
import './BalloonToolbar.css';
export interface BalloonToolbarProps {
    useMdx: boolean;
    containerRef: HTMLElement | null;
    collection: CollectionWithDefaults<MarkdownField>;
    field: MarkdownField;
    disabled: boolean;
}
declare const BalloonToolbar: FC<BalloonToolbarProps>;
export default BalloonToolbar;
