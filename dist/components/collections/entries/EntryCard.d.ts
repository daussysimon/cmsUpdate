import type { CollectionWithDefaults, DateTimeFormats, Entry } from '@staticcms/core';
import type { FC, ReactNode } from 'react';
import './EntryCard.css';
export declare const classes: Record<"date" | "description" | "content" | "summary" | "root" | "content-wrapper" | "no-margin" | "card" | "card-content" | "summary-wrapper" | "local-backup-icon" | "workflow-status", string>;
export interface EntryCardProps {
    entry: Entry;
    imageFieldName: string | null | undefined;
    descriptionFieldName: string | null | undefined;
    dateFieldName: string | null | undefined;
    dateFormats: DateTimeFormats | undefined;
    collection: CollectionWithDefaults;
    noMargin?: boolean;
    backTo?: string;
    children?: ReactNode;
    useWorkflow: boolean;
}
declare const EntryCard: FC<EntryCardProps>;
export default EntryCard;
