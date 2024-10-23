import type { FC } from 'react';
export interface CodeBlockFrameProps {
    id: string;
    lang?: string;
    code: string;
}
declare const CodeBlockFrame: FC<CodeBlockFrameProps>;
export default CodeBlockFrame;
