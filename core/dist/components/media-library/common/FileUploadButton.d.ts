import type { ChangeEventHandler, FC } from 'react';
export interface FileUploadButtonProps {
    imagesOnly?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement>;
}
declare const FileUploadButton: FC<FileUploadButtonProps>;
export default FileUploadButton;
