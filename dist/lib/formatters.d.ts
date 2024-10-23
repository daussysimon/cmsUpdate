import type { BaseField, CollectionWithDefaults, ConfigWithDefaults, Entry, EntryData, Field, Slug, UnknownField } from '../interface';
declare const commitMessageTemplates: {
    readonly create: "Create {{collection}} “{{slug}}”";
    readonly update: "Update {{collection}} “{{slug}}”";
    readonly delete: "Delete {{collection}} “{{slug}}”";
    readonly uploadMedia: "Upload “{{path}}”";
    readonly deleteMedia: "Delete “{{path}}”";
    readonly openAuthoring: "{{message}}";
};
type Options<EF extends BaseField> = {
    slug?: string;
    path?: string;
    collection?: CollectionWithDefaults<EF>;
    authorLogin?: string;
    authorName?: string;
    data?: EntryData;
};
export declare function commitMessageFormatter<EF extends BaseField>(type: keyof typeof commitMessageTemplates, config: ConfigWithDefaults<EF>, { slug, path, collection, authorLogin, authorName, data }: Options<EF>, isOpenAuthoring?: boolean): string;
export declare function prepareSlug(slug: string): string;
export declare function getProcessSegment(slugConfig?: Slug, ignoreValues?: string[]): (value: string) => string;
export declare function slugFormatter<EF extends BaseField = UnknownField>(collection: CollectionWithDefaults<EF>, entryData: EntryData, slugConfig: Slug | undefined, fields: Field[] | undefined): string;
export declare function summaryFormatter<EF extends BaseField>(summaryTemplate: string, entry: Entry, collection: CollectionWithDefaults<EF>, slugConfig?: Slug): string;
export declare function folderFormatter<EF extends BaseField>(folderTemplate: string, entry: Entry | null | undefined, collection: CollectionWithDefaults<EF> | undefined, defaultFolder: string, folderKey: string, slugConfig?: Slug): string;
export {};
