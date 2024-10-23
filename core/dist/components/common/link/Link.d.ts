import React from 'react';
import type { CollectionWithDefaults, MediaField } from '@staticcms/core';
export interface LinkProps<F extends MediaField> {
    href: string | undefined | null;
    children: string;
    collection?: CollectionWithDefaults<F>;
    field?: F;
    'data-testid'?: string;
}
declare const Link: <F extends MediaField>({ href, children, collection, field, "data-testid": dataTestId, }: LinkProps<F>) => React.JSX.Element;
export declare const withMdxLink: <F extends MediaField>({ collection, field, }: Pick<LinkProps<F>, "field" | "collection">) => React.FC<Omit<LinkProps<F>, "field" | "collection">>;
export default Link;
