import type { BaseField, CollectionWithDefaults, Entry, MediaField, UnknownField } from '@staticcms/core';
export default function useIsMediaAsset<T extends MediaField, EF extends BaseField = UnknownField>(url: string, collection: CollectionWithDefaults<EF>, field: T, entry: Entry, currentFolder?: string): boolean;
