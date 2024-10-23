import type { FC } from 'react';
import './FolderCreationDialog.css';
export declare const classes: Record<"title" | "header" | "actions" | "root" | "cancel-button" | "close-button" | "close-button-icon" | "name-input-wrapper" | "name-input" | "create-button", string>;
interface FolderCreationDialogProps {
    open: boolean;
    onClose: () => void;
    onCreate: (folderName: string) => void;
}
declare const FolderCreationDialog: FC<FolderCreationDialogProps>;
export default FolderCreationDialog;
