import type { FC } from 'react';
export interface EditorProps {
    name: string;
    slug?: string;
    newRecord: boolean;
}
declare const Editor: FC<EditorProps>;
export default Editor;
