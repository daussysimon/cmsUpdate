import type { CollectionWithDefaults, FileOrImageField } from '@staticcms/core';
import type { FC, MouseEventHandler } from 'react';
import './SortableImage.css';
export interface SortableImageProps {
    id: string;
    itemValue: string;
    collection: CollectionWithDefaults<FileOrImageField>;
    field: FileOrImageField;
    onRemove?: MouseEventHandler;
    onReplace?: MouseEventHandler;
}
declare const SortableImage: FC<SortableImageProps>;
export default SortableImage;
