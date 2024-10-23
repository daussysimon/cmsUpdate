import type { FC } from 'react';
export interface CopyToClipBoardButtonProps {
    draft?: boolean;
    path?: string;
    name?: string;
}
declare const CopyToClipBoardButton: FC<CopyToClipBoardButtonProps>;
export default CopyToClipBoardButton;
