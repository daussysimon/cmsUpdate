import type { CollectionWithDefaults, MediaField, MediaLibraryDisplayURL } from '@staticcms/core';
import type { FC } from 'react';
import './MediaLibraryCard.css';
export declare const classes: Record<"image" | "text" | "file" | "folder" | "details" | "root" | "controls" | "action" | "outline" | "folder-icon" | "handle" | "controls-overlay" | "control-icon" | "download-button" | "delete-button" | "selection-overlay" | "draft-pill", string>;
interface MediaLibraryCardProps {
    isSelected?: boolean;
    displayURL: MediaLibraryDisplayURL;
    path: string;
    text: string;
    draftText: string;
    type?: string;
    isViewableImage: boolean;
    isDraft?: boolean;
    isDirectory?: boolean;
    collection?: CollectionWithDefaults;
    field?: MediaField;
    currentFolder?: string;
    hasSelection: boolean;
    allowMultiple: boolean;
    onSelect: (action: 'add' | 'remove' | 'replace') => void;
    onDirectoryOpen: () => void;
    loadDisplayURL: () => void;
    onDelete: () => void;
}
declare const MediaLibraryCard: FC<MediaLibraryCardProps>;
export default MediaLibraryCard;
