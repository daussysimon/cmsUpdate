import type { CollectionFileWithDefaults, CollectionWithDefaults, ConfigWithDefaults, MediaField } from '@staticcms/core';
interface UseFolderSupportProps {
    config?: ConfigWithDefaults;
    collection?: CollectionWithDefaults;
    collectionFile?: CollectionFileWithDefaults;
    field?: MediaField;
}
export declare function getFolderSupport({ config, collection, collectionFile, field, }: UseFolderSupportProps): boolean;
export default function useFolderSupport(props: UseFolderSupportProps): boolean;
export {};
