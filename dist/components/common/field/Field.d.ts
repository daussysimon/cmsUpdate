import React from 'react';
import type { FieldError } from '@staticcms/core';
import type { FC, ReactNode } from 'react';
import './Field.css';
export declare const classes: Record<"label" | "error" | "disabled" | "hint" | "root" | "no-padding" | "inline" | "for-single-list" | "cursor-pointer" | "cursor-text" | "cursor-default" | "wrapper" | "inline-wrapper" | "no-highlight" | "valid" | "end-adornment", string>;
export interface FieldProps {
    label?: string;
    inputRef?: React.MutableRefObject<HTMLElement | null>;
    children: ReactNode | ReactNode[];
    errors: FieldError[];
    variant?: 'default' | 'inline';
    cursor?: 'default' | 'pointer' | 'text';
    hint?: string;
    forSingleList?: boolean;
    noPadding?: boolean;
    noHightlight?: boolean;
    disabled: boolean;
    disableClick?: boolean;
    endAdornment?: ReactNode;
    rootClassName?: string;
    wrapperClassName?: string;
}
declare const Field: FC<FieldProps>;
export default Field;
