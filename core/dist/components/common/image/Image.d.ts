import React from 'react';
import type { BaseField, CollectionWithDefaults, Entry, MediaField, UnknownField } from '@staticcms/core';
import type { CSSProperties } from 'react';
import './Image.css';
export declare const classes: Record<"root" | "empty", string>;
export interface ImageProps<EF extends BaseField> {
    src?: string;
    alt?: string;
    className?: string;
    style?: CSSProperties;
    collection?: CollectionWithDefaults<EF>;
    field?: MediaField;
    entry?: Entry;
    'data-testid'?: string;
}
declare const Image: <EF extends BaseField = UnknownField>({ src, alt, className, style, collection, field, entry, "data-testid": dataTestId, }: ImageProps<EF>) => React.JSX.Element;
export declare const withMdxImage: <EF extends BaseField = UnknownField>({ collection, field, }: Pick<ImageProps<EF>, "field" | "collection">) => (props: Omit<ImageProps<EF>, "field" | "collection">) => React.JSX.Element;
export default Image;
