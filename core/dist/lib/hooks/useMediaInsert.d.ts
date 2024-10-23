import type { CollectionWithDefaults, MediaField, MediaLibrarInsertOptions, MediaPath } from '@staticcms/core';
import type { MouseEvent } from 'react';
export interface OpenMediaLibraryProps {
    forImage?: boolean;
    forFolder?: boolean;
    replaceIndex?: number;
}
export default function useMediaInsert<T extends string | string[], F extends MediaField>(value: MediaPath<T> | undefined, options: {
    collection: CollectionWithDefaults<F>;
    field: F;
    controlID?: string;
    forImage?: boolean;
    forFolder?: boolean;
    insertOptions?: MediaLibrarInsertOptions;
}, callback: (newValue: MediaPath<T>) => void | Promise<void>): (e?: MouseEvent, options?: OpenMediaLibraryProps) => void;
