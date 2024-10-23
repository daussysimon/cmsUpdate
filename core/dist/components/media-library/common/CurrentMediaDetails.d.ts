import type { CollectionWithDefaults, MediaField, MediaLibrarInsertOptions } from '@staticcms/core';
import type { FC } from 'react';
interface CurrentMediaDetailsProps {
    collection?: CollectionWithDefaults;
    field?: MediaField;
    canInsert: boolean;
    url?: string | string[];
    alt?: string;
    insertOptions?: MediaLibrarInsertOptions;
    forImage: boolean;
    replaceIndex?: number;
    onUrlChange: (url: string) => void;
    onAltChange: (alt: string) => void;
}
declare const CurrentMediaDetails: FC<CurrentMediaDetailsProps>;
export default CurrentMediaDetails;
