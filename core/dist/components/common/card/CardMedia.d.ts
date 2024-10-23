import React from 'react';
import type { BaseField, CollectionWithDefaults, Entry, MediaField, UnknownField } from '@staticcms/core';
interface CardMediaProps<EF extends BaseField> {
    image: string;
    width?: string | number;
    height?: string | number;
    alt?: string;
    collection?: CollectionWithDefaults<EF>;
    field?: MediaField;
    entry?: Entry;
}
declare const CardMedia: <EF extends BaseField = UnknownField>({ image, width, height, alt, collection, field, entry, }: CardMediaProps<EF>) => React.JSX.Element;
export default CardMedia;
