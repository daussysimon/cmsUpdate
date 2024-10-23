import type { DateTimeField } from '@staticcms/core';
import type { FC } from 'react';
import './NowButton.css';
export interface NowButtonProps {
    handleChange: (value: Date) => void;
    field: DateTimeField;
    disabled: boolean;
}
declare const NowButton: FC<NowButtonProps>;
export default NowButton;
