import type { BaseField, CollectionWithDefaults, Entry, Slug } from '@staticcms/core';
interface BaseTreeNodeData {
    title: string | undefined;
    path: string;
    isDir: boolean;
    isRoot: boolean;
    expanded?: boolean;
}
export type SingleTreeNodeData = BaseTreeNodeData | (Entry & BaseTreeNodeData);
export type TreeNodeData = SingleTreeNodeData & {
    children: TreeNodeData[];
};
export declare function selectCustomPath(entry: Entry, collection: CollectionWithDefaults, rootSlug: string | undefined, slugConfig: Slug | undefined): string | undefined;
export declare function customPathFromSlug(collection: CollectionWithDefaults, slug: string): string;
export declare function slugFromCustomPath(collection: CollectionWithDefaults, customPath: string): string;
export declare function getNestedSlug(collection: CollectionWithDefaults, entry: Entry, slug: string | undefined, slugConfig: Slug | undefined): string;
export declare function getTreeData<EF extends BaseField>(collection: CollectionWithDefaults<EF>, entries: Entry[]): TreeNodeData[];
export {};
