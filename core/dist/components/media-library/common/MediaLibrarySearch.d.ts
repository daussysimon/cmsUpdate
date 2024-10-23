import type { ChangeEventHandler, FC, KeyboardEventHandler } from 'react';
export interface MediaLibrarySearchProps {
    value?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onKeyDown: KeyboardEventHandler<HTMLInputElement>;
    placeholder: string;
    disabled?: boolean;
}
declare const MediaLibrarySearch: FC<MediaLibrarySearchProps>;
export default MediaLibrarySearch;
